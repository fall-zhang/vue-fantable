<!--
  expandedRowkeys 和 props.expandOption.expandedRowKeys 变量明冲突？
 -->
<template>
  <tbody>
    <tr style="height:0;">
      <VueDomResizeObserver v-for="column in colgroups" :id="column.key" :key="getDomResizeObserverCompKey(
        column.key,
        columnsOptionResetTime,
      )" tag-name="td" :style="{
        padding: 0,
        border: 0,
        height: 0,
      }" @dom-resize-change="tdSizeChange">
      </VueDomResizeObserver>
    </tr>
    <template v-for="(rowData, rowIndex) in actualRenderTableData" :key="getTrKey({ rowData, rowIndex })">
      <template v-if="showVirtualScrollingPlaceholder">
        <template v-if="virtualScrollRepeatRenderedRowKeys.indexOf(rowData[rowKeyFieldName]) !== -1">
          <BodyTr v-bind="trProps" :key="getTrKey({ rowData, rowIndex })" :row-index="rowIndex" :row-data="rowData"
            :is-expand-row="isExpandRow({ rowData, rowIndex })" />
        </template>

        <template v-else>
          <BodyTrScrolling :key="getTrKey({ rowData, rowIndex })" :colgroups="colgroups" />
        </template>
      </template>
      <template v-else>
        <BodyTr :row-index="rowIndex" :row-data="rowData" v-bind="trProps"
          :is-expand-row="isExpandRow({ rowData, rowIndex })" />
        <component :is="getExpandRowComp({ rowData, rowIndex })"></component>
      </template>
    </template>
  </tbody>
</template>

<script setup lang="tsx">
import {
  getDomResizeObserverCompKey,
  getFixedTotalWidthByColumnKey,
  clsName,
} from '../util/index.js'
import { getValByUnit } from '@P/src/utils/index.js'
import {
  COMPS_NAME,
  COLUMN_TYPES,
  EXPAND_TRIGGER_TYPES,
} from '../util/constant'
// import eventCenter from '@P/events/event-center'
import VueDomResizeObserver from '@P/src/components/resize-observer/index.js'
import BodyTr from './body-tr.jsx'
import BodyTrScrolling from './body-tr-scrolling.jsx'
import ExpandTr from './expand-tr.jsx'
import { GLOBAL_EVENT } from '@P/events/global-events.js'
import { ref, inject, computed, watch, onMounted, nextTick } from 'vue'

const props = defineProps({
  tableViewportWidth: {
    type: Number,
    default: 0,
  },
  columnsOptionResetTime: {
    type: Number,
    default: 0,
  },
  colgroups: {
    type: Array,
    required: true,
  },
  actualRenderTableData: {
    type: Array,
    required: true,
  },
  hasFixedColumn: {
    type: Boolean,
    default: false,
  },
  allRowKeys: {
    type: Array,
    required: true,
  },
  // expand row option
  expandOption: {
    type: Object,
    default: function () {
      return null
    },
  },
  // checkbox option
  checkboxOption: {
    type: Object,
    default: function () {
      return null
    },
  },
  // radio option
  radioOption: {
    type: Object,
    default: function () {
      return null
    },
  },
  // virual scroll
  virtualScrollOption: {
    type: Object,
    default: null,
  },
  // is virtual scroll
  isVirtualScroll: {
    type: Boolean,
    default: false,
  },
  // is scrolling
  showVirtualScrollingPlaceholder: {
    type: Boolean,
    default: false,
  },
  rowKeyFieldName: {
    type: String,
    default: null,
  },
  // cell style option
  cellStyleOption: {
    type: Object,
    default: function () {
      return null
    },
  },
  // cell span option
  cellSpanOption: {
    type: Object,
    default: function () {
      return null
    },
  },
  // highlight row key
  highlightRowKey: {
    type: [String, Number],
    default: null,
  },
  // event custom option
  eventCustomOption: {
    type: Object,
    default: function () {
      return null
    },
  },
  // cell selection option
  cellSelectionOption: {
    type: Object,
    default: function () {
      return null
    },
  },
  // cell selection data
  cellSelectionData: {
    type: Object,
    default: function () {
      return null
    },
  },
  // cell selection range data
  cellSelectionRangeData: {
    type: Object,
    default: function () {
      return null
    },
  },
  bodyIndicatorRowKeys: {
    type: Object,
    default: function () {
      return null
    },
  },
  // edit option
  editOption: {
    type: Object,
    default: function () {
      return null
    },
  },
})
const emit = defineEmits(['highlightRowChange', 'bodyCellWidthChange'])

const eventCenter = inject('eventCenter')

// columns widths map
const colsWidths = ref(new Map())
/**
  internal expand row keys
  1、当没有设置 expandedRowKeys 时生效
*/
const internalExpandRowkeys = ref([])
/**
  1、存储当前多选功能的rowkey 信息
*/
const internalCheckboxSelectedRowKeys = ref([])
/**
    1、存储当前单选功能的rowkey 信息
*/
const internalRadioSelectedRowKey = ref(null)
// virtual scroll preview rendered rowKey
const virtualScrollPreviewRenderedRowKeys = ref([])
// virtual scroll repeat rendered rowKey
const virtualScrollRepeatRenderedRowKeys = ref([])

/**
  column collenction info
  1、style of each column
  2、class of each column
*/
const columnCollection = computed(() => {
  const columnCollection = []

  const colgroups = props.colgroups

  colgroups.forEach((col) => {
    const colKey = col.key

    const columnCollectionItem = {
      colKey,
      class: {
        [clsName('last-left-fixed-column')]: isLastLeftFixedColumn(col),
        [clsName('first-right-fixed-column')]: isfirstRightFixedColumn(col),
      },
      style: {},
    }

    const { fixed, align } = col

    columnCollectionItem.style['text-align'] = align || 'center'

    if (fixed) {
      let totalWidth = 0
      // column index
      const columnIndex = colgroups.findIndex(
        (x) => x.key === colKey,
      )
      if (
        (fixed === 'left' && columnIndex > 0) ||
        (fixed === 'right' &&
          columnIndex < colgroups.length - 1)
      ) {
        totalWidth = getFixedTotalWidthByColumnKey({
          colgroups,
          colKey,
          fixed,
        })

        totalWidth = getValByUnit(totalWidth)
      }

      columnCollectionItem.style.left =
        fixed === 'left' ? totalWidth : ''
      columnCollectionItem.style.right =
        fixed === 'right' ? totalWidth : ''
    }

    columnCollection.push(columnCollectionItem)
  })
  return columnCollection
})
// expand column
const expandColumn = computed(() => {
  return props.colgroups.find((x) => x.type === COLUMN_TYPES.EXPAND)
})
/**
  是否是可控行展开
  1、当设置了 expandedRowKeys 属性时则为可控行展开
*/
const isControlledExpand = computed(() => {
  return (
    props.expandOption && Array.isArray(props.expandOption.expandedRowKeys)
  )
})

// expanded row keys
const expandedRowkeys = computed(() => {
  return isControlledExpand.value
    ? props.expandOption.expandedRowKeys
    : internalExpandRowkeys.value
})

// disable row selected row keys
const disableCheckboxSelectedRowKeys = computed(() => {
  const result = []

  const checkboxOption = props.checkboxOption

  if (!checkboxOption) {
    return result
  }
  const { disableSelectedRowKeys } = checkboxOption

  if (
    internalCheckboxSelectedRowKeys.value.length > 0 &&
    Array.isArray(disableSelectedRowKeys) &&
    disableSelectedRowKeys.length > 0
  ) {
    disableSelectedRowKeys.forEach((rowkey) => {
      if (internalCheckboxSelectedRowKeys.value.includes(rowkey)) {
        result.push(rowkey)
      }
    })
  }

  return result
})

// disable row unselected row keys
const disableCheckboxUnselectedRowKeys = computed(() => {
  const result = []

  const checkboxOption = props.checkboxOption

  if (!checkboxOption) {
    return result
  }
  const { disableSelectedRowKeys } = checkboxOption

  if (
    Array.isArray(disableSelectedRowKeys) &&
    disableSelectedRowKeys.length > 0
  ) {
    disableSelectedRowKeys.forEach((rowkey) => {
      if (!internalCheckboxSelectedRowKeys.value.includes(rowkey)) {
        result.push(rowkey)
      }
    })
  }

  return result
})

/**
  is row keys selected all
  为 true 的条件：选中数量 + 禁用选中数量 === 总量
*/
const isCheckboxSelectedAll = computed(() => {
  if (props.allRowKeys.length > 0) {
    if (
      internalCheckboxSelectedRowKeys.value.length +
      disableCheckboxUnselectedRowKeys.value.length ===
      props.allRowKeys.length
    ) {
      return true
    }
  }

  return false
})
// is checkbox indeterminate
const isCheckboxIndeterminate = computed(() => {
  const rowKeysLength = internalCheckboxSelectedRowKeys.value.length
  return (
    rowKeysLength > 0 && rowKeysLength < props.allRowKeys.length
  )
})
// 是否是受控属性（取决于selectedRowKey）
const isControlledRadio = computed(() => {
  const radioOption = props.radioOption
  return (
    radioOption && Object.keys(radioOption).includes('selectedRowKey')
  )
})
const trProps = ref({
  colgroups: props.colgroups,
  expandOption: props.expandOption,
  expandedRowkeys: expandedRowkeys.value,
  checkboxOption: props.checkboxOption,
  radioOption: props.radioOption,
  rowKeyFieldName: props.rowKeyFieldName,
  allRowKeys: props.allRowKeys,
  expandRowChange,
  internalCheckboxSelectedRowKeys: internalCheckboxSelectedRowKeys.value,
  internalRadioSelectedRowKey,
  isVirtualScroll: props.isVirtualScroll,

  cellStyleOption: props.cellStyleOption,
  cellSpanOption: props.cellSpanOption,
  highlightRowKey: props.highlightRowKey,
  eventCustomOption: props.eventCustomOption,
  cellSelectionData: props.cellSelectionData,
  editOption: props.editOption,
  columnCollection: columnCollection.value,
  cellSelectionRangeData: props.cellSelectionRangeData,
  bodyIndicatorRowKeys: props.bodyIndicatorRowKeys,
})
// watch expand Option
watch(() => props.expandOption, function () {
  initInternalExpandRowKeys()
}, {
  immediate: true
},
)
// 初始化无法读取到
// watch expandOption expandedRowKeys
// watch(() => props.expandOption.expandedRowKeys, function () {
//   initInternalExpandRowKeys()
// })
// watch checkbox option
watch(() => props.checkboxOption, function () {
  initInternalCheckboxSelectedRowKeys()
}, {
  immediate: true,
})
// 初始化无法读取到
// watch selectedRowKeys
// watch(() => props.checkboxOption.selectedRowKeys, function () {
//   resetInternalCheckboxSelectedRowKeys()
// })
// watch internalCheckboxSelectedRowKeys
watch(internalCheckboxSelectedRowKeys,
  function () {
    // send to checkbox all(in header)
    sendToCheckboxAll()
  },
)
// watch checkbox option
watch(() => props.radioOption, function () {
  initInternalRadioSelectedRowKey()
}, {
  immediate: true,
})
// 初始化无法读取到
// watch(() => props.radioOption.selectedRowKey,
//   function () {
//     initInternalRadioSelectedRowKey()
//   },
// )
// watch selectedRowKeys

onMounted(() => {
  // receive checkbox row selected change from FAN_TABLE_BODY_CHECKBOX_CONTENT
  eventCenter.on(GLOBAL_EVENT.CHECKBOX_SELECTED_ROW_CHANGE, (params) => {
    checkboxSelectedRowChange(params)
  })

  // receive checkbox row selected change from FAN_TABLE_BODY_CHECKBOX_CONTENT
  eventCenter.on(GLOBAL_EVENT.CHECKBOX_SELECTED_ALL_CHANGE_BODY, (params) => {
    checkboxSelectedAllChange(params)
  })

  // receive radio row selected change from FAN_TABLE_BODY_RADIO_CONTENT
  eventCenter.on(GLOBAL_EVENT.RADIO_SELECTED_ROW_CHANGE, (params) => {
    radioSelectedRowChange(params)
  })

  // recieve tr click
  eventCenter.on(GLOBAL_EVENT.BODY_ROW_CLICK, (params) => {
    rowClick(params)
  })

  if (props.checkboxOption) {
    // 这里 nextTick 解决由于子组件先初始化，导致父组件无法接收消息的问题
    nextTick(() => {
      sendToCheckboxAll()
    })
  }
})

// is last left fixed column
function isLastLeftFixedColumn(column) {
  let result = false

  const colgroups = props.colgroups

  const { fixed } = column

  if (fixed === 'left') {
    const { field } = column
    const leftFixedColumns = colgroups.filter(
      (x) => x.fixed === 'left',
    )
    const index = leftFixedColumns.findIndex(
      (x) => x.field === field,
    )

    if (index === leftFixedColumns.length - 1) {
      result = true
    }
  }
  return result
}

// is first right fixed column
function isfirstRightFixedColumn(column) {
  let result = false

  const colgroups = props.colgroups

  const { fixed } = column

  if (fixed === 'right') {
    const { field } = column
    const rightFixedColumns = colgroups.filter(
      (x) => x.fixed === 'right',
    )

    if (rightFixedColumns[0].field === field) {
      result = true
    }
  }
  return result
}

/**
  * @expandRowChange
  * @desc  row expand change
  * @param {object} rowData - row data
  * @param {number} rowIndex - row index
*/
function expandRowChange(rowData, rowIndex) {
  const rowKeyFieldName = props.rowKeyFieldName
  const expandOption = props.expandOption
  // deal before expand row method
  if (typeof expandOption.beforeExpandRowChange === 'function') {
    const beforeExpandRowResult =
      expandOption.beforeExpandRowChange({
        beforeExpandedRowKeys: expandedRowkeys.value,
        row: rowData,
        rowIndex,
      })
    // interrupt execute
    if (beforeExpandRowResult === false) {
      return false
    }
  }

  const rowKey = rowData[rowKeyFieldName]

  const rowKeyIndex = internalExpandRowkeys.value.indexOf(rowKey)
  if (rowKeyIndex > -1) {
    internalExpandRowkeys.value.splice(rowKeyIndex, 1)
  } else {
    internalExpandRowkeys.value.push(rowKey)
  }

  // deal after expand row method
  if (typeof expandOption.afterExpandRowChange === 'function') {
    expandOption.afterExpandRowChange({
      afterExpandedRowKeys: internalExpandRowkeys.value,
      row: rowData,
      rowIndex,
    })
  }
}

/**
     * @rowClick
     * @desc  row expand click event
     * @param {object} rowData - row data
     * @param {number} rowIndex - row index
     */
function rowClick({ rowData, rowIndex }) {
  const rowKeyFieldName = props.rowKeyFieldName

  // 行高亮功能
  if (rowKeyFieldName) {
    const rowKey = rowData[rowKeyFieldName]
    // emit(EMIT_EVENTS.HIGHLIGHT_ROW_CHANGE, { rowKey })
    emit('highlightRowChange', { rowKey })
  }

  // 行展开功能
  if (!isExpandRow({ rowData, rowIndex })) {
    return false
  }

  const trigger = props.expandOption.trigger

  // expand row by click row
  if (trigger === EXPAND_TRIGGER_TYPES.ROW) {
    expandRowChange(rowData, rowIndex)
  }
}

/**
  * @isExpandRow
  * @desc  is expand row
  * @param {object} rowData - row data
  * @param {number} rowIndex - row index
*/
function isExpandRow({ rowData, rowIndex }) {
  let result = false

  const expandOption = props.expandOption

  if (expandColumn.value && expandOption) {
    // 是否允许展开
    let expandable = true
    if (typeof expandOption.expandable === 'function') {
      expandable = expandOption.expandable({
        row: rowData,
        column: expandColumn.value,
        rowIndex,
      })
    }

    if (expandable !== false) {
      result = true
    }
  }

  return result
}

/**
  * @tdSizeChange
  * @desc  td size change
  * @param {any} key - column key
  * @param {number|string} width - column real width
*/
function tdSizeChange({ key, width }) {
  colsWidths.value.set(key, width)
  // emit(EMIT_EVENTS.BODY_CELL_WIDTH_CHANGE, colsWidths)
  emit('bodyCellWidthChange', colsWidths.value)
}

// init internal expand row keys
function initInternalExpandRowKeys() {
  const expandOption = props.expandOption

  if (!expandOption) {
    return false
  }

  if (isControlledExpand.value) {
    internalExpandRowkeys.value = expandOption.expandedRowKeys.slice(0)
  } else if (expandOption.defaultExpandAllRows) {
    internalExpandRowkeys.value = props.allRowKeys
  } else if (expandOption.defaultExpandedRowKeys) {
    internalExpandRowkeys.value = expandOption.defaultExpandedRowKeys.slice(0)
  }
}
// get expand row
function getExpandRowComp({ rowData, rowIndex }) {
  if (isExpandRow({ rowData, rowIndex })) {
    const expandTrProps = {
      tableViewportWidth: props.tableViewportWidth,
      colgroups: props.colgroups,
      expandOption: props.expandOption,
      expandedRowkeys: expandedRowkeys.value,
      expandColumn: expandColumn.value,
      rowKeyFieldName: props.rowKeyFieldName,
      rowData,
      rowIndex,
    }

    return <ExpandTr {...expandTrProps} />
  }

  return null
}

// send to checkbox all
function sendToCheckboxAll() {
  eventCenter.emit(GLOBAL_EVENT.CHECKBOX_SELECTED_ALL_INFO, {
    isIndeterminate: isCheckboxIndeterminate,
    isSelected: isCheckboxSelectedAll,
  },
  )
}

// init internal Radio SelectedRowKey
function initInternalRadioSelectedRowKey() {
  const radioOption = props.radioOption

  if (!radioOption) {
    return false
  }

  const { selectedRowKey, defaultSelectedRowKey } = radioOption

  internalRadioSelectedRowKey.value = isControlledRadio.value
    ? selectedRowKey
    : defaultSelectedRowKey
}

// init internal Checkbox SelectedRowKeys
function initInternalCheckboxSelectedRowKeys() {
  let result = []
  const checkboxOption = props.checkboxOption

  if (!checkboxOption) {
    return false
  }

  const {
    selectedRowKeys,
    defaultSelectedAllRows,
    defaultSelectedRowKeys,
  } = checkboxOption

  if (Array.isArray(selectedRowKeys)) {
    result = selectedRowKeys
  } else if (defaultSelectedAllRows) {
    result = props.allRowKeys
  } else if (Array.isArray(defaultSelectedRowKeys)) {
    result = defaultSelectedRowKeys
  }
  internalCheckboxSelectedRowKeys.value = result
}
// reset internalCheckboxSelectedRowKeys by selectedRowKeys
function resetInternalCheckboxSelectedRowKeys() {
  internalCheckboxSelectedRowKeys.value =
    props.checkboxOption.selectedRowKeys.slice(0)
}

/**
     * @checkboxSelectedRowChange
     * @desc  selected row change
     * @param {number|string} rowKey - rowKey
     * @param {bool} isSelected
     */
function checkboxSelectedRowChange({ rowKey, isSelected }) {
  const checkboxOption = props.checkboxOption
  const rowKeyFieldName = props.rowKeyFieldName

  let selectedRowChange = null
  let selectedRowKeys = null
  if (!checkboxOption) return
  if (checkboxOption.selectedRowChange) {
    selectedRowChange = checkboxOption.selectedRowChange
  }
  if (checkboxOption.selectedRowKeys) {
    selectedRowKeys = checkboxOption.selectedRowKeys
  }

  const internalCheckboxSelectedRowKeysTemp =
    internalCheckboxSelectedRowKeys.value.slice(0)

  // will selected
  const rowKeyIndex = internalCheckboxSelectedRowKeysTemp.indexOf(rowKey)
  if (isSelected) {
    // bug fixed:通过行点击触发，导致key重复的问题
    if (rowKeyIndex === -1) {
      internalCheckboxSelectedRowKeysTemp.push(rowKey)
    }
  } else {
    if (rowKeyIndex > -1) {
      internalCheckboxSelectedRowKeysTemp.splice(rowKeyIndex, 1)
    }
  }

  // 非可控才改变 internalCheckboxSelectedRowKeys
  if (!Array.isArray(selectedRowKeys)) {
    internalCheckboxSelectedRowKeys.value = internalCheckboxSelectedRowKeysTemp
  }

  selectedRowChange({
    row: props.actualRenderTableData.find(
      (x) => x[rowKeyFieldName] === rowKey,
    ),
    isSelected,
    selectedRowKeys: internalCheckboxSelectedRowKeysTemp,
  })
}

/**
     * @checkboxSelectedAllChange
     * @desc  selected all change
     * @param {bool} isSelected - is selected
     */
function checkboxSelectedAllChange({ isSelected }) {
  const checkboxOption = props.checkboxOption

  if (!checkboxOption) return
  const { selectedAllChange, selectedRowKeys } = checkboxOption

  let internalCheckboxSelectedRowKeysTemp =
    internalCheckboxSelectedRowKeys.value.slice(0)
  // selected all
  if (isSelected) {
    // except disable Row Unselected keys
    const allSelectedKeys = props.allRowKeys.slice(0)
    if (disableCheckboxUnselectedRowKeys.value.length > 0) {
      disableCheckboxUnselectedRowKeys.value.forEach((rowkey) => {
        const index = allSelectedKeys.indexOf(rowkey)
        if (index > -1) {
          allSelectedKeys.splice(index, 1)
        }
      })
    }

    internalCheckboxSelectedRowKeysTemp = allSelectedKeys
  } else {
    // except disable Row Selected keys
    internalCheckboxSelectedRowKeysTemp = disableCheckboxSelectedRowKeys
  }

  // 非可控才改变 internalCheckboxSelectedRowKeys
  if (!Array.isArray(selectedRowKeys)) {
    internalCheckboxSelectedRowKeys.value =
      internalCheckboxSelectedRowKeysTemp
  }

  selectedAllChange && selectedAllChange({
    isSelected,
    selectedRowKeys: internalCheckboxSelectedRowKeysTemp,
    // changeRowKeys:
  })
}

/**
     * @radioSelectedRowChange
     * @desc  selected all change
     * @param {number|string} rowKey - rowKey
     */
function radioSelectedRowChange({ rowKey }) {
  const radioOption = props.radioOption
  const rowKeyFieldName = props.rowKeyFieldName
  let selectedRowChange = null
  if (!radioOption) {
    return
  }
  if (radioOption.selectedRowChange) {
    selectedRowChange = radioOption.selectedRowChange
  }

  // 非受控
  if (!isControlledRadio.value) {
    internalRadioSelectedRowKey.value = rowKey
  }

  selectedRowChange({
    row: props.actualRenderTableData.find(
      (x) => x[rowKeyFieldName] === rowKey,
    ),
  })
}
// get tr key
function getTrKey({ rowData, rowIndex }) {
  let result = rowIndex

  const rowKeyFieldName = props.rowKeyFieldName
  if (rowKeyFieldName) {
    result = rowData[rowKeyFieldName]
  }
  return result
}

/**
    rendering row keys
    virtual scrolling will invoke
    */
function renderingRowKeys(rowKeys) {
  virtualScrollRepeatRenderedRowKeys.value = rowKeys.filter(
    (rowKey) => {
      return virtualScrollPreviewRenderedRowKeys.value.indexOf(rowKey) !== -1
    },
  )

  virtualScrollPreviewRenderedRowKeys.value = rowKeys
}
defineExpose({
  renderingRowKeys
})
</script>

<style lang="scss" scoped></style>
<script lang="jsx">
export default {
  name: COMPS_NAME.FAN_TABLE_BODY,
}
</script>