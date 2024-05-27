import {
  clsName,
  isLastColumnByColKey,
  isLastRowByRowKey,
  getColKeysByRangeColKeys,
  isExistGivenFixedColKey,
  isExistNotFixedColKey,
  getLeftmostColKey,
  getRightmostColKey,
  getColKeysByFixedTypeWithinColKeys,
  getTotalWidthByColKeys,
  getPreviewColKey,
  getNextColKey,
} from '../util/index'
import {
  HOOKS_NAME,
  AUTOFILLING_DIRECTION,
  CURRENT_CELL_SELECTION_TYPES,
  COLUMN_FIXED_TYPE,
} from '../util/constant'
import { isEmptyValue, isBoolean, debounce } from '@P/src/utils/index.js'
import { GLOBAL_EVENT } from '@P/events/global-events'
import { computed, defineComponent, inject, nextTick, ref, watch } from 'vue'
import { EventType } from 'mitt'

export default defineComponent({
  name: 'FanTableSelection',
  props: {
    tableEl: {
      type: HTMLTableElement,
      default: null,
    },
    allRowKeys: {
      type: Array,
      required: true,
    },
    colgroups: {
      type: Array,
      required: true,
    },
    parentRendered: {
      type: Boolean,
      required: true,
    },
    hooks: {
      type: Object,
      required: true,
    },
    cellAutofillOption: {
      type: [Object, Boolean],
      default: function () {
        return {
          directionX: '',
          directionY: ''
        }
      },
    },
    cellSelectionData: {
      type: Object,
      required: true,
    },
    cellSelectionRangeData: {
      type: Object,
      required: true,
    },
    isAutofillStarting: {
      type: Boolean,
      required: true,
    },
    currentCellSelectionType: {
      type: String,
      default: '',
    },
    // is scrolling
    showVirtualScrollingPlaceholder: {
      type: Boolean,
      default: false,
    },
    isVirtualScroll: {
      type: Boolean,
      default: false,
    },
    virtualScrollVisibleIndexs: {
      type: Object,
      required: true,
    },
    isCellEditing: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['cellSelectionRangeDataChange'],

  setup(props, { emit }) {
    const eventCenter = inject<Record<EventType, any>>('eventCenter')!
    // data start
    const currentCellEl = ref()
    const normalEndCellEl = ref()
    const autoFillEndCellEl = ref()
    // cell selection rect
    const cellSelectionRect = ref({
      // current cell element rect
      currentCellRect: {
        left: 0,
        top: 0,
        width: 0,
        height: 0,
      },
      // normal end cell element rect
      normalEndCellRect: {
        left: 0,
        top: 0,
        width: 0,
        height: 0,
      },
      // auto fill end cell element rect
      autoFillEndCellRect: {
        left: 0,
        top: 0,
        width: 0,
        height: 0,
      },
    })
    // data end

    // computed start
    // selection borders visibility
    const selectionBordersVisibility = computed(() => {
      let result = true
      if (props.isVirtualScroll) {
        const virtualScrollVisibleIndexs = props.virtualScrollVisibleIndexs
        const currentCellSelectionType = props.currentCellSelectionType
        if (props.showVirtualScrollingPlaceholder) {
          result = false
        } else {
          const { currentCell, normalEndCell } = props.cellSelectionData

          if (currentCellSelectionType === CURRENT_CELL_SELECTION_TYPES.SINGLE) {
            const smallThan = currentCell.rowIndex < virtualScrollVisibleIndexs.start
            const bigThan = currentCell.rowIndex > virtualScrollVisibleIndexs.end
            if (smallThan || bigThan) {
              result = false
            }
          }

          if (currentCellSelectionType === CURRENT_CELL_SELECTION_TYPES.RANGE) {
            const smallThan = currentCell.rowIndex < virtualScrollVisibleIndexs.start
            const cellEndSmallThanStart = normalEndCell.rowIndex < virtualScrollVisibleIndexs.start
            const bigThan = currentCell.rowIndex > virtualScrollVisibleIndexs.end
            const cellEndBigThanEnd = normalEndCell.rowIndex > virtualScrollVisibleIndexs.end
            if ((smallThan && cellEndSmallThanStart) || (bigThan && cellEndBigThanEnd)) {
              result = false
            }
          }
        }
      }
      return result
    })
    // show corner
    const showCorner = computed(() => {
      let result = true
      if (props.cellAutofillOption) {
        const { directionX, directionY } = props.cellAutofillOption
        if (
          isBoolean(directionY) && !directionY && isBoolean(directionX) && !directionX
        ) {
          result = false
        }
      } else {
        result = false
      }

      return result
    })
    // corner cell info
    const cornerCellInfo = computed(() => {
      const colgroups = props.colgroups
      const { rightColKey, bottomRowKey } = props.cellSelectionRangeData

      let isLastColumn = false
      if (isLastColumnByColKey(rightColKey, colgroups)) {
        isLastColumn = true
      } else {
        const index = colgroups.findIndex((x) => x.key === rightColKey)
        // right col is right fixed and current col is not right fixed
        const nextFixedRight = colgroups[index + 1].fixed === COLUMN_FIXED_TYPE.RIGHT
        const thisNotFixedRight = colgroups[index].fixed !== COLUMN_FIXED_TYPE.RIGHT
        if (thisNotFixedRight && nextFixedRight) {
          isLastColumn = true
        }
      }

      let isLastRow = false
      if (isLastRowByRowKey(bottomRowKey, props.allRowKeys)) {
        isLastRow = true
      }

      return {
        isLastColumn,
        isLastRow,
      }
    },)
    // is first selection row
    const isFirstSelectionRow = computed(() => {
      return props.allRowKeys[0] === props.cellSelectionRangeData.topRowKey
    },)
    // is first selection column
    const isFirstSelectionCol = computed(() => {
      return props.colgroups[0].key === props.cellSelectionRangeData.leftColKey
    },)
    // is first not fixed selection column
    const isFirstNotFixedSelectionCol = computed(() => {
      let result = false

      if (props.colgroups.find((x) => x.fixed === 'left')) {
        const col = props.colgroups.find((x) => !x.fixed)
        if (col && col.field === props.cellSelectionRangeData.leftColKey) {
          result = true
        }
      }

      return result
    },)
    // computed end
    // method start
    function resetCellPositions() {
      const { currentCell, normalEndCell } = props.cellSelectionData
      if (
        !isEmptyValue(currentCell.rowKey) && !isEmptyValue(currentCell.colKey)
      ) {
        setSelectionPositions({
          type: 'currentCell',
        })
      }

      if (
        !isEmptyValue(normalEndCell.rowKey) &&
        !isEmptyValue(normalEndCell.colKey)
      ) {
        setSelectionPositions({
          type: 'normalEndCell',
        })
      }
    }

    // set cell els
    function setCellEls() {
      if (props.isVirtualScroll && selectionBordersVisibility.value) {
        setCurrentCellEl()
        setNormalEndCellEl()
      }
    }

    // set cell selection range data
    function setCellSelectionRangeData() {
      const { currentCell, normalEndCell } = props.cellSelectionData

      let result:Record<string, any> = {}

      if (props.currentCellSelectionType === CURRENT_CELL_SELECTION_TYPES.SINGLE) {
        result = {
          leftColKey: currentCell.colKey,
          rightColKey: currentCell.colKey,
          topRowKey: currentCell.rowKey,
          bottomRowKey: currentCell.rowKey,
        }
      } else if (props.currentCellSelectionType === CURRENT_CELL_SELECTION_TYPES.RANGE) {
        const leftmostColKey = getLeftmostColKey({
          colgroups: props.colgroups,
          colKeys: [currentCell.colKey, normalEndCell.colKey],
        })

        // current cell col key is leftmost colKey
        // 需要用 colKey 的位置进行判断，不能根据当前单元格 left 值判断（固定列时）
        if (leftmostColKey === currentCell.colKey) {
          result.leftColKey = currentCell.colKey
          result.rightColKey = normalEndCell.colKey
        } else {
          result.leftColKey = normalEndCell.colKey
          result.rightColKey = currentCell.colKey
        }

        if (currentCell.rowIndex < normalEndCell.rowIndex) {
          result.topRowKey = currentCell.rowKey
          result.bottomRowKey = normalEndCell.rowKey
        } else {
          result.topRowKey = normalEndCell.rowKey
          result.bottomRowKey = currentCell.rowKey
        }
      } else {
        result = {
          leftColKey: '',
          rightColKey: '',
          topRowKey: '',
          bottomRowKey: '',
        }
      }
      emit('cellSelectionRangeDataChange', result)
    }

    // get cell position
    function getCellPosition({ cellEl, tableLeft, tableTop }) {
      if (!selectionBordersVisibility.value) {
        return false
      }

      const {
        left: cellLeft,
        top: cellTop,
        height: cellHeight,
        width: cellWidth,
      } = cellEl.getBoundingClientRect()

      if (cellHeight && cellWidth) {
        return {
          left: cellLeft - tableLeft,
          top: cellTop - tableTop,
          width: cellWidth,
          height: cellHeight,
        }
      }
    }

    // get cell position by column key
    type CellPositionByColKeyParam = {
      tableLeft: any
      tableTop: any
      colKey: any
      isFirstRow?: boolean
      isLastRow?: boolean
    }
    function getCellPositionByColKey({ tableLeft, tableTop, colKey, isFirstRow, isLastRow }:CellPositionByColKeyParam) {
      if (!selectionBordersVisibility.value) {
        return false
      }

      let cellEl
      if (isFirstRow) {
        cellEl = getTableFirstRowCellByColKey(colKey)
      } else if (isLastRow) {
        cellEl = getTableLastRowCellByColKey(colKey)
      }
      if (!cellEl) return
      const {
        left: cellLeft,
        top: cellTop,
        // height: cellHeight,
        width: cellWidth,
      } = cellEl.getBoundingClientRect()

      if (cellWidth) {
        return {
          left: cellLeft - tableLeft,
          top: cellTop - tableTop,
          width: cellWidth,
        }
      }
    }

    // set selection positions
    function setSelectionPositions({ type }) {
      const virtualScrollVisibleIndexs = props.virtualScrollVisibleIndexs

      // table empty
      if (props.allRowKeys.length === 0) {
        return false
      }

      if (!props.tableEl) {
        return false
      }

      const { left: tableLeft, top: tableTop } =
        props.tableEl.getBoundingClientRect()

      let isCurrentCellOverflow = false
      let isNormalEndCellOverflow = false
      // set current cell position
      if (type === 'currentCell') {
        isCurrentCellOverflow = true
        if (currentCellEl.value) {
          const rect = getCellPosition({
            cellEl: currentCellEl.value,
            tableLeft,
            tableTop,
          })
          if (rect) {
            isCurrentCellOverflow = false
            cellSelectionRect.value.currentCellRect = rect
          }
        }
      }

      // set nromal end cell position`
      if (type === 'normalEndCell') {
        isNormalEndCellOverflow = true
        if (normalEndCellEl.value) {
          const rect = getCellPosition({
            cellEl: normalEndCellEl.value,
            tableLeft,
            tableTop,
          })
          if (rect) {
            isNormalEndCellOverflow = false
            cellSelectionRect.value.normalEndCellRect = rect
          }
        }
      }

      // current cell overflow or normal end cell overflow && is virtual scroll
      if (
        (isCurrentCellOverflow || isNormalEndCellOverflow) &&
        props.isVirtualScroll
      ) {
        const { currentCell, normalEndCell } = props.cellSelectionData
        // 弥补的
        let mackUpColKey
        let mackUpRowIndex

        if (isCurrentCellOverflow) {
          mackUpColKey = currentCell.colKey
          mackUpRowIndex = currentCell.rowIndex
        } else {
          mackUpColKey = normalEndCell.colKey
          mackUpRowIndex = normalEndCell.rowIndex
        }

        let mackUpRect
        // 当没有 currentCellRect 或 normalCellRect 时进行纠正，否则只更新 top 值
        const overflowAndWithoutHeight = isCurrentCellOverflow && !cellSelectionRect.value.currentCellRect.height
        const normalCellWithoutHeight = isNormalEndCellOverflow && !cellSelectionRect.value.normalEndCellRect.height
        if (overflowAndWithoutHeight || normalCellWithoutHeight) {
          const mackUpRectParams = {
            tableLeft,
            tableTop,
            colKey: mackUpColKey,
          }
          // 上方超出
          if (mackUpRowIndex < virtualScrollVisibleIndexs.start) {
            mackUpRect = getCellPositionByColKey({
              ...mackUpRectParams,
              isFirstRow: true,
            })
          } else if (mackUpRowIndex > virtualScrollVisibleIndexs.end) {
            // 下方超出
            mackUpRect = getCellPositionByColKey({
              ...mackUpRectParams,
              isLastRow: true,
            })
          }
        } else {
          // 仅更新 top 值
          // 上方超出
          if (mackUpRowIndex < virtualScrollVisibleIndexs.start) {
            mackUpRect = {
              top: 0,
            }
          } else if (mackUpRowIndex > virtualScrollVisibleIndexs.end) {
            // 下方超出
            mackUpRect = {
              top: props.tableEl.clientHeight,
            }
          }
        }

        if (isCurrentCellOverflow) {
          Object.assign(
            cellSelectionRect.value.currentCellRect,
            mackUpRect,
          )
        } else {
          Object.assign(
            cellSelectionRect.value.normalEndCellRect,
            mackUpRect,
          )
        }
      }

      if (autoFillEndCellEl.value && type === 'autoFillEndCell') {
        const rect = getCellPosition({
          cellEl: autoFillEndCellEl.value,
          tableLeft,
          tableTop,
        })

        if (rect) {
          cellSelectionRect.value.autoFillEndCellRect = rect
        }
      }
    }
    // 1、selection current
    // 2、auto fill area
    function getSelectionCurrent({ fixedType }) {
      const result: Record<string, any> = {
        selectionCurrent: null,
        autoFillArea: null,
      }

      const { currentCellRect, normalEndCellRect } = cellSelectionRect.value
      if (!currentCellRect.width) {
        return result
      }

      const borders = {
        borderWidth: currentCellRect.width + 1,
        borderHeight: currentCellRect.height,

        topBorder: {
          show: true,
          width: 0,
          height: 2,
          top: currentCellRect.top - 1,
          left: currentCellRect.left - 1,
        },
        rightBorder: {
          show: true,
          width: 2,
          height: 0,
          top: currentCellRect.top,
          left: currentCellRect.left + currentCellRect.width - 2,
        },
        bottomBorder: {
          show: true,
          width: 0,
          height: 2,
          top: currentCellRect.top + currentCellRect.height - 2,
          left: currentCellRect.left - 1,
        },
        leftBorder: {
          show: true,
          width: 2,
          height: 0,
          top: currentCellRect.top,
          left: currentCellRect.left - 1,
        },
        corner: {
          show: !normalEndCellRect.width,
          top: 0,
          left: 0,
        },
      }

      borders.corner.top = borders.bottomBorder.top - 3
      borders.corner.left = borders.rightBorder.left - 3

      // cell selection single autofill
      if (!normalEndCellRect.width) {
        result.autoFillArea = getSelectionAutofillArea({
          areaPostions: borders,
          fixedType,
        })
      }

      const totalColKeys = [props.cellSelectionData.currentCell.colKey]

      const fixedColKeys = getColKeysByFixedTypeWithinColKeys({
        colKeys: totalColKeys,
        fixedType,
        colgroups: props.colgroups,
      })

      result.selectionCurrent = getBorders({
        ...borders,
        className: 'selection-current',
        fixedType,
        totalColKeys,
        fixedColKeys,
      })

      return result
    }

    // 1、normal area
    // 2、auto fill area
    function getSelectionAreas({ fixedType }) {
      const result: Record<string, any> = {
        normalArea: null,
        autoFillArea: null,
      }
      const { currentCell, normalEndCell } = props.cellSelectionData
      const { currentCellRect, normalEndCellRect } = cellSelectionRect.value

      if (!currentCellRect.width || !normalEndCellRect.width) {
        return result
      }

      const borders = {
        borderWidth: 0,
        borderHeight: 0,

        topBorder: {
          show: true,
          width: 0,
          height: 1,
          top: 0,
          left: 0,
        },
        rightBorder: {
          show: true,
          width: 1,
          height: 0,
          top: 0,
          left: 0,
        },
        bottomBorder: {
          show: true,
          width: 0,
          height: 1,
          top: 0,
          left: 0,
        },
        leftBorder: {
          show: true,
          width: 1,
          height: 0,
          top: 0,
          left: 0,
        },
        corner: {
          show: true,
          top: 0,
          left: 0,
        },
      }

      const leftmostColKey = getLeftmostColKey({
        colgroups: props.colgroups,
        colKeys: [currentCell.colKey, normalEndCell.colKey],
      })

      // end cell column key right
      if (leftmostColKey === currentCell.colKey) {
        borders.borderWidth =
          normalEndCellRect.left -
          currentCellRect.left +
          normalEndCellRect.width +
          1

        borders.topBorder.left = currentCellRect.left - 1
        borders.bottomBorder.left = currentCellRect.left - 1
        borders.leftBorder.left = currentCellRect.left - 1
        borders.rightBorder.left =
          normalEndCellRect.left + normalEndCellRect.width - 1
      } else if (leftmostColKey === normalEndCell.colKey) {
        // end cell column key left or equal
        borders.borderWidth =
          currentCellRect.left -
          normalEndCellRect.left +
          currentCellRect.width +
          1

        borders.topBorder.left = normalEndCellRect.left - 1
        borders.rightBorder.left =
          currentCellRect.left + currentCellRect.width - 1
        borders.bottomBorder.left = normalEndCellRect.left - 1
        borders.leftBorder.left = normalEndCellRect.left - 1
      }

      // end cell below
      if (normalEndCellRect.top > currentCellRect.top) {
        borders.borderHeight =
          normalEndCellRect.top -
          currentCellRect.top +
          normalEndCellRect.height

        borders.topBorder.top = currentCellRect.top - 1
        borders.rightBorder.top = currentCellRect.top
        borders.bottomBorder.top =
          normalEndCellRect.top + normalEndCellRect.height - 1
        borders.leftBorder.top = currentCellRect.top
      } else if (normalEndCellRect.top <= currentCellRect.top) {
        // end cell above or equal
        borders.borderHeight =
          currentCellRect.top -
          normalEndCellRect.top +
          currentCellRect.height

        borders.topBorder.top = normalEndCellRect.top - 1
        borders.rightBorder.top = normalEndCellRect.top
        borders.bottomBorder.top =
          currentCellRect.top + currentCellRect.height - 1
        borders.leftBorder.top = normalEndCellRect.top
      }

      borders.corner.top = borders.bottomBorder.top - 4
      borders.corner.left = borders.rightBorder.left - 4

      if (normalEndCellRect.width) {
        result.autoFillArea = getSelectionAutofillArea({
          areaPostions: borders,
          fixedType,
        })
      }

      const { leftColKey, rightColKey } = props.cellSelectionRangeData
      const totalColKeys = getColKeysByRangeColKeys({
        colKey1: leftColKey,
        colKey2: rightColKey,
        colgroups: props.colgroups,
      })

      const fixedColKeys = getColKeysByFixedTypeWithinColKeys({
        colKeys: totalColKeys,
        fixedType,
        colgroups: props.colgroups,
      })

      result.normalArea = getBorders({
        ...borders,
        className: 'selection-normal-area',
        fixedType,
        totalColKeys,
        fixedColKeys,
      })

      result.normalAreaLayer = getAreaLayer({
        ...borders,
        className: 'selection-normal-area-layer',
        fixedType,
        totalColKeys,
        fixedColKeys,
      })

      return result
    }

    // get selection auto fill
    function getSelectionAutofillArea({ areaPostions, fixedType }:Record<'areaPostions'|'fixedType', any>) {
      let result = null
      if (!props.isAutofillStarting) {
        return result
      }
      const { currentCellRect, autoFillEndCellRect } = cellSelectionRect.value

      if (!currentCellRect.width || !autoFillEndCellRect.width) {
        return result
      }

      if (!areaPostions) {
        return result
      }

      const borders = {
        borderWidth: 0,
        borderHeight: 0,

        topBorder: {
          show: true,
          width: 0,
          height: 1,
          top: 0,
          left: 0,
        },
        rightBorder: {
          show: true,
          width: 1,
          height: 0,
          top: 0,
          left: 0,
        },
        bottomBorder: {
          show: true,
          width: 0,
          height: 1,
          top: 0,
          left: 0,
        },
        leftBorder: {
          show: true,
          width: 1,
          height: 0,
          top: 0,
          left: 0,
        },
        corner: {
          show: false,
          top: 0,
          left: 0,
        },
      }

      const { currentCell, autoFillEndCell } = props.cellSelectionData

      let { leftColKey, rightColKey } = props.cellSelectionRangeData
      if (props.currentCellSelectionType === CURRENT_CELL_SELECTION_TYPES.SINGLE) {
        leftColKey = currentCell.colKey
        rightColKey = currentCell.colKey
      }

      let leftmostColKey
      if (leftColKey !== autoFillEndCell.colKey) {
        leftmostColKey = getLeftmostColKey({
          colgroups: props.colgroups,
          colKeys: [leftColKey, autoFillEndCell.colKey],
        })
      }

      let rightmostColKey
      if (rightColKey !== autoFillEndCell.colKey) {
        rightmostColKey = getRightmostColKey({
          colgroups: props.colgroups,
          colKeys: [rightColKey, autoFillEndCell.colKey],
        })
      }

      // autofilling direction
      let autofillingDirection

      let rangeColKey1
      let rangeColKey2

      // auto fill end cell below
      if (autoFillEndCellRect.top > areaPostions.bottomBorder.top) {
        autofillingDirection = AUTOFILLING_DIRECTION.DOWN

        rangeColKey1 = leftColKey
        rangeColKey2 = rightColKey

        borders.topBorder.show = false

        borders.borderWidth = areaPostions.borderWidth
        borders.borderHeight =
          autoFillEndCellRect.top -
          areaPostions.bottomBorder.top +
          autoFillEndCellRect.height

        borders.rightBorder.top = areaPostions.bottomBorder.top
        borders.rightBorder.left = areaPostions.rightBorder.left
        if (props.currentCellSelectionType === CURRENT_CELL_SELECTION_TYPES.SINGLE) {
          borders.rightBorder.left++
        }

        borders.leftBorder.top = areaPostions.bottomBorder.top
        borders.leftBorder.left = areaPostions.leftBorder.left

        borders.bottomBorder.top =
          autoFillEndCellRect.top + autoFillEndCellRect.height - 1
        borders.bottomBorder.left = areaPostions.bottomBorder.left
      } else if (autoFillEndCellRect.top < areaPostions.topBorder.top) {
        // end cell above
        autofillingDirection = AUTOFILLING_DIRECTION.UP

        rangeColKey1 = leftColKey
        rangeColKey2 = rightColKey

        borders.bottomBorder.show = false

        borders.borderWidth = areaPostions.borderWidth
        borders.borderHeight =
          areaPostions.topBorder.top - autoFillEndCellRect.top

        borders.topBorder.top = autoFillEndCellRect.top - 1
        borders.topBorder.left = areaPostions.topBorder.left

        borders.rightBorder.top = autoFillEndCellRect.top
        borders.rightBorder.left = areaPostions.rightBorder.left
        if (props.currentCellSelectionType === CURRENT_CELL_SELECTION_TYPES.SINGLE) {
          borders.rightBorder.left++
        }

        borders.leftBorder.top = autoFillEndCellRect.top
        borders.leftBorder.left = areaPostions.leftBorder.left
      } else if (
        rightmostColKey === autoFillEndCell.colKey &&
        !isEmptyValue(rightmostColKey)
      ) {
        // auto fill end cell right
        autofillingDirection = AUTOFILLING_DIRECTION.RIGHT

        rangeColKey1 = getNextColKey({
          colgroups: props.colgroups,
          currentColKey: rightColKey,
        })
        rangeColKey2 = autoFillEndCell.colKey

        borders.leftBorder.show = false

        borders.borderWidth =
          autoFillEndCellRect.left -
          areaPostions.rightBorder.left +
          autoFillEndCellRect.width +
          1
        borders.borderHeight = areaPostions.borderHeight

        borders.topBorder.top = areaPostions.topBorder.top
        borders.topBorder.left = areaPostions.rightBorder.left - 1

        borders.rightBorder.top = areaPostions.topBorder.top
        borders.rightBorder.left =
          autoFillEndCellRect.left + autoFillEndCellRect.width - 1

        borders.bottomBorder.top = areaPostions.bottomBorder.top
        borders.bottomBorder.left = areaPostions.rightBorder.left - 1
      } else if (
        leftmostColKey === autoFillEndCell.colKey &&
        !isEmptyValue(leftmostColKey)
      ) {
        // auto fill end cell left
        autofillingDirection = AUTOFILLING_DIRECTION.LEFT

        rangeColKey1 = getPreviewColKey({
          colgroups: props.colgroups,
          currentColKey: leftColKey,
        })
        rangeColKey2 = autoFillEndCell.colKey

        borders.rightBorder.show = false

        borders.borderWidth =
          areaPostions.leftBorder.left - autoFillEndCellRect.left + 1
        borders.borderHeight = areaPostions.borderHeight

        borders.topBorder.top = areaPostions.topBorder.top
        borders.topBorder.left = autoFillEndCellRect.left

        borders.rightBorder.left = areaPostions.topBorder.left

        borders.bottomBorder.top = areaPostions.bottomBorder.top
        borders.bottomBorder.left = autoFillEndCellRect.left

        borders.leftBorder.top = areaPostions.topBorder.top
        borders.leftBorder.left = autoFillEndCellRect.left
      } else {
        return result
      }

      const { directionX, directionY } = props.cellAutofillOption
      if (isBoolean(directionX) && !directionX) {
        if (
          autofillingDirection === AUTOFILLING_DIRECTION.LEFT ||
          autofillingDirection === AUTOFILLING_DIRECTION.RIGHT
        ) {
          return false
        }
      }

      if (isBoolean(directionY) && !directionY) {
        if (
          autofillingDirection === AUTOFILLING_DIRECTION.UP ||
          autofillingDirection === AUTOFILLING_DIRECTION.DOWN
        ) {
          return false
        }
      }

      const totalColKeys = getColKeysByRangeColKeys({
        colKey1: rangeColKey1,
        colKey2: rangeColKey2,
        colgroups: props.colgroups,
      })

      const fixedColKeys = getColKeysByFixedTypeWithinColKeys({
        colKeys: totalColKeys,
        fixedType,
        colgroups: props.colgroups,
      })

      result = getBorders({
        className: 'selection-autofill-area',
        ...borders,
        fixedType,
        totalColKeys,
        fixedColKeys,
      })

      if (result) {
        eventCenter.emit(
          GLOBAL_EVENT.AUTOFILLING_DIRECTION_CHANGE,
          autofillingDirection,
        )
      }

      return result
    }

    // get borders
    interface GetBorderAgu {
      borderWidth: any
      borderHeight: any
      topBorder: any
      rightBorder: any
      bottomBorder: any
      leftBorder: any
      corner: any
      className: any
      fixedType: any
      totalColKeys: any
      fixedColKeys: any
    }
    function getBorders({
      borderWidth,
      borderHeight,
      topBorder,
      rightBorder,
      bottomBorder,
      leftBorder,
      corner,
      className,
      fixedType,
      totalColKeys,
      fixedColKeys,
    }: GetBorderAgu) {
      let isRender = true

      if (fixedType) {
        isRender = isExistGivenFixedColKey({
          fixedType,
          colKeys: totalColKeys,
          colgroups: props.colgroups,
        })
      } else { // middle normal area
        isRender = isExistNotFixedColKey({
          colKeys: totalColKeys,
          colgroups: props.colgroups,
        })
      }

      if (!isRender) {
        return null
      }

      // fixed columns total width
      let fixedColsTotalWidth = 0
      if (fixedColKeys.length) {
        fixedColsTotalWidth = getTotalWidthByColKeys({
          colKeys: fixedColKeys,
          colgroups: props.colgroups,
        })
      }

      if (fixedType) {
        borderWidth = fixedColsTotalWidth
        if (fixedType === COLUMN_FIXED_TYPE.LEFT) {
          borderWidth += 1
        }
      }

      if (fixedType === COLUMN_FIXED_TYPE.LEFT) {
        if (totalColKeys.length !== fixedColKeys.length) {
          rightBorder.show = false
          corner.show = false
        }
      }

      if (fixedType === COLUMN_FIXED_TYPE.RIGHT) {
        if (totalColKeys.length !== fixedColKeys.length) {
          leftBorder.show = false
        }

        topBorder.left = rightBorder.left - borderWidth + 1
        bottomBorder.left = rightBorder.left - borderWidth + 1
      }

      // solved first row、first column、first not fixed column selection border hidden
      if (isFirstSelectionRow.value) {
        topBorder.top += 1
      }
      if (isFirstSelectionCol.value) {
        leftBorder.left += 1
      }
      if (isFirstNotFixedSelectionCol.value) {
        leftBorder.left += 1
      }

      let cornerTop = corner.top
      let cornerLeft = corner.left
      let cornerBorderRightWidth = '1px'
      let cornerBorderBottomtWidth = '1px'

      if (cornerCellInfo.value.isLastRow) {
        cornerTop -= 3
        cornerBorderBottomtWidth = '0px'
      }

      if (cornerCellInfo.value.isLastColumn) {
        cornerLeft -= 3
        cornerBorderRightWidth = '0px'
      }

      if (!showCorner.value) {
        corner.show = false
      }

      // corner props
      const cornerProps = {
        class: clsName('selection-corner'),
        style: {
          display: corner.show ? 'block' : 'none',
          top: cornerTop + 'px',
          left: cornerLeft + 'px',
          borderWidth: `1px ${cornerBorderRightWidth} ${cornerBorderBottomtWidth} 1px`,
        },
        onMousedown: (e: MouseEvent) => {
          eventCenter.emit(GLOBAL_EVENT.SELECTION_CORNER_MOUSEDOWN,
            {
              event: e,
            },
          )
        },
        onMouseup: (e: MouseEvent) => {
          eventCenter.emit(GLOBAL_EVENT.SELECTION_CORNER_MOUSEUP,
            {
              event: e,
            },
          )
        },
      }
      // 修复一个单元格，占据多个单元格位置时，选中内容的高亮宽度不够的问题
      const calcBorderWidth = rightBorder.left - leftBorder.left + 2

      return (
        <div class={clsName(className)}>
          {/* top */}
          <div
            style={{
              display: topBorder.show ? 'block' : 'none',
              width: calcBorderWidth + 'px',
              height: topBorder.height + 'px',
              top: topBorder.top + 'px',
              left: topBorder.left + 'px',
            }}
            class={clsName('selection-border')}
          ></div>
          {/* right */}
          <div
            style={{
              display: rightBorder.show ? 'block' : 'none',
              width: rightBorder.width + 'px',
              height: borderHeight + 'px',
              top: rightBorder.top + 'px',
              left: rightBorder.left + 'px',
            }}
            class={clsName('selection-border')}
          ></div>
          {/* bottom */}
          <div
            style={{
              display: bottomBorder.show ? 'block' : 'none',
              width: calcBorderWidth + 'px',
              height: bottomBorder.height + 'px',
              top: bottomBorder.top + 'px',
              left: bottomBorder.left + 'px',
            }}
            class={clsName('selection-border')}
          ></div>
          {/* left */}
          <div
            style={{
              display: leftBorder.show ? 'block' : 'none',
              width: leftBorder.width + 'px',
              height: borderHeight + 'px',
              top: leftBorder.top + 'px',
              left: leftBorder.left + 'px',
            }}
            class={clsName('selection-border')}
          ></div>
          {/* corner */}
          {<div {...cornerProps}></div>}
        </div>
      )
    }

    // get area rect
    type AreaLayerParam = {
      borderWidth: any
      borderHeight: any
      topBorder: any
      className: any
      fixedType: any
      totalColKeys: any
      fixedColKeys: any
    }
    function getAreaLayer({
      borderWidth,
      borderHeight,
      topBorder,
      className,
      fixedType,
      totalColKeys,
      fixedColKeys,
    }: AreaLayerParam) {
      const colgroups = props.colgroups

      let isRender = true

      if (fixedType) {
        isRender = isExistGivenFixedColKey({
          fixedType,
          colKeys: totalColKeys,
          colgroups,
        })
      } else {
        // middle normal area
        isRender = isExistNotFixedColKey({
          colKeys: totalColKeys,
          colgroups,
        })
      }

      if (!isRender) {
        return null
      }

      // fixed columns total width
      let fixedColsTotalWidth = 0
      if (fixedColKeys.length) {
        fixedColsTotalWidth = getTotalWidthByColKeys({
          colKeys: fixedColKeys,
          colgroups,
        })
      }

      if (fixedType) {
        borderWidth = fixedColsTotalWidth
        if (fixedType === COLUMN_FIXED_TYPE.LEFT) {
          borderWidth += 1
        }
      }

      return (
        <div
          class={clsName(className)}
          style={{
            top: topBorder.top + 'px',
            left: topBorder.left + 'px',
            width: borderWidth + 'px',
            height: borderHeight + 'px',
          }}
        ></div>
      )
    }

    //  用作跨页单元格选择，表格大小变化或者存在横向滚动条时，区域选择位置自动校准
    function getTableFirstRowCellByColKey(colKey) {
      let result = null

      if (props.tableEl) {
        result = props.tableEl.querySelector(`tbody.fan-table-body tr td[col-key="${colKey}"]`)
      }
      return result
    }
    // 用作跨页单元格选择，表格大小变化或者存在横向滚动条时，区域选择位置自动校准
    function getTableLastRowCellByColKey(colKey) {
      let result = null

      if (props.tableEl) {
        result = props.tableEl.querySelector(
          `tbody.fan-table-body tr:last-child td[col-key="${colKey}"]`,
        )
      }
      return result
    }

    // get table el
    function getTableCellEl({ rowKey, colKey }) {
      let result = null

      if (props.tableEl) {
        result = props.tableEl.querySelector(
          `tbody.fan-table-body tr[row-key="${rowKey}"] td[col-key="${colKey}"]`,
        )
      }
      return result
    }

    // set current cell el
    function setCurrentCellEl() {
      const { rowKey, colKey } = props.cellSelectionData.currentCell

      if (!isEmptyValue(rowKey) && !isEmptyValue(colKey)) {
        const cellEl = getTableCellEl({
          rowKey,
          colKey,
        })
        if (cellEl) {
          currentCellEl.value = cellEl
        }
      }
    }

    // set normal end cell el
    function setNormalEndCellEl() {
      const { rowKey, colKey } = props.cellSelectionData.normalEndCell

      if (!isEmptyValue(rowKey) && !isEmptyValue(colKey)) {
        const cellEl = getTableCellEl({
          rowKey,
          colKey,
        })
        if (cellEl) {
          normalEndCellEl.value = cellEl
        }
      }
    }

    // set auto fill cell el
    function setAutofillEndCellEl() {
      const { rowKey, colKey } = props.cellSelectionData.autoFillEndCell

      if (props.tableEl) {
        const autoFillEndCellElement = props.tableEl.querySelector(
          `tbody.fan-table-body tr[row-key="${rowKey}"] td[col-key="${colKey}"]`,
        )

        if (autoFillEndCellElement) {
          autoFillEndCellEl.value = autoFillEndCellElement
        }
      }
    }

    // clear auto fill end cell rect
    function clearAutofillEndCellRect() {
      autoFillEndCellEl.value = null
      cellSelectionRect.value.autoFillEndCellRect = {
        left: 0,
        top: 0,
        width: 0,
        height: 0,
      }
    }

    // clear current cell rect
    function clearCurrentCellRect() {
      currentCellEl.value = null
      cellSelectionRect.value.currentCellRect = {
        left: 0,
        top: 0,
        width: 0,
        height: 0,
      }
    }

    // clear normal end cell rect
    function clearNormalEndCellRect() {
      normalEndCellEl.value = null
      cellSelectionRect.value.normalEndCellRect = {
        left: 0,
        top: 0,
        width: 0,
        height: 0,
      }
    }
    // method end
    // debounce reset cell positions
    const debounceResetCellPositions = debounce(resetCellPositions, 210)
    // debounce set cell els
    const debounceSetCellEls = debounce(setCellEls, 200)
    // watch start
    watch(() => props.parentRendered, function (val) {
      if (val) {
        // add table container scroll hook
        props.hooks.addHook(
          HOOKS_NAME.TABLE_CONTAINER_SCROLL,
          () => {
            setCellEls()
            debounceSetCellEls()

            resetCellPositions()
            // debounce reset cell positions
            debounceResetCellPositions()
          },
        )
        // add table size change hook
        props.hooks.addHook(HOOKS_NAME.TABLE_SIZE_CHANGE, () => {
          // debounce reset cell positions
          debounceResetCellPositions()
        })
        // add table td width change hook
        props.hooks.addHook(
          HOOKS_NAME.TABLE_CELL_WIDTH_CHANGE,
          () => {
            nextTick(() => {
              resetCellPositions()
            })
          },
        )

        // add clipboard cell value change hook
        props.hooks.addHook(
          HOOKS_NAME.CLIPBOARD_CELL_VALUE_CHANGE,
          () => {
            nextTick(() => {
              resetCellPositions()
            })
          },
        )
      }
    }, {
      immediate: true,
    },)
    // watch current cell
    watch(() => 'props.cellSelectionData.currentCell',
      function (val: any) {
        const { rowKey, colKey } = val
        if (!isEmptyValue(rowKey) && !isEmptyValue(colKey)) {
          setCurrentCellEl()
          setSelectionPositions({ type: 'currentCell' })
        } else {
          clearCurrentCellRect()
        }
        setCellSelectionRangeData()
      }, {
        deep: true,
        immediate: true,
      })
    // watch normal end cell
    watch(() => 'props.cellSelectionData.normalEndCell', function (val) {
      const { rowKey, colKey } = val
      if (!isEmptyValue(rowKey) && !isEmptyValue(colKey)) {
        // set normal end cell el
        setNormalEndCellEl()
        setSelectionPositions({ type: 'normalEndCell' })
      } else {
        clearNormalEndCellRect()
      }
      setCellSelectionRangeData()
    }, {
      deep: true,
      immediate: true,
    },)
    // watch autofill cell
    watch(() => 'props.cellSelectionData.autoFillEndCell', function (val) {
      const { rowKey, colKey } = val
      if (!isEmptyValue(rowKey) && !isEmptyValue(colKey)) {
        setAutofillEndCellEl()
        setSelectionPositions({ type: 'autoFillEndCell' })
      } else {
        clearAutofillEndCellRect()
      }
    }, {
      deep: true,
      immediate: true,
    })
    // watch end

    // fixed left
    const fixedLeftSelectionCurrent = getSelectionCurrent({ fixedType: COLUMN_FIXED_TYPE.LEFT, })
    const fixedLeftSelectionArea = getSelectionAreas({ fixedType: COLUMN_FIXED_TYPE.LEFT, })

    const fixedLeftAutoFillArea = fixedLeftSelectionCurrent.autoFillArea || fixedLeftSelectionArea.autoFillArea

    // middle
    const middleSelectionCurrent = getSelectionCurrent({ fixedType: '' })
    const middleSelectionArea = getSelectionAreas({ fixedType: '' })

    const middleAutoFillArea = middleSelectionCurrent.autoFillArea || middleSelectionArea.autoFillArea

    // fixed right
    const fixedRightSelectionCurrent = getSelectionCurrent({
      fixedType: COLUMN_FIXED_TYPE.RIGHT,
    })
    const fixedRightSelectionArea = getSelectionAreas({
      fixedType: COLUMN_FIXED_TYPE.RIGHT,
    })

    const fixedRightAutoFillArea = fixedRightSelectionCurrent.autoFillArea || fixedRightSelectionArea.autoFillArea
    if (!selectionBordersVisibility.value) {
      return null
    }
    const containerStyle: Record<string, string> = { visibility: props.isCellEditing ? 'hidden' : '' }
    return () => (
      <div
        class={clsName('selection-wrapper')}
        style={containerStyle}
      >
        <div class={clsName('selection-fixed-left')}>
          {/* current */}
          {fixedLeftSelectionCurrent.selectionCurrent}
          {/* area */}
          {fixedLeftSelectionArea.normalArea}
          {/* auto fill */}
          {fixedLeftAutoFillArea}
          {/* area layer */}
          {fixedLeftSelectionArea.normalAreaLayer}
        </div>
        <div class={clsName('selection-middle')}>
          {/* current */}
          {middleSelectionCurrent.selectionCurrent}
          {/* area */}
          {middleSelectionArea.normalArea}
          {/* auto fill */}
          {middleAutoFillArea}
          {/* area layer */}
          {middleSelectionArea.normalAreaLayer}
        </div>
        <div class={clsName('selection-fixed-right')}>
          {/* current */}
          {fixedRightSelectionCurrent.selectionCurrent}
          {/* area */}
          {fixedRightSelectionArea.normalArea}
          {/* auto fill */}
          {fixedRightAutoFillArea}
          {/* area layer */}
          {fixedRightSelectionArea.normalAreaLayer}
        </div>
      </div>
    )
  }
})
// 1622