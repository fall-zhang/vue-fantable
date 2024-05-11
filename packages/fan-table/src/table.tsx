import {
  cloneDeep, debounce, getValByUnit,
  isFunction,
  isNumber,
  scrollTo,
  isEmptyValue,
  isEmptyArray,
  isBoolean,
  isDefined,
} from '@P/src/utils/index.js'
import {
  initGroupColumns,
  clsName,
  getNotFixedTotalWidthByColumnKey,
  recursiveRemoveColumnByKey,
  setHeaderContextmenuOptions,
  setBodyContextmenuOptions,
  createEmptyRowData,
  isContextmenuPanelClicked,
  getRowKey,
  getColKeysByHeaderColumn,
  getColumnByColkey,
  getLeftmostColKey,
  isCellInSelectionRange,
  isClearSelectionByBodyCellRightClick,
  cellAutofill,
  isOperationColumn,
  getSelectionRangeData,
  getSelectionRangeKeys,
  getSelectionRangeIndexes,
  setColumnFixed,
  cancelColumnFixed
} from './util/index'
import {
  onBeforeCopy,
  onAfterCopy,
  onBeforePaste,
  onAfterPaste,
  onBeforeCut,
  onAfterCut,
  onBeforeDelete,
  onAfterDelete
} from './util/clipboard'

import { createLocale } from '@P/src/locale/index'

import { KEY_CODES, MOUSE_EVENT_CLICK_TYPE } from '@P/src/utils/constant'
import { getScrollbarWidth } from '@P/src/utils/scroll-bar'
import {
  requestAnimationTimeout,
  cancelAnimationTimeout
} from '@P/src/utils/request-animation-timeout'
import { isInputKeyCode } from '@P/src/utils/event-key-codes'
import Hooks from '@P/src/utils/hooks-manager'
import { getMouseEventClickType } from '@P/src/utils/mouse-event'
import { GLOBAL_EVENT } from '@P/events/global-events'
import {
  COMPS_NAME,
  HOOKS_NAME,
  COMPS_CUSTOM_ATTRS,
  CELL_SELECTION_DIRECTION,
  LOCALE_COMP_NAME,
  CONTEXTMENU_TYPES,
  CONTEXTMENU_NODE_TYPES,
  AUTOFILLING_DIRECTION,
  CURRENT_CELL_SELECTION_TYPES,
  COLUMN_FIXED_TYPE
} from './util/constant'
import ColGroup from './colgroup/index'
import TableHeader from './header/index'
import TableBody from './body/index'
import TableFooter from './footer/index'
import EditInput from './editor/index'
import Selection from './selection/index'
import clickoutside from '@P/src/directives/clickoutside'
import VueDomResizeObserver from '@P/src/components/resize-observer/index'
import VeContextmenu from '@P/ve-contextmenu/ve-contextmenu.js'
import ColumnResizer from './column-resizer/index'
import mitt from 'mitt'
import { tableProps as fanTableProps } from './tableProps'
import { tableInject } from './tableInject'
import { VueElement, computed, defineComponent, inject, nextTick, onMounted, onUnmounted, provide, ref, shallowRef, watch } from 'vue'
const $t = createLocale(LOCALE_COMP_NAME)
type CommonRowItem = {
  rowHeight: number
}

export default defineComponent({
  name: COMPS_NAME.FAN_TABLE,
  directives: {
    'click-outside': clickoutside,
  },
  components: {
    VueDomResizeObserver, ColumnResizer, ColGroup, TableHeader, TableBody, TableFooter, EditInput, Selection, VeContextmenu
  },
  props: fanTableProps(),
  setup(props, { expose }) {
    const { showHeader } = props
    const tableViewportWidth = ref(0)
    const groupColumns = ref([])
    // header rows created by groupColumns
    const headerRows = ref<CommonRowItem[]>([])
    // footer rows created by footerData
    const footerRows = ref<CommonRowItem[]>([])
    const colgroups = ref<any[]>([])
    const hooks = shallowRef(new Hooks()) // create hook instance
    const eventCenter = shallowRef(mitt())
    // 存储当前隐藏列信息
    //   hidden columns
    const hiddenColumns = ref([])
    inject('eventCenter', mitt())
    // is group header
    const isGroupHeader = ref(false)
    const editorInputStartValue = ref('')

    // data start

    // is parent rendered
    const parentRendered = ref(false)
    // table viewport width except scroll bar width
    /*
          列配置变化次数
          依赖columns 配置渲染，都需要重新计算：粘性布局时，重新触发 on-dom-resize-change 事件
          */
    const columnsOptionResetTime = ref(0)
    const tableRootRef = ref()
    const tableContainerWrapperRef = ref()
    const tableContainerRef = ref<VueElement>()
    const tableRef = ref()
    const tableContentWrapperRef = ref()
    const virtualPhantomRef = ref()
    const editInputRef = ref<any>()
    const cellSelectionRef = ref()
    const contextmenuRef = ref()
    const cloneColumns = ref([])
    const virtualScrollVisibleData = ref()
    // virtual scroll visible indexs
    const virtualScrollVisibleIndexs = ref({
      start: -1,
      end: -1,
    })

    const defaultVirtualScrollBufferScale = ref(1)
    // default virtual scroll min row height
    const defaultVirtualScrollMinRowHeight = ref(40)
    // default placeholder per scrolling row count
    const defaultPlaceholderPerScrollingRowCount = ref(8)
    // 起始索引
    const virtualScrollStartIndex = ref(0)
    // preview virtual scroll start index
    const previewVirtualScrollStartIndex = ref(0)
    // 结束索引
    const virtualScrollEndIndex = ref(0)
    // is scrolling
    const showVirtualScrollingPlaceholder = ref(false)
    // disable pointer events timeout id
    const disablePointerEventsTimeoutId = ref<any>(null)

    // is scrolling left
    const isLeftScrolling = ref(false)
    // is scrolling right
    const isRightScrolling = ref(false)
    // is scrolling vertically
    const isVerticalScrolling = ref(false)
    // has horizontal scroll bar
    const hasXScrollBar = ref(false)
    // has vertical scroll bar
    const hasYScrollBar = ref(false)

    // preview table container scrollLeft （处理左列或右列固定效果）
    const previewTableContainerScrollLeft = ref(null)
    // header cell selection colKeys
    const headerIndicatorColKeys = ref({
      startColKey: '',
      startColKeyIndex: -1,
      endColKey: '',
      endColKeyIndex: -1,
    })
    // body indicator rowKeys
    const bodyIndicatorRowKeys = ref({
      startRowKey: '',
      startRowKeyIndex: -1,
      endRowKey: '',
      endRowKeyIndex: -1,
    })
    // cell selection data
    const cellSelectionData = ref({
      currentCell: {
        rowKey: '',
        colKey: '',
        rowIndex: -1,
      },
      normalEndCell: {
        rowKey: '',
        colKey: '',
        rowIndex: -1,
      },
      autoFillEndCell: {
        rowKey: '',
        colKey: '',
      },
    }),
    // cell selection range data
    const cellSelectionRangeData = ref({
      leftColKey: '',
      rightColKey: '',
      topRowKey: '',
      bottomRowKey: '',
    })
    // is header cell mousedown
    const isHeaderCellMousedown = ref(false)
    // is body cell mousedown
    const isBodyCellMousedown = ref(false)


    // is body operation column mousedown
    const isBodyOperationColumnMousedown = ref(false)
    // is cell selection corner mousedown
    const isAutofillStarting = ref(false)
    // autofilling direction
    const autofillingDirection = ref(null)
    // current cell selection type
    const currentCellSelectionType = ref('')
    /*
          table offest height（开启虚拟滚动时使用）
          1、当 :max-height="500" 时使用 max-height
          2、当 max-height="calc(100vh - 210px)" 或者 max-height="80%" 时使用 tableOffestHeight
          */
    const tableOffestHeight = ref(0)
    const tableHeight = ref(0)
    // highlight row key
    const highlightRowKey = ref('')


    // 是否允许按下方向键时，停止编辑并移动选中单元格。当双击可编辑单元格或者点击输入文本框时设置为false值
    // 像excel一样：如果直接在可编辑单元格上输入内容后，按下上、下、左、右按键可以直接选中其他单元格，并停止当前单元格编辑状态
    // like Excel:If you directly enter content in an editable cell, press the up, down, left and right buttons to directly select other cells and stop editing the current cell
    const enableStopEditing = ref(true)
    // contextmenu event target
    const contextmenuEventTarget = ref('')
    // contextmenu options
    const contextmenuOptions = ref<any>([])
    // column resize cursor
    const isColumnResizerHover = ref(false)
    // is column resizing
    const isColumnResizing = ref(false)

    // data end



    const virtualScrollPositions = shallowRef<any[]>([])
    // virtual scroll positions（非响应式）
    // virtualScrollPositions = [
    //     {
    //         rowKey: "", // 当前行数据 rowKey
    //         top: 0, // 距离上一个项的高度
    //         bottom: 100, // 距离下一个项的高度
    //         height: 100 // 自身高度
    //     }
    // ]
    const editingCell = ref<{ rowKey: string, colKey: string, row: any, column: any }>({
      rowKey: '',
      colKey: '',
      row: null,
      column: null,
    })
    const scrollBarWidth = ref(0)

    // DOM refs
    const tableBodyRef = ref()
    /* computed start */
    const actualRenderTableData = computed(() => {
      return isVirtualScroll.value
        ? virtualScrollVisibleData.value
        : props.tableData
    })
    // return row keys
    const allRowKeys = computed(() => {
      let result: any[] = []

      const rowKeyFieldName = props.rowKeyFieldName

      if (rowKeyFieldName) {
        result = props.tableData.map((x) => {
          return x[rowKeyFieldName]
        })
      }
      return result
    })
    // virtual scroll buffer count
    const virtualScrollBufferCount = computed(() => {
      let result = 0

      const virtualScrollOption = props.virtualScrollOption

      if (virtualScrollOption) {
        const { bufferScale } = virtualScrollOption

        const realBufferScale =
          isNumber(bufferScale) && bufferScale > 0
            ? bufferScale
            : defaultVirtualScrollBufferScale.value

        result = realBufferScale * virtualScrollVisibleCount.value
      }

      return result
    },)
    // virtual scroll visible count
    const virtualScrollVisibleCount = computed(() => {
      let result = 0
      const virtualScrollOption = props.virtualScrollOption
      const maxHeight = Number(props.maxHeight)

      if (isVirtualScroll.value && maxHeight) {
        const minRowHeight = isNumber(virtualScrollOption.minRowHeight)
          ? virtualScrollOption.minRowHeight
          : defaultVirtualScrollMinRowHeight.value

        if (isNumber(maxHeight)) {
          result = Math.ceil(maxHeight / minRowHeight)
        } else if (tableOffestHeight.value) {
          // 修复当动态高度 当 max-height="calc(100vh - 210px)" 或者 max-height="80%" 时无法计算的问题
          result = Math.ceil(tableOffestHeight.value / minRowHeight)
        }
      }
      return result
    },)
    // table container style
    const tableContainerStyle = computed(() => {
      const maxHeight = getValByUnit(props.maxHeight)

      let tableContainerHeight:string |number = ''
      if (isVirtualScroll.value) {
        if (maxHeight) {
          tableContainerHeight = maxHeight
        } else {
          console.error("maxHeight prop is required when 'virtualScrollOption.enable = true'")
        }
      } else {
        /*
        fixed:虚拟滚动表格行展开的 fan-table 存在固定头时（sticky 冲突），表格样式错乱的问题
        fixed:When there is a fixed header in the fan-table expanded by the row of the virtual rolling table(header sticky conflict),Incorrect table presentation
        */
        tableContainerHeight = tableHeight.value
        /*
        有横向滚动条时，表格高度需要加上滚动条的宽度
        When there is a horizontal scroll bar, the table height needs to be added with the width of the scroll bar
        */
        if (hasXScrollBar.value) {
          tableContainerHeight += getTableScrollBarWidth()
        }

        tableContainerHeight = getValByUnit(tableContainerHeight)
      }

      return {
        'max-height': maxHeight,
        // if virtual scroll
        height: tableContainerHeight,
      }
    },)
    // table style
    const tableStyle = computed(() => {
      return {
        width: getValByUnit(props.scrollWidth),
      }
    },)
    // table class
    const tableClass = computed(() => {
      return {
        [clsName('border-x')]: props.borderX,
        [clsName('border-y')]: props.borderY,
      }
    },)
    // table container class
    const tableContainerClass = computed(() => {
      const virtualScroll = clsName('virtual-scroll')
      const leftScrolling = clsName('container-left-scrolling')
      const rightScrolling = clsName('container-right-scrolling')
      const verticalScroll = clsName('container-vertical-scrolling')
      const cellEditing = clsName('is-cell-editing')
      const autofilling = clsName('autofilling')
      const cellSelection = clsName('enable-cell-selection')
      const result = {
        [clsName('container')]: true,
        [virtualScroll]: isVirtualScroll.value,
        [leftScrolling]: isLeftScrolling.value,
        [rightScrolling]: isRightScrolling.value,
        [verticalScroll]: isVerticalScrolling.value,
        [cellEditing]: isCellEditing.value,
        [autofilling]: isAutofillStarting.value,
        // 如果开启单元格选择，则关闭 user-select
        [cellSelection]: enableCellSelection.value,
      }
      return result
    },)
    // table body class
    const tableBodyClass = computed(() => {
      let result = null

      const rowStyleOption = props.rowStyleOption

      let hoverHighlight = true
      let clickHighlight = true
      let stripe = false

      if (rowStyleOption) {
        hoverHighlight = rowStyleOption.hoverHighlight
        clickHighlight = rowStyleOption.clickHighlight
        stripe = rowStyleOption.stripe
      }
      const clsStripe = clsName('stripe')
      const rowHover = clsName('stripe')
      result = {
        [clsStripe]: stripe === true, // 默认不开启
        [rowHover]: hoverHighlight !== false, // 默认开启
        [clsName('row-highlight')]: clickHighlight !== false, // 默认开启
      }

      return result
    },)
    // is virtual scroll
    const isVirtualScroll = computed(() => {
      const virtualScrollOption = props.virtualScrollOption
      return virtualScrollOption && virtualScrollOption.enable
    },)
    // has fixed column
    const hasFixedColumn = computed(() => {
      return colgroups.value.some(
        (x) =>
          x.fixed === COLUMN_FIXED_TYPE.LEFT ||
          x.fixed === COLUMN_FIXED_TYPE.RIGHT,
      )
    },)
    // has left fixed column
    const hasLeftFixedColumn = computed(() => {
      return colgroups.value.some(
        (x) => x.fixed === COLUMN_FIXED_TYPE.LEFT,
      )
    },)
    // has right fixed column
    const hasRightFixedColumn = computed(() => {
      return colgroups.value.some(
        (x) => x.fixed === COLUMN_FIXED_TYPE.RIGHT,
      )
    },)
    // is editing cell
    const isCellEditing = computed(() => {
      return (
        !isEmptyValue(editingCell.value.rowKey) &&
        !isEmptyValue(editingCell.value.colKey)
      )
    },)
    // has edit column
    const hasEditColumn = computed(() => {
      return colgroups.value.some((x) => x.edit)
    },)
    // enable header contextmenu
    const enableHeaderContextmenu = computed(() => {
      let result = false
      const contextmenuHeaderOption = props.contextmenuHeaderOption
      if (contextmenuHeaderOption) {
        const { contextmenus } = contextmenuHeaderOption

        if (Array.isArray(contextmenus) && contextmenus.length) {
          result = true
        }
      }
      return result
    },)
    // enable body contextmenu
    const enableBodyContextmenu = computed(() => {
      let result = false
      if (props.contextmenuBodyOption) {
        const { contextmenus } = props.contextmenuBodyOption

        if (Array.isArray(contextmenus) && contextmenus.length) {
          result = true
        }
      }
      return result
    },)
    // contextmenu type
    const contextMenuType = computed(() => {
      if (headerIndicatorColKeys.value.startColKeyIndex > -1) {
        return CONTEXTMENU_TYPES.HEADER_CONTEXTMENU
      } else {
        return CONTEXTMENU_TYPES.BODY_CONTEXTMENU
      }
    },)
    // enable cell selection
    // 单元格编辑、剪贴板都依赖单元格选择
    const enableCellSelection = computed(() => {
      let result = true
      const cellSelectionOption = props.cellSelectionOption
      if (isEmptyValue(props.rowKeyFieldName)) {
        result = false
      } else if (
        cellSelectionOption &&
        isBoolean(cellSelectionOption.enable) &&
        cellSelectionOption.enable === false
      ) {
        result = false
      }
      return result
    },)
    // enable clipboard
    const enableClipboard = computed(() => {
      return props.rowKeyFieldName
    },)
    // eanble width resize
    const enableColumnResize = computed(() => {
      let result = false
      if (props.columnWidthResizeOption) {
        const { enable } = props.columnWidthResizeOption
        if (isBoolean(enable)) {
          result = enable
        }
      }
      return result
    },)
    // header total height
    const headerTotalHeight = computed(() => {
      let result = 0
      if (this.showHeader) {
        result = headerRows.value.reduce((total, currentVal) => {
          return currentVal.rowHeight + total
        }, 0)
      }
      return result
    },)
    // footer total height
    const footerTotalHeight = computed(() => {
      return footerRows.value.reduce((total, currentVal) => {
        return currentVal.rowHeight + total
      }, 0)
    },)
    /* computed end */

    // method start
    // int header rows
    function initHeaderRows() {
      if (Array.isArray(groupColumns.value)) {
        headerRows.value = groupColumns.value.map(() => ({ rowHeight: 0 }))
      }
    }

    // int footer rows
    function initFooterRows() {
      const footerData = props.footerData
      if (Array.isArray(footerData)) {
        footerRows.value = footerData.map(() => ({ rowHeight: 0 }))
      }
    }

    // header tr height resize
    function headerRowHeightChange({ rowIndex, height }) {
      headerRows.value.splice(rowIndex, 1, { rowHeight: height })
    }

    // footer row height resize
    function footRowHeightChange({ rowIndex, height }) {
      footerRows.value.splice(rowIndex, 1, { rowHeight: height })
    }

    // body cell width change
    function bodyCellWidthChange(colWidths) {
      colgroups.value = colgroups.value.map((item) => {
        item._realTimeWidth = colWidths.get(item.key)
        return item
      })

      hooks.value.triggerHook(HOOKS_NAME.TABLE_CELL_WIDTH_CHANGE)
    }

    // set column width for column resize
    function setColumnWidth({ colKey, width }) {
      colgroups.value = colgroups.value.map((item) => {
        if (item.key === colKey) {
          item._columnResizeWidth = width
        }
        return item
      })
      nextTick(() => {
        setScrollBarStatus()
      })
      hooks.value.triggerHook(HOOKS_NAME.TABLE_CELL_WIDTH_CHANGE)
    }

    // update colgroups by sort change
    function updateColgroupsBySortChange(sortColumns) {
      colgroups.value = colgroups.value.map((item) => {
        // update colgroups by sort columns
        if (Object.keys(sortColumns).indexOf(item.field) > -1) {
          item.sortBy = sortColumns[item.field]
        }
        return item
      })
    }

    // init column width by column resize
    function initColumnWidthByColumnResize() {

      const columnDefaultWidth = 50
      if (enableColumnResize.value) {
        colgroups.value = colgroups.value.map((item) => {
          let columnWidth = columnDefaultWidth
          if (isNumber(item.width)) {
            columnWidth = item.width
          }
          item._columnResizeWidth = columnWidth
          return item
        })
      }
    }

    // init columns
    function initColumns() {
      const columnHiddenOption = props.columnHiddenOption
      if (columnHiddenOption) {
        const { defaultHiddenColumnKeys } = columnHiddenOption

        if (!isEmptyArray(defaultHiddenColumnKeys)) {
          hiddenColumns.value = defaultHiddenColumnKeys
        }
      }

      showOrHideColumns()
    }

    function showOrHideColumns() {
      let tempCloneColumns = cloneDeep(props.columns)

      tempCloneColumns = tempCloneColumns.map((col) => {
        // 操作列默认左固定
        if (col.operationColumn) {
          col.fixed = COLUMN_FIXED_TYPE.LEFT
        }
        return col
      })

      if (!isEmptyArray(hiddenColumns.value)) {
        //  recursive remove column key
        hiddenColumns.value.forEach((key) => {
          tempCloneColumns = recursiveRemoveColumnByKey(
            tempCloneColumns,
            key,
          )
        })
      }

      cloneColumns.value = tempCloneColumns
    }

    // 初始化分组表头
    function initTableGroupColumns() {
      const result = initGroupColumns(cloneColumns.value)

      // set is group header
      isGroupHeader.value = result.isGroupHeader
      // set colgroups
      colgroups.value = result.colgroups
      groupColumns.value = result.groupColumns
    }

    // scroll bar width
    function getTableScrollBarWidth() {
      let result = 0

      if (scrollBarWidth.value) {
        result = scrollBarWidth.value
      } else {
        result = getScrollbarWidth()
        scrollBarWidth.value = result
      }

      return result
    }

    /*
      * @selectedAllChange
      * @desc  selected all change
      * @param {bool} isSelected - is selected
      */
    function selectedAllChange({ isSelected }) {
      eventCenter.value.emit(GLOBAL_EVENT.CHECKBOX_SELECTED_ALL_CHANGE_BODY, {
        isSelected,
      },
      )
    }

    /**
     *  @setSelectedAllInfo
     * @desc  set selected all info
     * @param {bool} isSelected - is selected
     * @param {bool} isIndeterminate - is indeterminate
     */
    function setSelectedAllInfo({ isSelected, isIndeterminate }) {
      eventCenter.value.emit(GLOBAL_EVENT.CHECKBOX_SELECTED_ALL_INFO_CHECKBOX,
        {
          isSelected,
          isIndeterminate,
        },
      )
    }

    // cell selection current cell change
    function cellSelectionCurrentCellChange({ rowKey, colKey }) {
      cellSelectionData.value.currentCell.colKey = colKey
      cellSelectionData.value.currentCell.rowKey = rowKey
      cellSelectionData.value.currentCell.rowIndex =
        allRowKeys.value.indexOf(rowKey)
    }

    // cell selection end cell change
    function cellSelectionNormalEndCellChange({ rowKey, colKey }) {
      cellSelectionData.value.normalEndCell.colKey = colKey
      cellSelectionData.value.normalEndCell.rowKey = rowKey
      cellSelectionData.value.normalEndCell.rowIndex =
        allRowKeys.value.indexOf(rowKey)
    }

    // cell selection auto fill cell change
    function cellSelectionAutofillCellChange({ rowKey, colKey }) {
      cellSelectionData.value.autoFillEndCell.colKey = colKey
      cellSelectionData.value.autoFillEndCell.rowKey = rowKey
    }

    // clear cell selection current cell
    function clearCellSelectionCurrentCell() {
      cellSelectionCurrentCellChange({
        rowKey: '',
        colKey: '',
        rowIndex: -1,
      })
    }

    // clear cell selection normal end cell
    function clearCellSelectionNormalEndCell() {
      cellSelectionNormalEndCellChange({
        rowKey: '',
        colKey: '',
        rowIndex: -1,
      })
    }

    // clear cell selection autofill end cell
    function clearCellSelectionAutofillEndCell() {
      cellSelectionAutofillCellChange({ rowKey: '', colKey: '' })
    }

    // header indicator colKeys change
    function headerIndicatorColKeysChange({ startColKey, endColKey }) {
      headerIndicatorColKeys.value.startColKey = startColKey
      headerIndicatorColKeys.value.startColKeyIndex = colgroups.value.findIndex(
        (x) => x.key === startColKey,
      )
      headerIndicatorColKeys.value.endColKey = endColKey
      headerIndicatorColKeys.value.endColKeyIndex = colgroups.value.findIndex(
        (x) => x.key === endColKey,
      )
    }

    // clear header indicator colKeys
    function clearHeaderIndicatorColKeys() {
      headerIndicatorColKeys.value.startColKey = ''
      headerIndicatorColKeys.value.startColKeyIndex = -1
      headerIndicatorColKeys.value.endColKey = ''
      headerIndicatorColKeys.value.endColKeyIndex = -1
    }

    // body indicator rowKeys change
    function bodyIndicatorRowKeysChange({ startRowKey, endRowKey }) {
      bodyIndicatorRowKeys.value.startRowKey = startRowKey
      bodyIndicatorRowKeys.value.startRowKeyIndex =
        allRowKeys.value.indexOf(startRowKey)
      bodyIndicatorRowKeys.value.endRowKey = endRowKey
      bodyIndicatorRowKeys.value.endRowKeyIndex =
        allRowKeys.value.indexOf(endRowKey)
    }

    // clear body indicator RowKeys
    function clearBodyIndicatorRowKeys() {
      bodyIndicatorRowKeys.value.startRowKey = ''
      bodyIndicatorRowKeys.value.startRowKeyIndex = -1
      bodyIndicatorRowKeys.value.endRowKey = ''
      bodyIndicatorRowKeys.value.endRowKeyIndex = -1
    }

    // set cell selection by autofill
    function setCellSelectionByAutofill() {
      const {
        cellAutofillOption,
        colgroups,
      } = this
      const { autoFillEndCell, currentCell } = cellSelectionData.value

      const { rowKey, colKey } = autoFillEndCell

      if (isEmptyValue(rowKey) || isEmptyValue(colKey)) {
        return false
      }

      let currentCellData = {}
      let normalEndCellData = {}

      const { leftColKey, rightColKey, topRowKey, bottomRowKey } =
        cellSelectionRangeData.value

      // cell selection range auto fill
      if (
        currentCellSelectionType.value === CURRENT_CELL_SELECTION_TYPES.RANGE
      ) {
        if (
          !isCellInSelectionRange({
            cellData: autoFillEndCell,
            cellSelectionRangeData: cellSelectionRangeData.value,
            colgroups,
            allRowKeys: allRowKeys.value,
          })
        ) {
          if (autofillingDirection.value === AUTOFILLING_DIRECTION.RIGHT) {
            currentCellData = {
              rowKey: topRowKey,
              colKey: leftColKey,
            }
            normalEndCellData = { rowKey: bottomRowKey, colKey }
          } else if (
            autofillingDirection.value === AUTOFILLING_DIRECTION.DOWN
          ) {
            currentCellData = {
              rowKey: topRowKey,
              colKey: leftColKey,
            }
            normalEndCellData = { rowKey, colKey: rightColKey }
          } else if (
            autofillingDirection.value === AUTOFILLING_DIRECTION.UP
          ) {
            currentCellData = {
              rowKey,
              colKey: leftColKey,
            }
            normalEndCellData = {
              rowKey: bottomRowKey,
              colKey: rightColKey,
            }
          } else if (
            autofillingDirection.value === AUTOFILLING_DIRECTION.LEFT
          ) {
            currentCellData = { rowKey: topRowKey, colKey }
            normalEndCellData = {
              rowKey: bottomRowKey,
              colKey: rightColKey,
            }
          }
        } else {
          // return if within the range
          return false
        }
      } else if ( // cell selection single auto fill
        currentCellSelectionType.value === CURRENT_CELL_SELECTION_TYPES.SINGLE
      ) {
        if (
          currentCell.rowKey !== rowKey ||
          currentCell.colKey !== colKey
        ) {
          if (autofillingDirection.value === AUTOFILLING_DIRECTION.RIGHT) {
            currentCellData = {
              rowKey,
              colKey: leftColKey,
            }
            normalEndCellData = {
              rowKey,
              colKey,
            }
          } else if (
            autofillingDirection.value === AUTOFILLING_DIRECTION.DOWN
          ) {
            currentCellData = {
              rowKey: topRowKey,
              colKey: leftColKey,
            }
            normalEndCellData = {
              rowKey,
              colKey: leftColKey,
            }
          } else if (
            autofillingDirection.value === AUTOFILLING_DIRECTION.UP
          ) {
            currentCellData = {
              rowKey,
              colKey: leftColKey,
            }
            normalEndCellData = {
              rowKey: bottomRowKey,
              colKey: leftColKey,
            }
          } else if (
            autofillingDirection.value === AUTOFILLING_DIRECTION.LEFT
          ) {
            currentCellData = {
              rowKey,
              colKey,
            }
            normalEndCellData = {
              rowKey,
              colKey: rightColKey,
            }
          }
        } else {
          // return if within the range
          return false
        }
      }

      const cellAutofillParams = {
        tableData: props.tableData,
        allRowKeys: allRowKeys.value,
        colgroups: colgroups.value,
        rowKeyFieldName: props.rowKeyFieldName,
        direction: autofillingDirection.value,
        currentCellSelectionType: currentCellSelectionType.value,
        cellSelectionRangeData: cellSelectionRangeData.value,
        nextCurrentCell: currentCellData,
        nextNormalEndCell: normalEndCellData,
      }

      if (cellAutofillOption) {
        const { beforeAutofill, afterAutofill } = cellAutofillOption

        if (isFunction(beforeAutofill)) {
          // before autofill
          const autofillResponse = cellAutofill({
            isReplaceData: false,
            ...cellAutofillParams,
          })
          const callback = beforeAutofill(autofillResponse)
          if (isBoolean(callback) && !callback) {
            return false
          }
        }

        // after autofill
        const autofillResponse = cellAutofill({
          isReplaceData: true,
          ...cellAutofillParams,
        })
        if (isFunction(afterAutofill)) {
          afterAutofill(autofillResponse)
        }
      }

      if (!isEmptyValue(currentCellData.rowKey)) {
        cellSelectionCurrentCellChange({
          rowKey: currentCellData.rowKey,
          colKey: currentCellData.colKey,
        })
      }

      if (!isEmptyValue(normalEndCellData.rowKey)) {
        cellSelectionNormalEndCellChange({
          rowKey: normalEndCellData.rowKey,
          colKey: normalEndCellData.colKey,
        })
      }
    }

    // cell selection range data change
    function cellSelectionRangeDataChange(newData) {
      cellSelectionRangeData.value = Object.assign(
        cellSelectionRangeData.value,
        newData,
      )
    }

    // autofilling direction change
    function autofillingDirectionChange(direction) {
      autofillingDirection.value = direction
    }

    // set current cell selection type
    function setCurrentCellSelectionType() {
      const { currentCell, normalEndCell } = cellSelectionData.value

      let result

      if (
        isEmptyValue(currentCell.rowKey) ||
        isEmptyValue(currentCell.colKey)
      ) {
        result = ''
      } else {
        if (
          !isEmptyValue(normalEndCell.rowKey) &&
          !isEmptyValue(normalEndCell.colKey)
        ) {
          result = CURRENT_CELL_SELECTION_TYPES.RANGE
        } else {
          result = CURRENT_CELL_SELECTION_TYPES.SINGLE
        }
      }

      currentCellSelectionType.value = result
    }

    // deal keydown event
    function dealKeydownEvent(event) {
      const { keyCode, ctrlKey, shiftKey, altKey } = event

      const { rowKey, colKey } = cellSelectionData.value.currentCell

      const currentColumn = colgroups.value.find((x) => x.key === colKey)

      if (!isEmptyValue(rowKey) && !isEmptyValue(colKey)) {
        switch (keyCode) {
          case KEY_CODES.TAB: {
            let direction
            if (shiftKey) {
              direction = CELL_SELECTION_DIRECTION.LEFT
            } else {
              direction = CELL_SELECTION_DIRECTION.RIGHT
            }

            selectCellByDirection({
              direction,
            })

            clearCellSelectionNormalEndCell()

            stopEditingCell()
            event.preventDefault()
            break
          }
          case KEY_CODES.ARROW_LEFT: {
            const direction = CELL_SELECTION_DIRECTION.LEFT
            if (enableStopEditing.value) {
              selectCellByDirection({
                direction,
              })

              clearCellSelectionNormalEndCell()

              stopEditingCell()
              event.preventDefault()
            }

            break
          }
          case KEY_CODES.ARROW_RIGHT: {
            const direction = CELL_SELECTION_DIRECTION.RIGHT

            if (enableStopEditing.value) {
              selectCellByDirection({
                direction,
              })

              clearCellSelectionNormalEndCell()

              stopEditingCell()
              event.preventDefault()
            }
            break
          }
          case KEY_CODES.ARROW_UP: {
            const direction = CELL_SELECTION_DIRECTION.UP

            if (enableStopEditing.value) {
              selectCellByDirection({ direction, })

              clearCellSelectionNormalEndCell()

              stopEditingCell()
              event.preventDefault()
            }
            break
          }
          case KEY_CODES.ARROW_DOWN: {
            const direction = CELL_SELECTION_DIRECTION.DOWN

            if (enableStopEditing.value) {
              selectCellByDirection({
                direction,
              })

              clearCellSelectionNormalEndCell()

              stopEditingCell()
              event.preventDefault()
            }
            break
          }
          case KEY_CODES.ENTER: {
            let direction
            // add new line
            if (altKey) {
              const editInputEditor = editInputRef.value

              editInputEditor.textareaAddNewLine()
            } else if (shiftKey) { // direction up
              direction = CELL_SELECTION_DIRECTION.UP
              stopEditingCell()
            } else if (ctrlKey) { // stop editing and stay in current cell
              stopEditingCell()
            } else { // direction down
              direction = CELL_SELECTION_DIRECTION.DOWN
              stopEditingCell()
            }

            if (direction) {
              clearCellSelectionNormalEndCell()
              selectCellByDirection({
                direction,
              })
            }
            event.preventDefault()
            break
          }
          case KEY_CODES.SPACE: {
            if (!isCellEditing.value) {
              // start editing and enter a space
              startEditingCell({
                rowKey,
                colKey,
                defaultValue: ' ',
              })
              event.preventDefault()
            }

            break
          }
          case KEY_CODES.BACK_SPACE: {
            if (!isCellEditing.value) {
              // start editing and clear value
              startEditingCell({
                rowKey,
                colKey,
                defaultValue: '',
              })
              event.preventDefault()
            }

            break
          }
          case KEY_CODES.DELETE: {
            if (!isCellEditing.value) {
              // delete cell selection range value
              deleteCellSelectionRangeValue()
              event.preventDefault()
            }

            break
          }
          case KEY_CODES.F2: {
            if (!isCellEditing.value) {
              if (currentColumn.edit) {
                // start editing cell and don't allow stop eidting by direction key
                enableStopEditing.value = false
                startEditingCell({ rowKey, colKey })
              }
              event.preventDefault()
            }

            break
          }
          default: {
            // enter text directly
            if (isInputKeyCode(event)) {
              startEditingCell({
                rowKey,
                colKey,
                defaultValue: '',
              })
            }
            break
          }
        }
      }
    }

    // select cell by direction
    function selectCellByDirection({ direction }) {
      const { rowKey, colKey } = cellSelectionData.value.currentCell

      const columnIndex = colgroups.value.findIndex((x) => x.key === colKey)
      const rowIndex = allRowKeys.value.indexOf(rowKey)

      if (direction === CELL_SELECTION_DIRECTION.LEFT) {
        if (columnIndex > 0) {
          const nextColumn = colgroups.value[columnIndex - 1]
          cellSelectionData.value.currentCell.colKey = nextColumn.key
          columnToVisible(nextColumn)
        }
      } else if (direction === CELL_SELECTION_DIRECTION.RIGHT) {
        if (columnIndex < colgroups.value.length - 1) {
          const nextColumn = colgroups.value[columnIndex + 1]
          cellSelectionData.value.currentCell.colKey = nextColumn.key
          columnToVisible(nextColumn)
        }
      } else if (direction === CELL_SELECTION_DIRECTION.UP) {
        if (rowIndex > 0) {
          const nextRowKey = allRowKeys.value[rowIndex - 1]
          rowToVisible(KEY_CODES.ARROW_UP, nextRowKey)
        }
      } else if (direction === CELL_SELECTION_DIRECTION.DOWN) {
        if (rowIndex < allRowKeys.value.length - 1) {
          const nextRowKey = allRowKeys.value[rowIndex + 1]
          rowToVisible(KEY_CODES.ARROW_DOWN, nextRowKey)
        }
      }
    }

    /*
    * @columnToVisible
    * @desc  column to visible
    * @param {object} nextColumn - next column
    */
    function columnToVisible(nextColumn) {
      if (!nextColumn || nextColumn) return
      if (!hasXScrollBar.value) {
        return false
      }

      const { scrollWidth, clientWidth, scrollLeft } = tableContainerRef.value

      if (!nextColumn.fixed) {
        const leftTotalWidth = getNotFixedTotalWidthByColumnKey({
          colgroups: colgroups.value,
          colKey: nextColumn.key,
          fixed: COLUMN_FIXED_TYPE.LEFT,
        })

        const rightTotalWidth = getNotFixedTotalWidthByColumnKey({
          colgroups: colgroups.value,
          colKey: nextColumn.key,
          fixed: COLUMN_FIXED_TYPE.RIGHT,
        })

        if (scrollLeft) {
          const diff = scrollLeft - leftTotalWidth
          if (diff > 0) {
            tableContainerRef.value.scrollLeft = scrollLeft - diff
          }
        }

        const scrollRight = scrollWidth - clientWidth - scrollLeft
        if (scrollRight) {
          const diff = scrollRight - rightTotalWidth
          if (diff > 0) {
            tableContainerRef.value.scrollLeft = scrollLeft + diff
          }
        }
      }
    }

    /*
         * @rowToVisible
         * @desc  row to visible
         * @param {number} keyCode - current keyCode
         * @param {any} nextRowKey - next row key
         */
    function rowToVisible(keyCode, nextRowKey) {

      const {
        clientHeight: containerClientHeight,
        scrollTop: containerScrollTop,
      } = tableContainerRef.value

      const nextRowEl = tableRootRef.value.$el.querySelector(
        `tbody tr[${COMPS_CUSTOM_ATTRS.BODY_ROW_KEY}="${nextRowKey}"]`,
      )

      if (nextRowEl) {
        const { offsetTop: trOffsetTop, clientHeight: trClientHeight } =
          nextRowEl

        const parentOffsetTop = tableContentWrapperRef.value.$el.offsetTop

        // arrow up
        if (keyCode === KEY_CODES.ARROW_UP) {
          let diff = 0
          if (isVirtualScroll.value) {
            diff =
              headerTotalHeight.value -
              (trOffsetTop -
                (containerScrollTop - parentOffsetTop))
          } else {
            diff =
              containerScrollTop +
              headerTotalHeight.value -
              trOffsetTop
          }

          if (diff > 0) {
            tableContainerRef.scrollTop = containerScrollTop - diff
          }
        } else if (keyCode === KEY_CODES.ARROW_DOWN) { // arrow down
          let diff = 0
          if (isVirtualScroll.value) {
            diff =
              trOffsetTop -
              (containerScrollTop - parentOffsetTop) +
              trClientHeight +
              footerTotalHeight.value -
              containerClientHeight
          } else {
            diff =
              trOffsetTop +
              trClientHeight +
              footerTotalHeight.value -
              (containerClientHeight + containerScrollTop)
          }

          if (diff >= 0) {
            tableContainerRef.scrollTop = containerScrollTop + diff
          }
        }
        const { currentCell } = cellSelectionData.value
        cellSelectionCurrentCellChange({
          rowKey: nextRowKey,
          colKey: currentCell.colKey,
        })
      }
    }

    // set virtual scroll visible data
    function setVirtualScrollVisibleData() {

      const startIndex = virtualScrollStartIndex.value
      const endIndex = virtualScrollEndIndex.value

      const aboveCount = getVirtualScrollAboveCount()
      const belowCount = getVirtualScrollBelowCount()

      const start = startIndex - aboveCount
      const end = endIndex + belowCount

      virtualScrollVisibleIndexs.value.start = start
      virtualScrollVisibleIndexs.value.end = end - 1

      virtualScrollVisibleData.value = props.tableData.slice(start, end)
    }

    // get virtual scroll above count
    function getVirtualScrollAboveCount() {
      let result = 0
      const { virtualScrollBufferCount } = this


      if (isVirtualScroll.value) {
        result = Math.min(
          virtualScrollStartIndex.value,
          virtualScrollBufferCount,
        )
      }
      return result
    }

    // get virtual scroll bellow count
    function getVirtualScrollBelowCount() {
      let result = 0

      const { virtualScrollBufferCount } = this

      if (isVirtualScroll.value) {
        result = Math.min(
          props.tableData.length - virtualScrollEndIndex.value,
          virtualScrollBufferCount,
        )
      }

      return result
    }

    // get virtual phantom
    function getVirtualViewPhantom() {
      let content = null

      // 1、is virtualScroll
      // 2、has left fixed column and expand option（resolve expand row content sticky）

      if (isVirtualScroll.value || (hasLeftFixedColumn.value && props.expandOption)) {
        const props = {
          tagName: 'div',
          style: {
            width: '100%',
          },
          onDomResizeChange: ({ width }) => {
            tableViewportWidth.value = width
          },
        }

        content = (
          <div
            ref={virtualPhantomRef}
            class={[
              clsName('virtual-phantom'),
              isVirtualScroll.value ? clsName('virtual-scroll') : '',
            ]}
          >
            <VueDomResizeObserver {...props} />
          </div>
        )
      }

      return content
    }

    // init virtual scroll positions
    function initVirtualScrollPositions() {
      if (isVirtualScroll.value) {
        const virtualScrollOption = props.virtualScrollOption
        const minRowHeight = isNumber(virtualScrollOption.minRowHeight)
          ? virtualScrollOption.minRowHeight
          : defaultVirtualScrollMinRowHeight.value

        virtualScrollPositions.value = props.tableData.map((item, index) => ({
          rowKey: item[props.rowKeyFieldName],
          height: minRowHeight,
          top: index * minRowHeight,
          bottom: (index + 1) * minRowHeight,
        }))
      }
    }

    // list item height change
    function bodyRowHeightChange({ rowKey, height }) {
      // 获取真实元素大小，修改对应的尺寸缓存
      const index = virtualScrollPositions.value.findIndex(
        (x) => x.rowKey === rowKey,
      )

      const oldHeight = virtualScrollPositions.value[index].height
      const dValue = oldHeight - height
      // 存在差值
      if (dValue) {
        virtualScrollPositions.value[index].bottom =
          virtualScrollPositions.value[index].bottom - dValue
        virtualScrollPositions.value[index].height = height
        for (
          let k = index + 1;
          k < virtualScrollPositions.value.length;
          k++
        ) {
          virtualScrollPositions.value[k].top =
            virtualScrollPositions.value[k - 1].bottom
          virtualScrollPositions.value[k].bottom =
            virtualScrollPositions.value[k].bottom - dValue
        }

        // 更新 virtual phantom 列表总高度
        setVirtualPhantomHeight()

        // 更新真实偏移量
        this.setVirtualScrollStartOffset()
      }
    }
    // update virtual phantom list height
    function setVirtualPhantomHeight() {
      let totalHeight = 0
      if (virtualScrollPositions.value.length) {
        const scrollIndex = virtualScrollPositions.value.length - 1
        totalHeight = virtualScrollPositions.value[scrollIndex].bottom
      }
      if (virtualPhantomRef.value) {
        virtualPhantomRef.value.style.height =
          totalHeight + 'px'
      }
    }
    // set virtual scroll start offset
    function setVirtualScrollStartOffset() {
      const start = virtualScrollStartIndex.value

      const aboveCount = getVirtualScrollAboveCount()

      let startOffset = 0

      if (start >= 1) {
        const size =
          virtualScrollPositions.value[start].top -
          (virtualScrollPositions.value[start - aboveCount]
            ? virtualScrollPositions.value[start - aboveCount].top
            : 0)
        startOffset =
          virtualScrollPositions.value[start - 1].bottom - size
      }

      setTableContentTopValue({ top: startOffset })
    }
    // set table content top value
    function setTableContentTopValue({ top }) {
      window.requestAnimationFrame(() => {
        const ele = tableContentWrapperRef.value
        if (ele) {
          ele.$el.style.top = `${top}px`
        }
      })
    }
    // get virtual scroll start index
    function getVirtualScrollStartIndex(scrollTop = 0) {
      return this.virtualScrollBinarySearch(
        virtualScrollPositions.value,
        scrollTop,
      )
    }
    // virtual scroll binary search
    function virtualScrollBinarySearch(list, value) {
      let start = 0
      let end = list.length - 1
      let tempIndex = null

      while (start <= end) {
        const midIndex = parseInt((start + end) / 2)
        const midValue = list[midIndex].bottom
        if (midValue === value) {
          return midIndex + 1
        } else if (midValue < value) {
          start = midIndex + 1
        } else if (midValue > value) {
          if (tempIndex === null || tempIndex > midIndex) {
            tempIndex = midIndex
          }
          end = end - 1
        }
      }
      return tempIndex
    }
    // table container virtual scroll handler
    function tableContainerVirtualScrollHandler(tableContainerRef) {
      const visibleCount = virtualScrollVisibleCount.value

      const virtualScrollOption = props.virtualScrollOption

      // 当前滚动位置
      const scrollTop = tableContainerRef.scrollTop

      // 此时的开始索引
      const visibleStartIndex = this.getVirtualScrollStartIndex(scrollTop)
      virtualScrollStartIndex.value = visibleStartIndex

      // 此时的结束索引
      const visibleEndIndex = visibleStartIndex + visibleCount
      virtualScrollEndIndex.value = visibleEndIndex

      const visibleAboveCount = getVirtualScrollAboveCount()
      const visibleBelowCount = getVirtualScrollBelowCount()

      // 此时的偏移量
      this.setVirtualScrollStartOffset()

      if (!showVirtualScrollingPlaceholder.value) {
        const bodyElement = tableBodyRef.value

        if (bodyElement) {
          bodyElement.renderingRowKeys(
            allRowKeys.value.slice(
              visibleStartIndex - visibleAboveCount,
              visibleEndIndex + visibleBelowCount,
            ),
          )
        }
      }

      const { scrolling } = virtualScrollOption
      if (isFunction(scrolling)) {
        const visibleAboveCount = getVirtualScrollAboveCount()
        const visibleBelowCount = getVirtualScrollBelowCount()

        const startRowIndex = visibleStartIndex - visibleAboveCount

        scrolling({
          startRowIndex: startRowIndex > 0 ? startRowIndex : 0,
          visibleStartIndex,
          visibleEndIndex,
          visibleAboveCount,
          visibleBelowCount,
        })
      }

      setVirtualScrollVisibleData()
    }
    // debounce scroll ended
    function debounceScrollEnded() {
      const scrollingResetTimeInterval = 150

      if (disablePointerEventsTimeoutId.value) {
        cancelAnimationTimeout(disablePointerEventsTimeoutId.value)
      }

      disablePointerEventsTimeoutId.value = requestAnimationTimeout(
        debounceScrollEndedCallback,
        scrollingResetTimeInterval,
      )
    }
    // debounce scroll callback
    function debounceScrollEndedCallback() {
      disablePointerEventsTimeoutId.value = null
      showVirtualScrollingPlaceholder.value = false
    }
    // init virtual scroll
    function initVirtualScroll() {
      if (isVirtualScroll.value) {
        const startIndex = 0

        virtualScrollStartIndex.value = startIndex
        virtualScrollEndIndex.value = startIndex + virtualScrollVisibleCount.value

        // 修复渲染结束，同时开启虚拟滚动和设置表格数据，无法设置 virtual phantom 高度的问题
        nextTick(() => {
          tableContainerVirtualScrollHandler(tableContainerRef.value)
          setVirtualPhantomHeight()
        })
      }
    }

    // set scrolling
    function setScrolling(tableContainerRef) {
      if (hasFixedColumn.value) {
        const { scrollWidth, clientWidth, scrollLeft } = tableContainerRef
        const previewScrollLeft = previewTableContainerScrollLeft.value

        // 仅横向滚动需要处理
        if (
          previewScrollLeft === 0 ||
          previewScrollLeft !== scrollLeft
        ) {
          previewTableContainerScrollLeft.value = scrollLeft

          isLeftScrolling.value = scrollLeft > 0
          isRightScrolling.value = scrollWidth - clientWidth > scrollLeft
        }
        isLeftScrolling.value = scrollLeft > 0
        isRightScrolling.value = scrollWidth - clientWidth > scrollLeft
      }

      if (props.fixedHeader) {
        const { scrollTop } = tableContainerRef
        isVerticalScrolling.value = scrollTop > 0
      }
    }

    // set scroll bar status
    function setScrollBarStatus() {
      const tableContainerRef = this.$refs[this.tableContainerRef]
      if (tableContainerRef) {
        const { scrollWidth, clientWidth, scrollHeight, clientHeight } =
          tableContainerRef

        if (scrollWidth && clientWidth) {
          hasXScrollBar.value = !!(scrollWidth - clientWidth)
        }

        if (scrollHeight && clientHeight) {
          hasYScrollBar.value = !!(scrollHeight - clientHeight)
        }
      }
    }

    // init scrolling
    function initScrolling() {
      setScrolling(this.$refs[this.tableContainerRef])
    }

    // table click outside
    function tableClickOutside(e) {
      // exclude contextmenu panel clicked
      if (isContextmenuPanelClicked(e)) {
        return false
      }

      isHeaderCellMousedown.value = false
      isBodyCellMousedown.value = false
      isBodyOperationColumnMousedown.value = false
      isAutofillStarting.value = false
      setIsColumnResizing(false)

      // clear cell selection
      clearCellSelectionCurrentCell()
      clearCellSelectionNormalEndCell()

      // clear indicators
      clearHeaderIndicatorColKeys()
      clearBodyIndicatorRowKeys()

      // stop editing cell
      stopEditingCell()
    }

    // save cell when stop editing
    function saveCellWhenStopEditing() {
      const rowKeyFieldName = props.rowKeyFieldName

      const {
        cellValueChange,
        beforeCellValueChange,
        afterCellValueChange,
      } = props.editOption

      if (isCellEditing.value) {
        const { rowKey, colKey } = editingCell.value

        const currentRow = props.tableData.find(
          (x) => x[rowKeyFieldName] === rowKey,
        )

        if (currentRow) {
          const currentColumn = colgroups.value.find(
            (x) => x.key === colKey,
          )
          const columnField = currentColumn.field
          const changeValue = editingCell.value.row?.[columnField]

          if (isFunction(beforeCellValueChange)) {
            const allowChange = beforeCellValueChange({
              row: cloneDeep(currentRow),
              column: currentColumn,
              changeValue,
            })
            if (isBoolean(allowChange) && !allowChange) {
              // celar editing cell
              this.clearEditingCell()
              return false
            }
          }

          currentRow[currentColumn.field] = changeValue

          // 同 afterCellValueChange，未来被移除
          cellValueChange &&
            cellValueChange({
              row: currentRow,
              column: currentColumn,
              changeValue,
            })

          afterCellValueChange &&
            afterCellValueChange({
              row: currentRow,
              column: currentColumn,
              changeValue,
            })

          // celar editing cell
          this.clearEditingCell()
        }

        // reset status
        enableStopEditing.value = true
      }
    }

    // cell selection by click
    function cellSelectionByClick({ rowData, column }) {

      const rowKey = getRowKey(rowData, props.rowKeyFieldName)
      // set cell selection and column to visible
      setCellSelection({
        rowKey,
        colKey: column.key,
        isScrollToRow: false,
      })
      // row to visible
      rowToVisible(KEY_CODES.ARROW_UP, rowKey)
      rowToVisible(KEY_CODES.ARROW_DOWN, rowKey)
    }

    /*
         * @bodyCellContextmenu
         * @desc  recieve td right click\contextmenu event
         * @param {object} rowData - row data
         * @param {object} column - column data
         */
    function bodyCellContextmenu({ event, rowData, column }) {
      if (props.editOption) {
        const rowKey = getRowKey(rowData, props.rowKeyFieldName)
        editCellByClick({
          isDblclick: false,
          rowKey,
          colKey: column.key,
        })
      }

      setContextmenuOptions(column)
    }

    /*
         * @ 双击 body Cell
         * @desc  recieve td double click event
         * @param {object} rowData - row data
         * @param {object} column - column data
         */
    function bodyCellDoubleClick({ event, rowData, column }) {
      if (isOperationColumn(column.key, colgroups.value)) {
        // clear cell selection
        clearCellSelectionCurrentCell()
        clearCellSelectionNormalEndCell()

        // stop editing cell
        stopEditingCell()
        return false
      }

      if (props.editOption) {
        const rowKey = getRowKey(rowData, props.rowKeyFieldName)
        editCellByClick({
          isDblclick: true,
          rowKey,
          colKey: column.key,
        })
      }
    }

    /*
    * @bodyCellClick
    * @desc  recieve td click event
    * @param {object} rowData - row data
    * @param {object} column - column data
    */
    function bodyCellClick({ event, rowData, column }) {
      // feature...
    }

    /*
    * @bodyCellMousedown
    * @desc  recieve td mousedown event
    * @param {object} rowData - row data
    * @param {object} column - column data
    */
    function bodyCellMousedown({ event, rowData, column }) {
      if (!enableCellSelection.value) {
        return false
      }
      const { shiftKey } = event

      const rowKey = getRowKey(rowData, props.rowKeyFieldName)
      const colKey = column.key

      const { currentCell } = cellSelectionData.value

      const mouseEventClickType = getMouseEventClickType(event)

      if (isOperationColumn(colKey, colgroups.value)) {
        // clear header indicator colKeys
        clearHeaderIndicatorColKeys()

        isBodyOperationColumnMousedown.value = true

        const {
          startRowKey,
          endRowKey,
          startRowKeyIndex,
          endRowKeyIndex,
        } = bodyIndicatorRowKeys.value
        let newStartRowKey = startRowKey
        let newEndRowKey = endRowKey

        if (
          shiftKey &&
          (startRowKeyIndex > -1 || currentCell.rowIndex > -1)
        ) {
          newStartRowKey = isEmptyValue(currentCell.rowKey)
            ? startRowKey
            : currentCell.rowKey
          newEndRowKey = rowKey
        } else {
          const currentRowIndex = allRowKeys.value.indexOf(rowKey)

          // 左键点击 || 不在当前选择行内
          if (
            mouseEventClickType ===
            MOUSE_EVENT_CLICK_TYPE.LEFT_MOUSE ||
            currentRowIndex < startRowKeyIndex ||
            currentRowIndex > endRowKeyIndex
          ) {
            newStartRowKey = rowKey
            newEndRowKey = rowKey
          }
        }

        bodyIndicatorRowKeysChange({
          startRowKey: newStartRowKey,
          endRowKey: newEndRowKey,
        })
      } else {
        // body cell mousedown
        isBodyCellMousedown.value = true

        const isClearByRightClick = isClearSelectionByBodyCellRightClick({
          mouseEventClickType,
          cellData: {
            rowKey,
            colKey,
          },
          cellSelectionData,
          cellSelectionRangeData: cellSelectionRangeData.value,
          colgroups: colgroups.value,
          allRowKeys: allRowKeys.value,
        })

        if (isClearByRightClick) {
          // clear header indicator colKeys
          clearHeaderIndicatorColKeys()
          // clear body indicator colKeys
          clearBodyIndicatorRowKeys()

          if (shiftKey && currentCell.rowIndex > -1) {
            cellSelectionNormalEndCellChange({
              rowKey,
              colKey,
            })
          } else {
            // cell selection by click
            cellSelectionByClick({ rowData, column })
            clearCellSelectionNormalEndCell()
          }
        }
      }

      if (props.editOption) {
        editCellByClick({
          isDblclick: false,
          rowKey,
          colKey,
        })
      }
    }

    /*
    * @bodyCellMouseover
    * @desc  recieve td mouseover event
    * @param {object} rowData - row data
    * @param {object} column - column data
    */
    function bodyCellMouseover({ event, rowData, column }) {

      const rowKey = getRowKey(rowData, props.rowKeyFieldName)
      const colKey = column.key

      if (isBodyCellMousedown.value) {
        // 操作列不能单元格选中
        if (isOperationColumn(colKey, colgroups.value)) {
          return false
        }
        cellSelectionNormalEndCellChange({
          rowKey,
          colKey,
        })
      }

      if (isBodyOperationColumnMousedown.value) {
        bodyIndicatorRowKeysChange({
          startRowKey: bodyIndicatorRowKeys.value.startRowKey,
          endRowKey: rowKey,
        })
      }

      // 允许在body cell mouseover 里补充 header indicator 信息
      if (isHeaderCellMousedown.value) {
        headerIndicatorColKeysChange({
          startColKey: headerIndicatorColKeys.value.startColKey,
          endColKey: colKey,
        })
      }

      if (isAutofillStarting.value) {
        // 操作列不能autofilling 效果
        if (isOperationColumn(colKey, colgroups.value)) {
          return false
        }
        cellSelectionAutofillCellChange({
          rowKey,
          colKey,
        })
      }
    }

    /*
    * @bodyCellMousemove
    * @desc  recieve td mousemove event
    * @param {object} rowData - row data
    * @param {object} column - column data
    */
    function bodyCellMousemove({ event, rowData, column }) {
      hooks.value.triggerHook(HOOKS_NAME.BODY_CELL_MOUSEMOVE, {
        event,
        column,
      })
    }

    /*
    * @bodyCellMouseup
    * @desc  recieve td mouseup event
    * @param {object} rowData - row data
    * @param {object} column - column data
    */
    function bodyCellMouseup({ event, rowData, column }) {
      // feature...
    }

    // header cell click
    function headerCellClick({ event, column }) {
      // feature...
    }

    // header cell contextmenu
    function headerCellContextmenu({ event, column }) {
      setContextmenuOptions(column)
    }

    // set contextmenu options
    function setContextmenuOptions(column) {
      // header contextmenu
      if (contextMenuType.value === CONTEXTMENU_TYPES.HEADER_CONTEXTMENU) {
        // set header contextmenu options before contextmen show
        contextmenuOptions.value = setHeaderContextmenuOptions({
          column,
          contextmenuHeaderOption: props.contextmenuHeaderOption,
          cellSelectionRangeData: cellSelectionRangeData.value,
          colgroups: colgroups.value,
          allRowKeys: allRowKeys.value,
          headerIndicatorColKeys: headerIndicatorColKeys.value,
          enableHeaderContextmenu: enableHeaderContextmenu.value,
          $t,
        })
      } else { // body contextmenu
        // set body contextmenu options before contextmen show
        contextmenuOptions.value = setBodyContextmenuOptions({
          enableBodyContextmenu: enableBodyContextmenu.value,
          contextmenuBodyOption: props.contextmenuBodyOption,
          cellSelectionRangeData: cellSelectionRangeData.value,
          colgroups: colgroups.value,
          allRowKeys: allRowKeys.value,
          bodyIndicatorRowKeys: bodyIndicatorRowKeys.value,
          $t,
        })
      }
    }

    // header cell mousedown
    function headerCellMousedown({ event, column }) {
      if (!enableCellSelection.value) {
        return false
      }

      isHeaderCellMousedown.value = true

      const { shiftKey } = event
      // clear body indicator colKeys
      clearBodyIndicatorRowKeys()

      let colKeys
      if (isGroupHeader.value) {
        colKeys = getColKeysByHeaderColumn({
          headerColumnItem: column,
        })
      } else {
        colKeys = [column.key]
      }

      const currentCellStartColKey = colKeys[0]
      const currentCellEndColKey = colKeys[colKeys.length - 1]

      const { currentCell } = cellSelectionData.value

      if (isOperationColumn(column.key, colgroups.value)) {
        // clear cell selection
        clearCellSelectionCurrentCell()
        clearCellSelectionNormalEndCell()
        nextTick(() => {
          // select all cell
          setAllCellSelection()
        })
        return false
      }

      // 需要先将之前选中单元格元素清空
      if (isEmptyValue(headerIndicatorColKeys.value.startColKey)) {
        // 值的比较（currentCell.colKey 会变化）
        if (
          JSON.stringify(colKeys) !==
          JSON.stringify([currentCell.colKey])
        ) {
          cellSelectionRef.value.clearCurrentCellRect()
        }
        cellSelectionRef.value.clearNormalEndCellRect()
      }

      const { startColKey, endColKey, startColKeyIndex, endColKeyIndex } = headerIndicatorColKeys.value

      let newStartColKey = startColKey
      let newEndColKey = endColKey
      if (shiftKey) {
        if (isEmptyValue(startColKey)) {
          if (!isEmptyValue(currentCell.colKey)) {
            const leftColKey = getLeftmostColKey({
              colgroups: colgroups.value,
              colKeys: colKeys.concat([currentCell.colKey]),
            })

            newStartColKey = currentCell.colKey
            if (leftColKey === currentCell.colKey) {
              newEndColKey = currentCellEndColKey
            } else {
              newEndColKey = currentCellStartColKey
            }
          } else {
            newStartColKey = currentCellStartColKey
            newEndColKey = currentCellEndColKey
          }
        } else {
          newStartColKey = startColKey
          const leftColKey = getLeftmostColKey({
            colgroups: colgroups.value,
            colKeys: colKeys.concat([startColKey]),
          })

          if (leftColKey === startColKey) {
            newEndColKey = currentCellEndColKey
          } else {
            newEndColKey = currentCellStartColKey
          }
        }
      } else {
        const mouseEventClickType = getMouseEventClickType(event)
        const currentCellStartColIndex = colgroups.value.findIndex(
          (x) => x.key === currentCellEndColKey,
        )
        const currentCellEndColIndex = colgroups.value.findIndex(
          (x) => x.key === currentCellStartColKey,
        )
        // 左键点击 || 不在当前选择列内
        if (
          mouseEventClickType === MOUSE_EVENT_CLICK_TYPE.LEFT_MOUSE ||
          currentCellStartColIndex < startColKeyIndex ||
          currentCellEndColIndex < startColKeyIndex ||
          currentCellStartColIndex > endColKeyIndex ||
          currentCellEndColIndex > endColKeyIndex
        ) {
          newStartColKey = currentCellStartColKey
          newEndColKey = currentCellEndColKey
        }
      }

      headerIndicatorColKeysChange({
        startColKey: newStartColKey,
        endColKey: newEndColKey,
      })
    }

    // header cell mouseover
    function headerCellMouseover({ event, column }) {

      if (
        isHeaderCellMousedown.value &&
        !isOperationColumn(column.key, colgroups.value)
      ) {
        let colKeys
        if (isGroupHeader.value) {
          colKeys = getColKeysByHeaderColumn({
            headerColumnItem: column,
          })
        } else {
          colKeys = [column.key]
        }

        const leftColKey = getLeftmostColKey({
          colgroups: colgroups.value,
          colKeys: colKeys.concat([
            headerIndicatorColKeys.value.startColKey,
          ]),
        })

        let endColKey
        if (leftColKey === headerIndicatorColKeys.value.startColKey) {
          endColKey = colKeys[colKeys.length - 1]
        } else {
          endColKey = colKeys[0]
        }
        headerIndicatorColKeysChange({
          startColKey: headerIndicatorColKeys.value.startColKey,
          endColKey,
        })
      }
    }

    // header cell mousemove
    function headerCellMousemove({ event, column }) {
      hooks.value.triggerHook(HOOKS_NAME.HEADER_CELL_MOUSEMOVE, {
        event,
        column,
      })
    }

    // header cell mouseleave
    function headerCellMouseleave({ event, column }) {
      // todo
    }

    // header mouseleave
    function headerMouseleave(event) {
      setIsColumnResizerHover(false)
    }

    // table container mouseup
    function tableContainerMouseup() {
      isHeaderCellMousedown.value = false
      isBodyCellMousedown.value = false
      isBodyOperationColumnMousedown.value = false
      isAutofillStarting.value = false
    }

    /*
         * @cellSelectionCornerMousedown
         * @desc  recieve cell selection corner mousedown
         */
    function cellSelectionCornerMousedown({ event }) {
      isAutofillStarting.value = true
    }

    
    // is edit column
    function isEditColumn(colKey) {
      return colgroups.value.some((x) => x.key === colKey && x.edit)
    }

    /*
     * @editCellByClick
     * @desc  recieve td click event
     * @param {boolean} isDblclick - is dblclick
     */
    function editCellByClick({ isDblclick, rowKey, colKey }) {
      if (!props.editOption) return false

      // has edit column
      if (!hasEditColumn.value) return false

      if (isEmptyValue(rowKey) || isEmptyValue(colKey)) return false

      if (editingCell.value && editingCell.value.rowKey === rowKey && editingCell.value.colKey === colKey) return false

      if (isCellEditing.value) {
        stopEditingCell()
      }

      if (isDblclick && isEditColumn(colKey)) {
        enableStopEditing.value = false

        startEditingCell({ rowKey, colKey })
      } else {
        enableStopEditing.value = true
      }
    }

    /**
     * @setEditingCell
     * @desc  add editing cells
     * @param {object} rowKey - row key
     * @param {object} colKey - col key
     * @param {object} column - column
     * @param {object} row - row data
     */
    function setEditingCell({ rowKey, colKey, column, row }) {
      editingCell.value = {
        rowKey,
        row: cloneDeep(row),
        colKey,
        column,
      }
    }

    // update editing cell value
    function updateEditingCellValue(value) {
      const columnField = editingCell.value.column?.field
      editingCell.value.row[columnField] = value
    }

    /**
     * @clearEditingCell
     * @desc clear editing cell
     */
    function clearEditingCell() {
      editingCell.value = {
        rowKey: '',
        colKey: '',
        row: null,
        column: null,
      }
    }

    // contextmenu item click
    function contextmenuItemClick(type) {
      // header contextmenu
      if (contextMenuType.value === CONTEXTMENU_TYPES.HEADER_CONTEXTMENU) {
        headerContextmenuItemClick(type)
      } else { // body contextmenu
        bodyContextmenuItemClick(type)
      }
    }

    // header contextmenu item click
    function headerContextmenuItemClick(type) {
      const { rowKey, colKey } = cellSelectionData.value.currentCell
      const { afterMenuClick } = props.contextmenuHeaderOption

      if (!isEmptyValue(rowKey) && !isEmptyValue(colKey)) {
        const selectionRangeKeys = getSelectionRangeKeys({
          cellSelectionRangeData: cellSelectionRangeData.value,
        })

        const selectionRangeIndexes = getSelectionRangeIndexes({
          cellSelectionRangeData: cellSelectionRangeData.value,
          colgroups: colgroups.value,
          allRowKeys: allRowKeys.value,
        })

        if (isFunction(afterMenuClick)) {
          const callback = afterMenuClick({
            type,
            selectionRangeKeys,
            selectionRangeIndexes,
          })
          if (isBoolean(callback) && !callback) {
            return false
          }
        }
        const editInputEditor = editInputRef.value

        // cut
        if (CONTEXTMENU_NODE_TYPES.CUT === type) {
          editInputEditor.textareaSelect()
          document.execCommand('cut')
        } else if (CONTEXTMENU_NODE_TYPES.COPY === type) {
          editInputEditor.textareaSelect()
          document.execCommand('copy')
        } else if (CONTEXTMENU_NODE_TYPES.EMPTY_COLUMN === type) { // empty column
          deleteCellSelectionRangeValue()
        } else if (CONTEXTMENU_NODE_TYPES.LEFT_FIXED_COLUMN_TO === type) { // left fixed column to
          cloneColumns.value = setColumnFixed({
            cloneColumns: cloneColumns.value,
            cellSelectionRangeData: cellSelectionRangeData.value,
            fixedType: COLUMN_FIXED_TYPE.LEFT,
            colgroups: colgroups.value,
            enableColumnResize: enableColumnResize.value,
          })
        } else if ( // cancel left fixed column to
          CONTEXTMENU_NODE_TYPES.CANCEL_LEFT_FIXED_COLUMN_TO === type
        ) {
          cloneColumns.value = cancelColumnFixed({
            cloneColumns: cloneColumns.value,
            colgroups: colgroups.value,
            fixedType: COLUMN_FIXED_TYPE.LEFT,
            enableColumnResize: enableColumnResize.value,
          })
        } else if ( // right fixed column to
          CONTEXTMENU_NODE_TYPES.RIGHT_FIXED_COLUMN_TO === type
        ) {
          cloneColumns.value = setColumnFixed({
            cloneColumns: cloneColumns.value,
            cellSelectionRangeData: cellSelectionRangeData.value,
            fixedType: COLUMN_FIXED_TYPE.RIGHT,
            colgroups: colgroups.value,
            enableColumnResize: enableColumnResize.value,
          })
        } else if ( // cancel right fixed column to
          CONTEXTMENU_NODE_TYPES.CANCEL_RIGHT_FIXED_COLUMN_TO === type
        ) {
          cloneColumns.value = cancelColumnFixed({
            cloneColumns: cloneColumns.value,
            colgroups: colgroups.value,
            fixedType: COLUMN_FIXED_TYPE.RIGHT,
            enableColumnResize: enableColumnResize.value,
          })
        }
      }
    }

    // body contextmenu item click
    function bodyContextmenuItemClick(type) {
      const { rowKey, colKey } = cellSelectionData.value.currentCell
      const { afterMenuClick } = props.contextmenuBodyOption

      if (!isEmptyValue(rowKey) && !isEmptyValue(colKey)) {
        const selectionRangeKeys = getSelectionRangeKeys({
          cellSelectionRangeData: cellSelectionRangeData.value,
        })

        const selectionRangeIndexes = getSelectionRangeIndexes({
          cellSelectionRangeData: cellSelectionRangeData.value,
          colgroups: colgroups.value,
          allRowKeys: allRowKeys.value,
        })

        if (isFunction(afterMenuClick)) {
          const callback = afterMenuClick({
            type,
            selectionRangeKeys,
            selectionRangeIndexes,
          })
          if (isBoolean(callback) && !callback) {
            return false
          }
        }

        const { startRowIndex, endRowIndex } = selectionRangeIndexes

        const currentRowIndex = allRowKeys.value.findIndex(
          (x) => x === rowKey,
        )

        const editInputEditor = editInputRef.value

        // cut
        if (CONTEXTMENU_NODE_TYPES.CUT === type) {
          editInputEditor.textareaSelect()
          document.execCommand('cut')
        } else if (CONTEXTMENU_NODE_TYPES.COPY === type) { // copy
          editInputEditor.textareaSelect()
          document.execCommand('copy')
        } else if (CONTEXTMENU_NODE_TYPES.REMOVE_ROW === type) {
          // paste todo
          // else if (CONTEXTMENU_NODE_TYPES.PASTE === type) {
          //     editInputEditor.textareaSelect();
          //     document.execCommand("paste", null, null);
          // }
          // remove rows
          props.tableData.splice(
            startRowIndex,
            endRowIndex - startRowIndex + 1,
          )
        } else if (CONTEXTMENU_NODE_TYPES.EMPTY_ROW === type) { // empty rows
          deleteCellSelectionRangeValue()
        } else if (CONTEXTMENU_NODE_TYPES.EMPTY_CELL === type) { // empty rows
          deleteCellSelectionRangeValue()
        } else if (CONTEXTMENU_NODE_TYPES.INSERT_ROW_ABOVE === type) { // insert row above
          props.tableData.splice(
            currentRowIndex,
            0,
            createEmptyRowData({ colgroups: colgroups.value, props.rowKeyFieldName }),
          )
        } else if (CONTEXTMENU_NODE_TYPES.INSERT_ROW_BELOW === type) { // insert row below
          props.tableData.splice(
            currentRowIndex + 1,
            0,
            createEmptyRowData({ colgroups: colgroups.value, props.rowKeyFieldName }),
          )
        }
      }
    }

    // editor copy
    function editorCopy(event) {
      if (!enableClipboard.value) {
        return false
      }

      // 正在编辑的单元格不进行自定义复制功能
      if (isCellEditing.value) {
        return false
      }

      const {
        copy,
        beforeCopy: beforeCopyCallback,
        afterCopy: afterCopyCallback,
      } = props.clipboardOption || {}

      if (isBoolean(copy) && !copy) {
        return false
      }

      event.preventDefault()

      const selectionRangeData = getSelectionRangeData({
        cellSelectionRangeData: cellSelectionRangeData.value,
        resultType: 'flat',
        tableData: props.tableData,
        colgroups: colgroups.value,
        allRowKeys: allRowKeys.value,
      })

      const response = onBeforeCopy({
        cellSelectionRangeData: cellSelectionRangeData.value,
        selectionRangeData,
        colgroups: colgroups.value,
        allRowKeys: allRowKeys.value,
      })

      if (isFunction(beforeCopyCallback)) {
        const allowCoping = beforeCopyCallback(response)
        if (isBoolean(allowCoping) && !allowCoping) {
          return false
        }
      }

      onAfterCopy({ event, selectionRangeData })

      if (isFunction(afterCopyCallback)) {
        afterCopyCallback(response)
      }
    }

    // editor paste
    function editorPaste(event) {
      if (!enableClipboard.value) {
        return false
      }

      // 正在编辑的单元格不进行自定义粘贴功能
      if (isCellEditing.value) {
        return false
      }

      const {
        paste,
        beforePaste: beforePasteCallback,
        afterPaste: afterPasteCallback,
      } = props.clipboardOption || {}

      if (isBoolean(paste) && !paste) {
        return false
      }

      event.preventDefault()

      const response = onBeforePaste({
        event,
        cellSelectionRangeData: cellSelectionRangeData.value,
        colgroups: colgroups.value,
        allRowKeys: allRowKeys.value,
        rowKeyFieldName: props.rowKeyFieldName,
      })

      if (
        response &&
        Array.isArray(response.data) &&
        response.data.length
      ) {
        if (isFunction(beforePasteCallback)) {
          const allowPasting = beforePasteCallback(response)
          if (isBoolean(allowPasting) && !allowPasting) {
            return false
          }
        }
        // change table cell data
        onAfterPaste({
          tableData: props.tableData,
          beforePasteResponse: response,
        })

        if (isFunction(afterPasteCallback)) {
          afterPasteCallback(response)
        }

        const { startColKey, endColKey, startRowKey, endRowKey } =
          response.selectionRangeKeys

        cellSelectionCurrentCellChange({
          rowKey: startRowKey,
          colKey: startColKey,
        })

        cellSelectionNormalEndCellChange({
          rowKey: endRowKey,
          colKey: endColKey,
        })

        // clipboard cell value change
        hooks.value.triggerHook(HOOKS_NAME.CLIPBOARD_CELL_VALUE_CHANGE)
      }
    }

    // editor cut
    function editorCut(event) {
      if (!enableClipboard.value) {
        return false
      }

      // 正在编辑的单元格不进行自定义剪切功能
      if (isCellEditing.value) {
        return false
      }

      const {
        cut,
        beforeCut: beforeCutCallback,
        afterCut: afterCutCallback,
      } = props.clipboardOption || {}

      if (isBoolean(cut) && !cut) {
        return false
      }

      event.preventDefault()

      const selectionRangeData = getSelectionRangeData({
        cellSelectionRangeData: cellSelectionRangeData.value,
        resultType: 'flat',
        tableData: props.tableData,
        colgroups: colgroups.value,
        allRowKeys: allRowKeys.value,
      })

      const response = onBeforeCut({
        cellSelectionRangeData: cellSelectionRangeData.value,
        selectionRangeData,
        colgroups: colgroups.value,
        allRowKeys: allRowKeys.value,
      })

      if (isFunction(beforeCutCallback)) {
        const allowCutting = beforeCutCallback(response)
        if (isBoolean(allowCutting) && !allowCutting) {
          return false
        }
      }

      onAfterCut({
        event,
        tableData: props.tableData,
        colgroups: colgroups.value,
        selectionRangeData,
        selectionRangeIndexes: response.selectionRangeIndexes,
      })

      if (isFunction(afterCutCallback)) {
        afterCutCallback(response)
      }
    }

    // delete selection cell value
    function deleteCellSelectionRangeValue() {
      if (!enableClipboard.value) {
        return false
      }

      // 正在编辑的单元格不进行删除区域单元格功能
      if (isCellEditing.value) {
        return false
      }

      const {
        // delete is key word
        delete: delete2,
        beforeDelete: beforeDeleteCallback,
        afterDelete: afterDeleteCallback,
      } = props.clipboardOption || {}

      if (isBoolean(delete2) && !delete2) {
        return false
      }

      const selectionRangeData = getSelectionRangeData({
        cellSelectionRangeData: cellSelectionRangeData.value,
        resultType: 'flat',
        tableData: props.tableData,
        colgroups: colgroups.value,
        allRowKeys: allRowKeys.value,
      })

      const response = onBeforeDelete({
        cellSelectionRangeData: cellSelectionRangeData.value,
        selectionRangeData,
        colgroups: colgroups.value,
        allRowKeys: allRowKeys.value,
      })

      if (isFunction(beforeDeleteCallback)) {
        const allowDeleting = beforeDeleteCallback(response)
        if (isBoolean(allowDeleting) && !allowDeleting) {
          return false
        }
      }

      onAfterDelete({
        tableData: props.tableData,
        colgroups: colgroups.value,
        selectionRangeIndexes: response.selectionRangeIndexes,
      })

      if (isFunction(afterDeleteCallback)) {
        afterDeleteCallback(response)
      }
    }

    // set range cell selection by header indicator
    function setRangeCellSelectionByHeaderIndicator() {
      const { startColKey, endColKey } = headerIndicatorColKeys.value

      if (isEmptyValue(startColKey) || isEmptyValue(endColKey)) {
        return false
      }

      cellSelectionCurrentCellChange({
        rowKey: allRowKeys.value[0],
        colKey: startColKey,
      })

      cellSelectionNormalEndCellChange({
        // rowKey: allRowKeys.value[allRowKeys.value.length - 1],
        rowKey: allRowKeys.value.at(-1),
        colKey: endColKey,
      })
    }

    // set range cell selection by body indicator
    function setRangeCellSelectionByBodyIndicator() {
      const { startRowKey, endRowKey } = bodyIndicatorRowKeys.value

      if (isEmptyValue(startRowKey) || isEmptyValue(endRowKey)) {
        return false
      }

      if (colgroups.value.length > 1) {
        cellSelectionCurrentCellChange({
          rowKey: startRowKey,
          colKey: colgroups.value[1].key,
        })

        cellSelectionNormalEndCellChange({
          rowKey: endRowKey,
          colKey: colgroups.value[colgroups.value.length - 1].key,
        })
      }
    }

    // set isColumnResizerHover
    function setIsColumnResizerHover(val) {
      isColumnResizerHover.value = val
    }

    // set isColumnResizing
    function setIsColumnResizing(val) {
      isColumnResizing.value = val
    }

    // set cell selection and column to visible
    function setCellSelection(receive) {
      let {
        rowKey,
        colKey,
        isScrollToRow
      } = receive
      if (isScrollToRow === undefined) {
        isScrollToRow = true
      }

      if (!enableCellSelection.value) {
        return false
      }
      if (!isEmptyValue(rowKey) && !isEmptyValue(colKey)) {
        cellSelectionCurrentCellChange({
          rowKey,
          colKey,
        })

        const column = getColumnByColkey(colKey, colgroups.value)
        // column to visible
        columnToVisible(column)
        // row to visible
        if (isScrollToRow) {
          scrollToRowKey({ rowKey })
        }
      }
    }

    /*  set range cell selection and column to visible   */
    function setRangeCellSelection(receive) {
      let {
        startRowKey,
        startColKey,
        endRowKey,
        endColKey,
        isScrollToStartCell
      } = receive
      // 原
      // if (isScrollToRow === undefined) {
      //   isScrollToStartCell = false
      // }
      // 现
      isScrollToStartCell = false
      if (!enableCellSelection.value) {
        return false
      }

      if (
        isEmptyValue(startRowKey) ||
        isEmptyValue(startColKey) ||
        isEmptyValue(endRowKey) ||
        isEmptyValue(endColKey)
      ) {
        return false
      }

      cellSelectionCurrentCellChange({
        rowKey: startRowKey,
        colKey: startColKey,
      })

      cellSelectionNormalEndCellChange({
        rowKey: endRowKey,
        colKey: endColKey,
      })

      // row to visible
      if (isScrollToStartCell) {
        const column = getColumnByColkey(startColKey, colgroups.value)
        // column to visible
        columnToVisible(column)
        scrollToRowKey({
          rowKey: startRowKey,
        })
      }
    }

    /* get range cell selection  */
    function getRangeCellSelection() {
      const {
        cellSelectionData,
      } = this

      const { rowKey, colKey } = cellSelectionData.value.currentCell

      if (!isEmptyValue(rowKey) && !isEmptyValue(colKey)) {
        const selectionRangeKeys = getSelectionRangeKeys({
          cellSelectionRangeData: cellSelectionRangeData.value,
        })

        const selectionRangeIndexes = getSelectionRangeIndexes({
          cellSelectionRangeData: cellSelectionRangeData.value,
          colgroups: colgroups.value,
          allRowKeys: allRowKeys.value,
        })

        return {
          selectionRangeKeys,
          selectionRangeIndexes,
        }
      }
    }

    // set all cell selection and column to visible
    function setAllCellSelection() {
      if (!enableCellSelection.value) {
        return false
      }

      if (colgroups.value.length) {
        const colKeys = colgroups.value
          .filter((x) => !x.operationColumn)
          .map((x) => x.key)

        if (colKeys.length) {
          headerIndicatorColKeysChange({
            startColKey: colKeys[0],
            endColKey: colKeys[colKeys.length - 1],
          })
        }
      }

      if (allRowKeys.value.length) {
        bodyIndicatorRowKeysChange({
          startRowKey: allRowKeys.value[0],
          // endRowKey: allRowKeys.value[allRowKeys.value.length - 1],
          endRowKey: allRowKeys.value.at(-1),
        })
      }
    }

    function hideColumnsByKeys(keys) {
      if (!isEmptyArray(keys)) {
        // 将要隐藏的列添加到 hiddenColumns 中
        // Add the columns you want to hide to hidden columns
        hiddenColumns.value = Array.from(
          new Set(hiddenColumns.value.concat(keys)),
        )

        showOrHideColumns()
      }
    }

    function showColumnsByKeys(keys) {
      if (!isEmptyArray(keys)) {
        // 将要显示的列从 hiddenColumns 中移除
        // Remove the columns to show from hidden columns
        for (let i = keys.length - 1; i >= 0; i--) {
          const delIndex = hiddenColumns.value.indexOf(keys[i])
          if (delIndex > -1) {
            hiddenColumns.value.splice(delIndex, 1)
          }
        }

        showOrHideColumns()
      }
    }
    // table scroll to rowKey position
    function scrollToRowKey({ rowKey }) {
      if (isEmptyValue(rowKey)) {
        console.warn("Row key can't be empty!")
        return false
      }

      let scrollTop = 0
      if (isVirtualScroll.value) {
        const position = virtualScrollPositions.value.find(
          (x) => x.rowKey === rowKey,
        )

        if (position) {
          scrollTop = position.top
        }

        // fix bug #470
        setTimeout(() => {
          scrollTo(tableContainerRef.value, {
            top: scrollTop,
            behavior: 'auto',
          })
        }, 200)
      } else {
        const rowEl = tableRootRef.value.$el.querySelector(
          `tbody tr[${COMPS_CUSTOM_ATTRS.BODY_ROW_KEY}="${rowKey}"]`,
        )

        scrollTop = rowEl.offsetTop - headerTotalHeight.value
      }

      scrollTo(tableContainerRef.value, {
        top: scrollTop,
        behavior: isVirtualScroll.value ? 'auto' : 'smooth',
      })
    }
    // scroll to col key position
    function scrollToColKey({ colKey }) {
      const column = getColumnByColkey(colKey, colgroups.value)
      if (column) {
        columnToVisible(column)
      }
    }
    // start editing cell
    function startEditingCell({
      rowKey,
      colKey,
      defaultValue,
    }) {
      if (!props.editOption) {
        return false
      }

      let currentRow = props.tableData.find(
        (x) => x[props.rowKeyFieldName] === rowKey,
      )

      currentRow = cloneDeep(currentRow)

      /*
        调用API编辑的情况，需要关闭之前编辑的单元格
      */
      if (
        editingCell.value.rowKey === rowKey &&
        editingCell.value.colKey === colKey
      ) {
        return false
      }

      const currentColumn = colgroups.value.find((x) => x.key === colKey)
      // 当前列是否可编辑
      if (!currentColumn.edit) {
        return false
      }

      const { beforeStartCellEditing } = props.editOption

      if (isFunction(beforeStartCellEditing)) {
        const allowContinue = beforeStartCellEditing({
          row: cloneDeep(currentRow),
          column: currentColumn,
          cellValue: isDefined(defaultValue)
            ? defaultValue
            : currentRow[currentColumn.field],
        })
        if (isBoolean(allowContinue) && !allowContinue) {
          return false
        }
      }

      // 给当前列赋默认值
      if (isDefined(defaultValue)) {
        editorInputStartValue.value = defaultValue
        // doesn't change cell original value
        currentRow[currentColumn.field] = defaultValue
      } else {
        editorInputStartValue.value = currentRow[currentColumn.field]
      }

      if (
        cellSelectionData.value.currentCell.colKey !== colKey ||
        cellSelectionData.value.currentCell.rowKey !== rowKey
      ) {
        cellSelectionCurrentCellChange({ rowKey, colKey, })
      }

      // set editing cell
      setEditingCell({
        rowKey,
        colKey,
        column: currentColumn,
        row: cloneDeep(currentRow),
      })
    }
    // stop editing cell
    function stopEditingCell() {
      if (!props.editOption) {
        return false
      }
      // 编辑单元格每次开始编辑前的初始值
      // clear editor input start value
      editorInputStartValue.value = ''
      if (isCellEditing.value) {
        saveCellWhenStopEditing()
      }
    }
    // set highlight row
    function setHighlightRow({ rowKey }) {
      highlightRowKey.value = rowKey
    }

    onUnmounted(() => {
      // remove key down event listener
      document.removeEventListener('keydown', dealKeydownEvent)
    })

    // watch start
    // watch clone table data
    watch(() => props.tableData, (newVal, oldVal) => {
      initVirtualScrollPositions()
      // 第一次不需要触发，仅数据变更触发
      if (oldVal) {
        initVirtualScroll()
      }
    }, {
      deep: true,
      immediate: true,
    })

    // return row keys
    watch(allRowKeys, (newVal) => {
      if (Array.isArray(newVal)) {
        const { currentCell } = cellSelectionData.value
        // 行被移除，清空单元格选中
        if (currentCell.rowIndex > -1) {
          if (newVal.indexOf(currentCell.rowKey) === -1) {
            clearCellSelectionCurrentCell()
          }
        }
      }
    }, { immediate: false, })

    watch(() => props.columns, (newVal, oldVal) => {
      initColumns()
      initTableGroupColumns()
      initColumnWidthByColumnResize()

      // 排除首次
      if (newVal !== oldVal && oldVal) {
        columnsOptionResetTime.value += 1
        // 需要等待 initColumns 和 initGroupColumns 先执行
        initScrolling()
      }
    }, { immediate: true })

    watch(cloneColumns, () => {
      initTableGroupColumns()
      // 右键（取消）固定列会操作 cloneColumns
      initColumnWidthByColumnResize()

      columnsOptionResetTime.value += 1
      // 需要等待 initColumns 和 initGroupColumns 先执行
      initScrolling()
    }, { immediate: false, })
    // group columns change watch
    watch(groupColumns, (newVal) => {
      if (!isEmptyArray(newVal)) {
        initHeaderRows()
      }
    }, { immediate: true, })

    // footer data
    watch(()=>props.footerData, (val) => {
      if (!isEmptyArray(val)) {
        initFooterRows()
      }
    }, { immediate: true, })

    //  watch virtualScrollOption enable
    //  允许按需开启虚拟滚动
    watch(() => props.virtualScrollOption.enable, (newVal) => {
      // enable virtual scroll
      if (newVal) {
        initVirtualScrollPositions()
        initVirtualScroll()
      } else { // disable virtual scroll
        // clear table content top value
        setTableContentTopValue({ top: 0 })
      }
    }, { immediate: false, })

    // is auto fill starting
    watch(isAutofillStarting, (val) => {
      if (!val) {
        setCellSelectionByAutofill()
        clearCellSelectionAutofillEndCell()
      }
    })
    // watch current cell
    watch(() => cellSelectionData.value.currentCell, () => {
      setCurrentCellSelectionType()
    }, {
      deep: true,
      immediate: true,
    })
    // watch normal end cell
    watch(() => cellSelectionData.value.normalEndCell, () => {
      setCurrentCellSelectionType()
    }, {
      deep: true,
      immediate: true,
    })
    // watch header indicator colKeys
    watch(headerIndicatorColKeys, () => {
      setRangeCellSelectionByHeaderIndicator()
    }, { deep: true, })
    // watch body indicator rowKeys
    watch(bodyIndicatorRowKeys, () => {
      setRangeCellSelectionByBodyIndicator()
    }, { deep: true, })

    // watch end

    // expose start 
    expose({
      setRangeCellSelection,
      getRangeCellSelection,
      hideColumnsByKeys,
      showColumnsByKeys,
      scrollToRowKey,
      scrollToColKey
    })


    // header props
    const headerProps = {
      class: clsName('header'),
      style: {
        cursor:
          isColumnResizerHover.value || isColumnResizing.value
            ? 'col-resize'
            : '',
      },
      columnsOptionResetTime: columnsOptionResetTime.value,
      tableViewportWidth,
      groupColumns,
      colgroups: colgroups.value,
      isGroupHeader: isGroupHeader.value,
      fixedHeader: props.fixedHeader,
      checkboxOption: props.checkboxOption,
      sortOption: props.sortOption,
      cellStyleOption: props.cellStyleOption,
      eventCustomOption: props.eventCustomOption,
      headerRows: headerRows.value,
      cellSelectionData: cellSelectionData.value,
      cellSelectionRangeData: cellSelectionRangeData.value,
      headerIndicatorColKeys: headerIndicatorColKeys.value,
      onClick: () => {
        stopEditingCell()
      },
      onMouseleave: (event) => {
        headerMouseleave(event)
      },
    }
    // const widthChange = EMIT_EVENTS.BODY_CELL_WIDTH_CHANGE
    const widthChange = 'onBodyCellWidthChange'
    // const heightRowChange = EMIT_EVENTS.HIGHLIGHT_ROW_CHANGE
    const heightRowChange = 'onHighlightRowChange'
    // body props
    const bodyProps = {
      class: [clsName('body'), tableBodyClass.value],
      tableViewportWidth,
      columnsOptionResetTime: columnsOptionResetTime.value,
      colgroups: colgroups.value,
      expandOption: props.expandOption,
      checkboxOption: props.checkboxOption,
      actualRenderTableData,
      rowKeyFieldName: props.rowKeyFieldName,
      radioOption: props.radioOption,
      virtualScrollOption: props.virtualScrollOption,
      isVirtualScroll: isVirtualScroll.value,
      cellStyleOption: props.cellStyleOption,
      cellSpanOption: props.cellSpanOption,
      eventCustomOption: props.eventCustomOption,
      cellSelectionOption: props.cellSelectionOption,
      hasFixedColumn: hasFixedColumn.value,
      cellSelectionData: cellSelectionData.value,
      cellSelectionRangeData: cellSelectionRangeData.value,
      allRowKeys: allRowKeys.value,
      editOption: props.editOption,
      highlightRowKey: highlightRowKey.value,
      showVirtualScrollingPlaceholder: showVirtualScrollingPlaceholder.value,
      bodyIndicatorRowKeys: bodyIndicatorRowKeys.value,
      [widthChange]: debounce(this.bodyCellWidthChange, 0,),
      [heightRowChange]: this.setHighlightRow,
    }

    // footer props
    const footerProps = {
      class: [clsName('footer')],
      colgroups: colgroups.value,
      footerData: props.footerData,
      rowKeyFieldName: props.rowKeyFieldName,
      cellStyleOption: props.cellStyleOption,
      fixedFooter: props.fixedFooter,
      cellSpanOption: props.cellSpanOption,
      eventCustomOption: props.eventCustomOption,
      hasFixedColumn: hasFixedColumn.value,
      allRowKeys: allRowKeys.value,
      footerRows: footerRows.value,
      click: () => {
        stopEditingCell()
      },
    }

    // table root props
    const tableRootProps = {
      class: {
        'vue-table-root': true,
      },
    }

    // table container wrapper props
    const tableContainerWrapperProps = {
      style: {
        width: '100%',
      },
      class: {
        'fan-table': true,
        [clsName('border-around')]: this.borderAround,
      },
      tagName: 'div',
      onDomResizeChange: ({ height }) => {
        tableOffestHeight.value = height
        initVirtualScroll()
        // fixed #404
        initScrolling()
        setScrollBarStatus()
        hooks.value.triggerHook(HOOKS_NAME.TABLE_SIZE_CHANGE)
      },
      // 'v-click-outside': (e) => {
      //   this.tableClickOutside(e)
      // },
      // directives: [
      //   {
      //     name: 'click-outside',
      //     value: (e) => {
      //       this.tableClickOutside(e)
      //     },
      //   },
      // ],
    }

    // table container props
    const tableContainerProps = {
      class: tableContainerClass.value,
      style: tableContainerStyle.value,
      onScroll: () => {
        hooks.value.triggerHook(
          HOOKS_NAME.TABLE_CONTAINER_SCROLL,
          tableContainerRef.value,
        )
        setScrolling(tableContainerRef.value)

        if (isVirtualScroll.value) {
          tableContainerVirtualScrollHandler(tableContainerRef.value)
          const startIndex = virtualScrollStartIndex.value
          const previewStartIndex = previewVirtualScrollStartIndex.value

          const differ = Math.abs(startIndex - previewStartIndex)

          previewVirtualScrollStartIndex.value = startIndex

          // default placeholder per scrolling row count
          if (differ > defaultPlaceholderPerScrollingRowCount.value) {
            showVirtualScrollingPlaceholder.value = true
          } else {
            showVirtualScrollingPlaceholder.value = false
          }

          debounceScrollEnded()
        }
      },
      onMouseup: () => {
        // 事件的先后顺序 containerMouseup > bodyCellMousedown > bodyCellMouseup > bodyCellClick
        tableContainerMouseup()
      },
      onMousemove: () => {
        // todo
      },
    }

    // table wrapper props
    const tableWrapperProps = {
      class: [clsName('content-wrapper')],
      tagName: 'div',
      onDomResizeChange: ({ height }) => {
        tableHeight.value = height
      },
    }

    // tale props
    const tableProps = {
      class: [clsName('content'), tableClass.value],
      style: tableStyle.value,
    }
    // const cellSelectionRangeChange = EMIT_EVENTS.CELL_SELECTION_RANGE_DATA_CHANGE
    const cellSelectionRangeChange = 'onCellSelectionRangeDataChange'
    // selection props
    const selectionProps = {
      tableEl: tableRef.value,
      allRowKeys: allRowKeys.value,
      colgroups: colgroups.value,
      parentRendered: parentRendered.value,
      hooks: hooks.value,
      cellSelectionData: cellSelectionData.value,
      isAutofillStarting: isAutofillStarting.value,
      cellSelectionRangeData: cellSelectionRangeData.value,
      currentCellSelectionType: currentCellSelectionType.value,
      showVirtualScrollingPlaceholder,
      isVirtualScroll: isVirtualScroll.value,
      virtualScrollVisibleIndexs: virtualScrollVisibleIndexs.value,
      isCellEditing: isCellEditing.value,
      cellAutofillOption: this.cellAutofillOption,
      [cellSelectionRangeChange]: (newData) => {
        cellSelectionRangeDataChange(newData)
      },
    }
    // edit input props
    const editInputProps = {
      hooks: hooks.value,
      parentRendered: parentRendered.value,
      inputStartValue: editorInputStartValue.value,
      rowKeyFieldName: props.rowKeyFieldName,
      tableData: props.tableData,
      cellSelectionData: cellSelectionData.value,
      colgroups: colgroups.value,
      editingCell: editingCell.value,
      isCellEditing: isCellEditing.value,
      allRowKeys,
      hasXScrollBar: hasXScrollBar.value,
      hasYScrollBar: hasYScrollBar.value,
      hasRightFixedColumn: hasRightFixedColumn.value,
      scrollBarWidth: getTableScrollBarWidth(),
      // edit input click
      onEditInputClick: () => {
        enableStopEditing.value = false
      },
      // edit input value change
      onEditInputValueChange: (value) => {
        updateEditingCellValue(value)
      },
      // copy
      onEditInputCopy: (e) => {
        editorCopy(e)
      },
      // paste
      onEditInputPaste: (e) => {
        this.editorPaste(e)
      },
      // cut
      onEditInputCut: (e) => {
        this.editorCut(e)
      },
    }

    // 直接在组件上写事件，单元测试无法通过。如 on={{"on-node-click":()=>{}}}
    const contextmenuProps = {
      eventTarget: contextmenuEventTarget.value,
      options: contextmenuOptions.value,
      onNodeClick: (type) => {
        this.contextmenuItemClick(type)
      },
    }

    // column resizer props
    const columnResizerProps = {
      parentRendered: parentRendered.value,
      tableContainerEl: tableContainerRef.value,
      hooks: hooks.value,
      colgroups: colgroups.value,
      isColumnResizerHover: isColumnResizerHover.value,
      isColumnResizing: isColumnResizing.value,
      setIsColumnResizerHover: setIsColumnResizerHover,
      setIsColumnResizing: setIsColumnResizing,
      setColumnWidth: setColumnWidth,
      columnWidthResizeOption: props.columnWidthResizeOption,
    }

    onMounted(() => {
      parentRendered.value = true
      // set contextmenu event target
      contextmenuEventTarget.value = tableRootRef.value.$el.querySelector(
        `.${clsName('content')}`,
      )

      // receive sort change
      eventCenter.value.on(GLOBAL_EVENT.SORT_CHANGE_AFTER, (params) => {
        updateColgroupsBySortChange(params)
      })

      // receive row selected change
      eventCenter.value.on(GLOBAL_EVENT.CHECKBOX_SELECTED_ALL_CHANGE_TABLE, (params) => {
        selectedAllChange(params)
      })

      // receive selected all info
      eventCenter.value.on(GLOBAL_EVENT.CHECKBOX_SELECTED_ALL_INFO, (params) => {
        setSelectedAllInfo(params)
      })

      // receive multiple header row height change
      eventCenter.value.on(GLOBAL_EVENT.HEADER_ROW_HEIGHT_CHANGE,
        ({ rowIndex, height }) => {
          headerRowHeightChange({ rowIndex, height })
        },
      )

      // receive virtual scroll row height change
      eventCenter.value.on(GLOBAL_EVENT.BODY_ROW_HEIGHT_CHANGE, ({ rowKey, height }) => {
        bodyRowHeightChange({ rowKey, height })
      })

      // receive footer row height change
      eventCenter.value.on(GLOBAL_EVENT.FOOTER_ROW_HEIGHT_CHANGE,
        ({ rowIndex, height }) => {
          footRowHeightChange({ rowIndex, height })
        },
      )

      // receive body cell click
      eventCenter.value.on(GLOBAL_EVENT.BODY_CELL_CLICK, (params) => {
        bodyCellClick(params)
      })

      // receive body cell mouseover
      eventCenter.value.on(GLOBAL_EVENT.BODY_CELL_MOUSEOVER, (params) => {
        bodyCellMouseover(params)
      })

      // receive body cell mousedown
      eventCenter.value.on(GLOBAL_EVENT.BODY_CELL_MOUSEDOWN, (params) => {
        bodyCellMousedown(params)
      })

      // receive body cell mousemove
      eventCenter.value.on(GLOBAL_EVENT.BODY_CELL_MOUSEMOVE, (params) => {
        bodyCellMousemove(params)
      })

      // receive body cell mouseup
      eventCenter.value.on(GLOBAL_EVENT.BODY_CELL_MOUSEUP, (params) => {
        bodyCellMouseup(params)
      })

      // receive selection corner mousedown
      eventCenter.value.on(GLOBAL_EVENT.SELECTION_CORNER_MOUSEDOWN, (params) => {
        cellSelectionCornerMousedown(params)
      })

      // receive selection corner mouseup
      eventCenter.value.on(GLOBAL_EVENT.SELECTION_CORNER_MOUSEUP, (params) => {
        // recieve cell selection corner mouseup
        isAutofillStarting.value = false
      })

      // autofilling direction change
      eventCenter.value.on(GLOBAL_EVENT.AUTOFILLING_DIRECTION_CHANGE, (params) => {
        autofillingDirectionChange(params)
      })

      // receive body cell contextmenu(right click)
      eventCenter.value.on(GLOBAL_EVENT.BODY_CELL_CONTEXTMENU, (params) => {
        bodyCellContextmenu(params)
      })

      // receive body cell double click
      eventCenter.value.on(GLOBAL_EVENT.BODY_CELL_DOUBLE_CLICK, (params) => {
        bodyCellDoubleClick(params)
      })

      // receive header cell contextmenu(right click)
      eventCenter.value.on(GLOBAL_EVENT.HEADER_CELL_CLICK, (params) => {
        headerCellClick(params)
      })

      // receive header cell contextmenu(right click)
      eventCenter.value.on(GLOBAL_EVENT.HEADER_CELL_CONTEXTMENU, (params) => {
        headerCellContextmenu(params)
      })

      // receive header cell mousedown
      eventCenter.value.on(GLOBAL_EVENT.HEADER_CELL_MOUSEDOWN, (params) => {
        headerCellMousedown(params)
      })

      // receive header cell mouseover
      eventCenter.value.on(GLOBAL_EVENT.HEADER_CELL_MOUSEOVER, (params) => {
        headerCellMouseover(params)
      })

      // receive header cell mousemove
      eventCenter.value.on(GLOBAL_EVENT.HEADER_CELL_MOUSEMOVE, (params) => {
        headerCellMousemove(params)
      })

      // receive header cell mouseleave
      eventCenter.value.on(GLOBAL_EVENT.HEADER_CELL_MOUSELEAVE, (params) => {
        headerCellMouseleave(params)
      })

      // add key down event listener
      document.addEventListener('keydown', dealKeydownEvent)

      // init scrolling
      initScrolling()
    })

    return () => (
      <div ref={tableRootRef} {...tableRootProps}>
        <VueDomResizeObserver ref={tableContainerWrapperRef}  {...tableContainerWrapperProps} v-click-outside={tableClickOutside}>
          <div ref={tableContainerRef} {...tableContainerProps}>
            {/* virtual view phantom */}
            {getVirtualViewPhantom()}
            {/* vue 实例类型，访问dom时需要通过$el属性访问 */}
            <VueDomResizeObserver ref={tableContentWrapperRef} {...tableWrapperProps}>
              <table ref={tableRef} {...tableProps}>
                {/* colgroup */}
                <ColGroup
                  colgroups={colgroups.value}
                  enableColumnResize={enableColumnResize.value}
                />
                {/* table header */}
                {showHeader && <TableHeader {...headerProps} />}
                {/* table body */}
                <TableBody ref={tableBodyRef} {...bodyProps} />
                {/* table footer */}
                <TableFooter {...footerProps} />
              </table>
              {/* cell selection */}
              {enableCellSelection.value && (
                <Selection ref={cellSelectionRef}  {...selectionProps} />
              )}
            </VueDomResizeObserver>
          </div>
          {/* edit input */}
          {enableCellSelection.value && <EditInput ref={editInputRef} {...editInputProps} />}
          {/* contextmenu */}
          {(enableHeaderContextmenu.value || enableBodyContextmenu.value) && (
            <VeContextmenu ref={contextmenuRef} {...contextmenuProps} />
          )}
          {/* column resizer */}
          {enableColumnResize.value && (<ColumnResizer {...columnResizerProps} />
          )}
        </VueDomResizeObserver>
      </div>
    )
  },
}
)
// 3885