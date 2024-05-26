import {
  getDomResizeObserverCompKey,
  getFixedTotalWidthByColumnKey,
  clsName,
} from '../util/index.js'
import { getValByUnit } from '../../../src/utils/index.js'
import {
  COMPS_NAME,
  COLUMN_TYPES,
  EXPAND_TRIGGER_TYPES,
} from '../util/constant'
import VueDomResizeObserver from '@P/src/components/resize-observer/index.js'
import BodyTr from './body-tr'
import ExpandTr from './expand-tr'
import BodyTrScrolling from './body-tr-scrolling'
import { GLOBAL_EVENT } from '@P/events/global-events.js'
import { computed, defineComponent, inject, nextTick, onMounted, reactive, ref, shallowRef, watch } from 'vue'
import { EventType } from 'mitt'
import { bodyProps } from './bodyProps'

export default defineComponent({
  name: COMPS_NAME.FAN_TABLE_BODY,
  props: bodyProps(),
  emits: ['highlightRowChange', 'bodyCellWidthChange'],
  setup(props, { emit, expose }) {
    const eventCenter = inject<Record<EventType, any>>('eventCenter')!
    /* data start */
    // columns widths map
    const colsWidths = shallowRef(new Map())
    // internal expand row keys
    // 1、当没有设置 expandedRowKeys 时生效
    const internalExpandRowkeys = ref<any[]>([])
    // 1、存储当前多选功能的 rowKey 信息
    const internalCheckboxSelectedRowKeys = ref<any[]>([])
    // 1、存储当前单选功能的rowkey 信息
    const internalRadioSelectedRowKey = ref<any>(null)

    const virtualScrollPreviewRenderedRowKeys = ref<any[]>([])
    const virtualScrollRepeatRenderedRowKeys = ref<any[]>([])
    /* data end */
    /* computed start */
    // column collenction info
    // 1、style of each column
    // 2、class of each column
    const columnCollection = computed(() => {
      const result:any[] = []

      props.colgroups.forEach((col:any) => {
        const colKey = col.key

        const columnCollectionItem:any = {
          colKey,
          class: {
            [clsName('last-left-fixed-column')]: isLastLeftFixedColumn(col),
            [clsName('first-right-fixed-column')]: isFirstRightFixedColumn(col),
          },
          style: {},
        }

        const { fixed, align } = col

        columnCollectionItem.style['text-align'] = align || 'center'

        if (fixed) {
          let totalWidth:number|string = 0
          // column index
          const columnIndex = props.colgroups.findIndex(
            (x:any) => x.key === colKey,
          )
          const fixLeftAndColumnExist = fixed === 'left' && columnIndex > 0
          const fixRightAndColumnExist = fixed === 'right' && (columnIndex < props.colgroups.length - 1)
          if (fixLeftAndColumnExist || fixRightAndColumnExist) {
            totalWidth = getFixedTotalWidthByColumnKey({
              colgroups: props.colgroups,
              colKey,
              fixed,
            })

            totalWidth = getValByUnit(totalWidth)
          }

          columnCollectionItem.style.left = fixed === 'left' ? totalWidth : ''
          columnCollectionItem.style.right = fixed === 'right' ? totalWidth : ''
        }

        result.push(columnCollectionItem)
      })
      return result
    })
    // expand column
    const expandColumn = computed<any>(() => {
      return props.colgroups.find((x:any) => x.type === COLUMN_TYPES.EXPAND)
    },)
    // 是否是可控行展开
    // 1、当设置了 expandedRowKeys 属性时则为可控行展开
    const isControlledExpand = computed(() => {
      return (
        props.expandOption && Array.isArray(props.expandOption.expandedRowKeys)
      )
    },)

    // expanded row keys
    const expandedRowkeys = computed(() => {
      return isControlledExpand.value ? props.expandOption.expandedRowKeys : internalExpandRowkeys.value
    },)

    // disable row selected row keys
    const disableCheckboxSelectedRowKeys = computed(() => {
      const result:any[] = []

      if (!props.checkboxOption) {
        return result
      }
      const { disableSelectedRowKeys } = props.checkboxOption

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
    },)

    // disable row unselected row keys
    const disableCheckboxUnselectedRowKeys = computed(() => {
      const result:any[] = []
      if (!props.checkboxOption) return result

      const { disableSelectedRowKeys } = props.checkboxOption
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
    // 选中数量 + 禁用选中数量 === 总量，此时为 true
    const isCheckboxSelectedAll = computed(() => {
      if (props.allRowKeys.length > 0) {
        const selectLength = internalCheckboxSelectedRowKeys.value.length
        const disableLength = disableCheckboxUnselectedRowKeys.value.length
        if (selectLength + disableLength === props.allRowKeys.length) {
          return true
        }
      }
      return false
    })
    // is checkbox indeterminate
    const isCheckboxIndeterminate = computed(() => {
      return (
        internalCheckboxSelectedRowKeys.value.length > 0 &&
                      internalCheckboxSelectedRowKeys.value.length < props.allRowKeys.length
      )
    },)
    // 是否是受控属性（取决于selectedRowKey）
    const isControlledRadio = computed(() => {
      return (
        props.radioOption && Object.keys(props.radioOption).includes('selectedRowKey')
      )
    })
    /* computed end */

    /* method start */
    // is last left fixed column
    function isLastLeftFixedColumn(column:any) {
      let result = false

      const { fixed } = column

      if (fixed === 'left') {
        const { field } = column
        const leftFixedColumns = props.colgroups.filter(
          (x:any) => x.fixed === 'left'
        )
        const index = leftFixedColumns.findIndex(
          (x:any) => x.field === field
        )

        if (index === leftFixedColumns.length - 1) {
          result = true
        }
      }
      return result
    }

    // is first right fixed column
    function isFirstRightFixedColumn(column:any) {
      let result = false
      const { fixed } = column

      if (fixed === 'right') {
        const { field } = column
        const rightFixedColumns:any[] = props.colgroups.filter(
          (x:any) => x.fixed === 'right',
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
    function expandRowChange(rowData:any, rowIndex:any) {
      // deal before expand row method
      if (typeof props.expandOption.beforeExpandRowChange === 'function') {
        const beforeExpandRowResult = props.expandOption.beforeExpandRowChange({
          beforeExpandedRowKeys: expandedRowkeys.value,
          row: rowData,
          rowIndex,
        })
        // interrupt execute
        if (beforeExpandRowResult === false) {
          return false
        }
      }

      const rowKey = rowData[props.rowKeyFieldName]

      const rowKeyIndex = internalExpandRowkeys.value.indexOf(rowKey)
      if (rowKeyIndex > -1) {
        internalExpandRowkeys.value.splice(rowKeyIndex, 1)
      } else {
        internalExpandRowkeys.value.push(rowKey)
      }

      // deal after expand row method
      if (typeof props.expandOption.afterExpandRowChange === 'function') {
        props.expandOption.afterExpandRowChange({
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
    function rowClick({ rowData, rowIndex }:any) {
      // 行高亮功能
      if (props.rowKeyFieldName) {
        const rowKey = rowData[props.rowKeyFieldName]
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
    function isExpandRow({ rowData, rowIndex }:any) {
      let result = false
      if (expandColumn.value && props.expandOption) {
        // 是否允许展开
        let expandable = true
        if (typeof props.expandOption.expandable === 'function') {
          expandable = props.expandOption.expandable({
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
    function tdSizeChange({ key, width }:any) {
      colsWidths.value.set(key, width)
      emit('bodyCellWidthChange', colsWidths.value)
    }

    // init internal expand row keys
    function initInternalExpandRowKeys() {
      if (!props.expandOption) {
        return false
      }

      if (isControlledExpand.value) {
        internalExpandRowkeys.value = props.expandOption.expandedRowKeys.slice(0)
      } else if (props.expandOption.defaultExpandAllRows) {
        internalExpandRowkeys.value = props.allRowKeys
      } else if (props.expandOption.defaultExpandedRowKeys) {
        internalExpandRowkeys.value = props.expandOption.defaultExpandedRowKeys.slice(0)
      }
    }
    // get expand row
    function getExpandRowComp({ rowData, rowIndex }:any) {
      if (isExpandRow({ rowData, rowIndex })) {
        const expandTrProps = reactive({
          tableViewportWidth: props.tableViewportWidth,
          colgroups: props.colgroups,
          expandOption: props.expandOption,
          expandedRowkeys,
          expandColumn,
          rowKeyFieldName: props.rowKeyFieldName,
          rowData,
          rowIndex,
        })

        return <ExpandTr {...expandTrProps} />
      }

      return null
    }

    // send to checkbox all
    function sendToCheckboxAll() {
      eventCenter.emit(GLOBAL_EVENT.CHECKBOX_SELECTED_ALL_INFO,
        {
          isIndeterminate: isCheckboxIndeterminate.value,
          isSelected: isCheckboxSelectedAll.value,
        },
      )
    }

    // init internal Radio SelectedRowKey
    function initInternalRadioSelectedRowKey() {
      if (!props.radioOption) {
        return false
      }

      const { selectedRowKey, defaultSelectedRowKey } = props.radioOption

      internalRadioSelectedRowKey.value = isControlledRadio.value
        ? selectedRowKey
        : defaultSelectedRowKey
    }

    // init internal Checkbox SelectedRowKeys
    function initInternalCheckboxSelectedRowKeys() {
      let result = []
      if (!props.checkboxOption) return false

      const {
        selectedRowKeys,
        defaultSelectedAllRows,
        defaultSelectedRowKeys,
      } = props.checkboxOption

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
      internalCheckboxSelectedRowKeys.value = props.checkboxOption.selectedRowKeys.slice(0)
    }
    onMounted(() => {
      // receive checkbox row selected change from FAN_TABLE_BODY_CHECKBOX_CONTENT
      eventCenter.on(GLOBAL_EVENT.CHECKBOX_SELECTED_ROW_CHANGE, (params:any) => {
        checkboxSelectedRowChange(params)
      })
      // receive checkbox row selected change from FAN_TABLE_BODY_CHECKBOX_CONTENT
      eventCenter.on(GLOBAL_EVENT.CHECKBOX_SELECTED_ALL_CHANGE_BODY, (params:any) => {
        checkboxSelectedAllChange(params)
      })
      // receive radio row selected change from FAN_TABLE_BODY_RADIO_CONTENT
      eventCenter.on(GLOBAL_EVENT.RADIO_SELECTED_ROW_CHANGE, (params:any) => {
        radioSelectedRowChange(params)
      })
      // recieve tr click
      eventCenter.on(GLOBAL_EVENT.BODY_ROW_CLICK, (params:any) => {
        rowClick(params)
      })
      if (props.checkboxOption) {
        // 这里 nextTick 解决由于子组件先初始化，导致父组件无法接收消息的问题
        nextTick(() => {
          sendToCheckboxAll()
        })
      }
    })
    /**
       * @checkboxSelectedRowChange
       * @desc  selected row change
       * @param {number|string} rowKey - rowKey
       * @param {bool} isSelected
       */
    function checkboxSelectedRowChange({ rowKey, isSelected }:any) {
      let selectedRowChange = null
      let selectedRowKeys = null
      if (!props.checkboxOption) return
      if (props.checkboxOption.selectedRowChange) {
        selectedRowChange = props.checkboxOption.selectedRowChange
      }
      if (props.checkboxOption.selectedRowKeys) {
        selectedRowKeys = props.checkboxOption.selectedRowKeys
      }

      const internalCheckboxSelectedRowKeysTemp = internalCheckboxSelectedRowKeys.value.slice(0)

      // will selected
      const rowKeyIndex =
                  internalCheckboxSelectedRowKeysTemp.indexOf(rowKey)
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
        row: props.actualRenderTableData.find((x:any) => x[props.rowKeyFieldName] === rowKey),
        isSelected,
        selectedRowKeys: internalCheckboxSelectedRowKeysTemp,
      })
    }

    /**
     * @desc  selected all change
     * @param {bool} isSelected - is selected
     */
    function checkboxSelectedAllChange({ isSelected }:Record<'isSelected', boolean>) {
      if (!props.checkboxOption) return
      const { selectedAllChange, selectedRowKeys } = props.checkboxOption

      let internalCheckboxSelectedRowKeysTemp = internalCheckboxSelectedRowKeys.value.slice(0)
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
        internalCheckboxSelectedRowKeysTemp = disableCheckboxSelectedRowKeys.value
      }

      // 非可控才改变 internalCheckboxSelectedRowKeys
      if (!Array.isArray(selectedRowKeys)) {
        internalCheckboxSelectedRowKeys.value = internalCheckboxSelectedRowKeysTemp
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
    function radioSelectedRowChange({ rowKey }:Record<'rowKey', any>) {
      let selectedRowChange = null
      if (!props.radioOption) {
        return
      }
      if (props.radioOption.selectedRowChange) {
        selectedRowChange = props.radioOption.selectedRowChange
      }

      // 非受控
      if (!isControlledRadio.value) {
        internalRadioSelectedRowKey.value = rowKey
      }

      selectedRowChange({
        row: props.actualRenderTableData.find(
          (x:any) => x[props.rowKeyFieldName] === rowKey,
        ),
      })
    }
    // get tr key
    function getTrKey({ rowData, rowIndex }:any) {
      let result = rowIndex

      if (props.rowKeyFieldName) {
        result = rowData[props.rowKeyFieldName]
      }
      return result
    }

    // rendering row keys
    // virtual scrolling will invoke
    function renderingRowKeys(rowKeys:any) {
      const previewRenderedRowKeys = virtualScrollPreviewRenderedRowKeys.value
      virtualScrollRepeatRenderedRowKeys.value = rowKeys.filter((rowKey:any) => {
        return previewRenderedRowKeys.indexOf(rowKey) !== -1
      })
      virtualScrollPreviewRenderedRowKeys.value = rowKeys
    }
    /* method end */

    watch(() => props.expandOption, () => {
      initInternalExpandRowKeys()
    }, {
      immediate: true,
    })
    // watch expandOption expandedRowKeys
    // console.log(props.expandOption)

    watch(() => 'props.expandOption.expandedRowKeys', () => {
      initInternalExpandRowKeys()
    })
    // watch checkbox option
    watch(() => props.checkboxOption, () => {
      initInternalCheckboxSelectedRowKeys()
    }, {
      immediate: true,
    })
    // watch selectedRowKeys
    watch(() => 'props.checkboxOption.selectedRowKeys', () => {
      resetInternalCheckboxSelectedRowKeys()
    })
    // watch internalCheckboxSelectedRowKeys
    watch(internalCheckboxSelectedRowKeys, () => {
      // send to checkbox all(in header)
      sendToCheckboxAll()
    })
    // watch checkbox option
    watch(() => props.radioOption, () => {
      initInternalRadioSelectedRowKey()
    }, {
      immediate: true,
    },)
    // watch selectedRowKeys
    watch(() => 'props.radioOption.selectedRowKey', () => {
      initInternalRadioSelectedRowKey()
    })

    expose({
      renderingRowKeys
    })

    return () => (
      <tbody>
        {/* Measure each column width with additional hidden col */}
        <tr style="height:0;">
          {
            props.colgroups.map((column:any) => {
              const measureTdProps = {
                key: getDomResizeObserverCompKey(column.key, props.columnsOptionResetTime),
                tagName: 'td',
                id: column.key,
                onDomResizeChange: tdSizeChange,
                style: {
                  padding: 0,
                  border: 0,
                  height: 0,
                },
              }
              return <VueDomResizeObserver {...measureTdProps} />
            })
          }
        </tr>
        {
          props.actualRenderTableData.map((rowData:any, rowIndex) => {
            const trProps = reactive({
              key: getTrKey({ rowData, rowIndex }),
              rowIndex,
              rowData,
              colgroups: props.colgroups,
              expandOption: props.expandOption,
              expandedRowkeys,
              checkboxOption: props.checkboxOption,
              radioOption: props.radioOption,
              rowKeyFieldName: props.rowKeyFieldName,
              allRowKeys: props.allRowKeys,
              internalCheckboxSelectedRowKeys,
              internalRadioSelectedRowKey,
              isVirtualScroll: props.isVirtualScroll,
              isExpandRow: isExpandRow({ rowData, rowIndex }),
              cellStyleOption: props.cellStyleOption,
              cellSpanOption: props.cellSpanOption,
              highlightRowKey: props.highlightRowKey,
              eventCustomOption: props.eventCustomOption,
              cellSelectionData: props.cellSelectionData,
              editOption: props.editOption,
              columnCollection,
              cellSelectionRangeData: props.cellSelectionRangeData,
              bodyIndicatorRowKeys: props.bodyIndicatorRowKeys,
              expandRowChange,
            })

            if (props.showVirtualScrollingPlaceholder) {
              const trPropsScrolling = reactive({
                key: getTrKey({ rowData, rowIndex }),
                colgroups: props.colgroups,
              })
              const fieldName = rowData[props.rowKeyFieldName]
              const exist = virtualScrollRepeatRenderedRowKeys.value.indexOf(fieldName) !== -1
              if (exist) {
                return [<BodyTr {...trProps} />]
              } else {
                return <BodyTrScrolling {...trPropsScrolling} />
              }
            } else {
              return [
                <BodyTr {...trProps} />,
                // expand row
                getExpandRowComp({ rowData, rowIndex }),
              ]
            }
          })}
      </tbody>
    )
  },
})
// 948