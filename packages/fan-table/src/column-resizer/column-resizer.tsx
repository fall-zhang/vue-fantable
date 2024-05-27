import { clsName } from '../util/index'
import { HOOKS_NAME } from '../util/constant'
import { isNumber } from '@P/src/utils/index.js'
import { computed, defineComponent, reactive, ref, watch } from 'vue'

export default defineComponent({
  name: 'FanTableColumnResizer',
  props: {
    parentRendered: {
      type: Boolean,
      required: true,
    },
    tableContainerEl: {
      type: HTMLDivElement,
      default: null,
    },
    hooks: {
      type: Object,
      required: true,
    },
    colgroups: {
      type: Array,
      required: true,
    },
    isColumnResizerHover: {
      type: Boolean,
      required: true,
    },
    isColumnResizing: {
      type: Boolean,
      required: true,
    },
    setIsColumnResizerHover: {
      type: Function,
      required: true,
    },
    setIsColumnResizing: {
      type: Function,
      required: true,
    },
    setColumnWidth: {
      type: Function,
      required: true,
    },
    // column width resize option
    columnWidthResizeOption: {
      type: Object,
      default: function () {
        return null
      },
    },
  },
  setup(props) {
    const columnResizerStartX = ref(0,)
    // current resizing column
    const currentResizingColumn = ref()
    // column resizer handler width
    const columnResizerHandlerWidth = ref(5,)
    // column resizer rect
    const columnResizerRect = reactive({
      top: 0,
      left: 0,
      height: 0,
    },)
    // column min width
    const columnMinWidth = computed(() => {
      let result = 30
      const columnWidthResizeOption = props.columnWidthResizeOption
      if (columnWidthResizeOption) {
        const { minWidth } = columnWidthResizeOption
        if (isNumber(minWidth) && minWidth > 0) {
          result = minWidth
        }
      }
      return result
    },)
    watch(() => props.parentRendered, (val) => {
      if (val) {
        // header cell mousemove
        props.hooks.addHook(
          HOOKS_NAME.HEADER_CELL_MOUSEMOVE,
          ({ event, column }:any) => {
            if (column.disableResizing) return
            initColumnResizerPosition({ event, column })
          },
        )
      }
    }, {
      immediate: true,
    })
    function initColumnResizerPosition({ event, column }:Record<'event'|'column', any>) {
      if (props.tableContainerEl && !props.isColumnResizing) {
        const { left: tableContainerLeft, top: tableContainerTop } = props.tableContainerEl.getBoundingClientRect()

        const col:any = props.colgroups.find((x:any) => x.key === column.key)
        // 表头分组，不支持分组表头列宽拖动
        if (!col) {
          return false
        }

        if (col._realTimeWidth) {
          const target = event.target
          const cellRect = target.getBoundingClientRect()
          const { height, left, top } = cellRect

          columnResizerRect.left = left + col._realTimeWidth - tableContainerLeft
          columnResizerRect.top = top - tableContainerTop
          columnResizerRect.height = height

          currentResizingColumn.value = col
          columnResizerStartX.value = left + col._realTimeWidth
        } else {
          console.warn('Resizer column needs set column width')
        }
      }
    }

    function setColumnResizerPositionByDrag(event:MouseEvent) {
      const tableContainerEl = props.tableContainerEl

      if (tableContainerEl && props.isColumnResizing) {
        const { left: tableContainerLeft } = tableContainerEl.getBoundingClientRect()

        if (props.isColumnResizing && currentResizingColumn.value) {
          // 不允许拖动小于列最小宽度
          const calcWidth = currentResizingColumn.value._realTimeWidth +
          (event.clientX - columnResizerStartX.value)
          if (calcWidth > columnMinWidth.value) {
            columnResizerRect.left = event.clientX - tableContainerLeft
          }
        }
      }
    }

    function columnResizerHandlerMousedown() {
      if (props.isColumnResizerHover) {
        props.setIsColumnResizing(true)

        // add document mousemove listener
        document.addEventListener('mousemove', setColumnResizerPositionByDrag)
        // add document mouseup listener
        document.addEventListener('mouseup', columnResizerMouseup)

        // stop text select when reszing
        document.onselectstart = function () {
          return false
        }
        document.ondragstart = function () {
          return false
        }
      }
    }

    function columnResizerMouseup(event:MouseEvent) {
      if (!props.isColumnResizing || !currentResizingColumn.value) {
        return false
      }

      let differWidth
      // 拖动小于列最小宽度
      const calcWidth = currentResizingColumn.value._realTimeWidth + (event.clientX - columnResizerStartX.value)
      if (calcWidth < columnMinWidth.value) {
        differWidth = columnMinWidth.value - currentResizingColumn.value._realTimeWidth
      } else {
        differWidth = event.clientX - columnResizerStartX.value
      }
      differWidth = Math.floor(differWidth)

      // 偏差阈值，低于则不处理
      if (Math.abs(differWidth) > 1) {
        let nextColumnWidth = currentResizingColumn.value._realTimeWidth
        nextColumnWidth += differWidth

        // set column width
        props.setColumnWidth({
          colKey: currentResizingColumn.value.key,
          width: nextColumnWidth,
        })

        if (props.columnWidthResizeOption) {
          const { sizeChange } = props.columnWidthResizeOption
          sizeChange && sizeChange({
            column: currentResizingColumn.value,
            differWidth,
            columnWidth: nextColumnWidth,
          })
        }
      }

      clearColumnResizerStatus()
      // add document mousemove listener
      document.removeEventListener('mousemove', setColumnResizerPositionByDrag)
      // add document mouseup listener
      document.removeEventListener('mouseup', columnResizerMouseup)
    }

    function clearColumnResizerStatus() {
      currentResizingColumn.value = null
      columnResizerStartX.value = 0
      props.setIsColumnResizerHover(false)
      props.setIsColumnResizing(false)

      // enable text select when reszing
      document.onselectstart = function () {
        return true
      }
      document.ondragstart = function () {
        return true
      }
    }

    const { left, top, height } = columnResizerRect

    const columnResizerHandlerProps = {
      class: {
        [clsName('column-resizer-handler')]: true,
        active: props.isColumnResizerHover || props.isColumnResizing,
      },
      style: {
        left: left - columnResizerHandlerWidth.value + 'px',
        top: top + 'px',
        height: height + 'px',
      },
      onClick: () => {
        //
      },
      onMousedown: () => {
        columnResizerHandlerMousedown()
      },
      onMouseenter: () => {
        props.setIsColumnResizerHover(true)
      },
      onMouseleave: () => {
        props.setIsColumnResizerHover(false)
      },
      onMouseup: (event:MouseEvent) => {
        columnResizerMouseup(event)
      },
    }

    const columnResizerLineProps = {
      class: [clsName('column-resizer-line')],
      style: {
        display: props.isColumnResizing ? 'block' : 'none',
        left: left + 'px',
      },
    }

    return (
      <div class={clsName('column-resizer')}>
        <div {...columnResizerHandlerProps} />
        <div {...columnResizerLineProps} />
      </div>
    )
  },
})
// 317