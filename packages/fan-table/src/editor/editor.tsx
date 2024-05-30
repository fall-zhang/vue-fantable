import { clsName, getFixedTotalWidthByColumnKey } from '../util/index'
import { COMPS_NAME, HOOKS_NAME } from '../util/constant'
import focus from '@P/src/directives/focus.js'
import { autoResize as autoResizeBase } from '@P/src/utils/auto-resize'
import { isEmptyValue, debounce } from '@P/src/utils/index.js'
import { getCaretPosition, setCaretPosition } from '@P/src/utils/dom'
import { computed, defineComponent, nextTick, onMounted, onUnmounted, reactive, ref, watch } from 'vue'
export default defineComponent({
  name: COMPS_NAME.FAN_TABLE_EDIT_INPUT,
  directives: {
    focus,
  },
  props: {
    parentRendered: {
      type: Boolean,
      required: true,
    },
    hooks: {
      type: Object,
      required: true,
    },
    // start input value every time
    inputStartValue: {
      type: [String, Number],
      required: true,
    },
    rowKeyFieldName: {
      type: String,
      default: null,
    },
    tableData: {
      type: Array,
      required: true,
    },
    colgroups: {
      type: Array,
      required: true,
    },
    cellSelectionData: {
      type: Object,
      required: true,
    },
    editingCell: {
      type: Object,
      required: true,
    },
    isCellEditing: {
      type: Boolean,
      required: true,
    },
    // has horizontal scroll bar
    hasXScrollBar: {
      type: Boolean,
      required: true,
    },
    // has vertical scroll bar
    hasYScrollBar: {
      type: Boolean,
      required: true,
    },
    hasRightFixedColumn: {
      type: Boolean,
      required: true,
    },
    scrollBarWidth: {
      type: Number,
      required: true,
    },
  },
  emits: ['editInputValueChange', 'editInputClick', 'editInputCopy', 'editInputPaste', 'editInputCut'],
  setup(props, { emit, expose }) {
    const textareaInputRef = ref()
    // raw cell value
    const rawCellValue = ref('')
    // display textarea
    const displayTextarea = ref(false)
    // virtual scroll overflowViewport
    const overflowViewport = ref(false)
    // textarea element rect
    const textareaRect = ref({
      left: 0,
      top: 0,
    })
    // table element
    const tableEl = ref()
    // cell element
    const containerEl = ref()
    const cellEl = ref()
    const autoResize = ref()
    const isEditCellFocus = ref(false)
    const currentColumn = computed(() => {
      let result = null
      const { currentCell } = props.cellSelectionData

      if (!isEmptyValue(currentCell.rowKey) && !isEmptyValue(currentCell.colKey)) {
        result = props.colgroups.find((x) => x.key === currentCell.colKey)
      }

      return result
    })

    // container class
    const containerClass = computed(() => {
      let result = null

      result = {
        [clsName('edit-input-container')]: true,
        [clsName('edit-input-container-show')]: displayTextarea.value && !overflowViewport.value,
      }

      return result
    },)

    // container style
    const containerStyle = computed(() => {
      let result = {}
      const { top, left } = textareaRect.value

      if (displayTextarea.value && !overflowViewport.value) {
        result = {
          top: top + 'px',
          left: left + 'px',
          height: null,
          // because @ve-fixed-body-cell-index: 10;
          'z-index': currentColumn.value.fixed ? 10 : 0,
          opacity: 1,
        }
      } else {
        result = {
          top: top + 'px',
          left: left + 'px',
          height: '1px',
          'z-index': -1,
          opacity: 0,
        }
      }

      return result
    },)

    // textarea class
    const textareaClass = computed(() => {
      let result = null

      result = {
        [clsName('edit-input')]: true,
      }

      return result
    })
    watch(() => props.parentRendered, (val) => {
      if (val) {
      // fixed #471
        setTableEl()

        // add table container scroll hook
        props.hooks.addHook(HOOKS_NAME.TABLE_CONTAINER_SCROLL, () => {
          if (displayTextarea.value) {
            if (!cellEl.value) {
              setCellEl()
            }
          }
          debounceSetCellEl()
          setTextareaPosition()
          debounce(
            setTextareaPosition,
            210,
          )
        },
        )
        // add table size change hook
        props.hooks.addHook(HOOKS_NAME.TABLE_SIZE_CHANGE, () => {
          setTextareaPosition()
        })
      }
    }, {
      immediate: true,
    })
    // cell selection key data
    watch(() => props.cellSelectionData?.currentCell, (val) => {
      isEditCellFocus.value = false

      const { rowKey, colKey } = val
      if (!isEmptyValue(rowKey) && !isEmptyValue(colKey)) {
        setCellEl()
        // wait for selection cell rendered
        nextTick(() => {
          setTextareaPosition()
          setTimeout(() => {
            isEditCellFocus.value = true
          })
        })
      }
    }, {
      deep: true,
      immediate: true,
    })
    // watch normal end cell
    watch(() => props.cellSelectionData?.normalEndCell, (val) => {
      // trigger editor(textarea) element select
      // 解决通过点击的区域选择，无法复制的问题
      if (!isEmptyValue(val.colKey)) {
        textareaSelect()
      }
    }, {
      deep: true,
      immediate: true,
    })
    // is editing cell
    watch(() => props.isCellEditing, (val) => {
      if (val) {
        showTextarea()
      } else {
        hideTextarea()
      }
    }, {
      deep: true,
      immediate: true,
    })
    watch(() => props.inputStartValue, () => {
      setRawCellValue()
    }, {
      immediate: true,
    })
    // debounce set cell el
    const debounceSetCellEl = debounce(() => {
      if (displayTextarea.value) {
        if (!cellEl.value) {
          setCellEl()
        }
      }
    }, 200)
    onMounted(() => {
      autoResize.value = autoResizeBase()
    })
    onUnmounted(() => {
      textareaUnObserve()
    })

    function setTableEl() {
      nextTick(() => {
        tableEl.value = containerEl.value.previousElementSibling
      })
    }

    function setCellEl() {
      const { rowKey, colKey } = props.cellSelectionData.currentCell

      if (tableEl.value) {
        const queryCellEl = tableEl.value.querySelector(
          `tbody.fan-table-body tr[row-key="${rowKey}"] td[col-key="${colKey}"]`,
        )

        if (queryCellEl) {
          cellEl.value = queryCellEl
          overflowViewport.value = false
        }
      }
    }
    function setTextareaPosition() {
      const column = currentColumn.value

      if (cellEl.value && tableEl.value) {
        const {
          left: tableLeft,
          top: tableTop,
          right: tableRight,
          bottom: tableBottom,
        } = tableEl.value.getBoundingClientRect()

        const {
          left: cellLeft,
          top: cellTop,
          height: cellHeight,
          width: cellWidth,
          right: cellRight,
          bottom: cellBottom,
        } = cellEl.value.getBoundingClientRect()

        if (cellHeight && cellWidth) {
          let maxHeight = cellHeight + tableBottom - cellBottom
          let maxWidth = cellWidth + tableRight - cellRight

          // has horizontal scroll bar
          if (props.hasXScrollBar) {
            maxHeight -= props.scrollBarWidth
          }

          // has vertical scroll bar
          if (props.hasYScrollBar) {
            maxWidth -= props.scrollBarWidth
          }

          // If the right fixed column is included, the max width of the textarea needs to be subtracted from the sum of the right fixed columns
          // 如果包含右固定列，编辑框最大宽度需要去减去右固定列之和的宽度
          if (props.hasRightFixedColumn) {
            if (column && !column.fixed) {
              const rightFixedTotalWidth = getFixedTotalWidthByColumnKey({
                colgroups: props.colgroups,
                colKey: column.key,
                fixed: 'right',
              })
              if (rightFixedTotalWidth) {
                maxWidth -= rightFixedTotalWidth
              }
            }
          }

          autoResize.value.init(
            textareaInputRef.value,
            {
              minHeight: Math.min(cellHeight, maxHeight),
              maxHeight, // TEXTAREA should never be higher than visible part of the viewport (should not cover the scrollbar)
              minWidth: Math.min(cellWidth, maxWidth),
              maxWidth, // TEXTAREA should never be wider than visible part of the viewport (should not cover the scrollbar)
            },
            true, // observe textarea change\cut\paste etc.
          )

          textareaRect.value = {
            left: cellLeft - tableLeft,
            top: cellTop - tableTop,
          }
        } else {
          // 存在以下可能：
          // 1、虚拟滚动超出 viewport
          // 2、单元格被删除（通过右键菜单等方式）
          // fixed #477
          textareaRect.value = {
            left: 0,
            top: 0,
          }
          cellEl.value = null
          overflowViewport.value = true
        }
      }
    }
    function showTextarea() {
      setRawCellValue()
      displayTextarea.value = true
    }
    function hideTextarea() {
      displayTextarea.value = false
      textareaUnObserve()
    }
    // textarea unObserve
    function textareaUnObserve() {
      if (autoResize.value) {
        autoResize.value.unObserve()
      }
    }
    // set raw cell value
    function setRawCellValue() {
      rawCellValue.value = String(props.inputStartValue)
    }
    // textarea value change
    function textareaValueChange(val:string) {
      // emit(EMIT_EVENTS.EDIT_INPUT_VALUE_CHANGE, val)
      emit('editInputValueChange', val)
    }
    // textarea select
    function textareaSelect() {
      const textareaInputEl = textareaInputRef.value
      if (textareaInputEl) {
        textareaInputEl.select()
      }
    }
    // textarea add new line
    function textareaAddNewLine() {
      if (props.isCellEditing) {
        const textareaInputEl = textareaInputRef.value

        const caretPosition = getCaretPosition(textareaInputEl)

        let value = props.editingCell.row[props.editingCell.colKey]
        // solve error of number slice method
        value += ''

        const newValue = `${value.slice(
          0,
          caretPosition,
        )}\n${value.slice(caretPosition)}`

        // 直接更新 textarea 值
        textareaInputEl.value = newValue

        // 手动赋值不会触发textarea 文本变化事件,需要手动更新 editingCell 值
        textareaValueChange(newValue)

        setCaretPosition(textareaInputEl, caretPosition + 1, null)
      }
    }
    const containerProps = reactive({
      style: containerStyle,
      class: containerClass,
    })

    const textareaProps = reactive({
      class: textareaClass,
      value: rawCellValue,
      tabindex: -1,
      onInput: (e:InputEvent) => {
        if (e.target && props.isCellEditing) {
          textareaValueChange(e.target.value)
          rawCellValue.value = e.target.value
        }
      },
      onClick: () => {
        // emit(EMIT_EVENTS.EDIT_INPUT_CLICK)
        emit('editInputClick')
        // emit(EMIT_EVENTS.EDIT_INPUT_CLICK)
      },
      onCopy: (e: ClipboardEvent) => {
        emit('editInputCopy', e)
        // emit(EMIT_EVENTS.EDIT_INPUT_COPY, e)
      },
      onPaste: (e: ClipboardEvent) => {
        emit('editInputPaste', e)
        // emit(EMIT_EVENTS.EDIT_INPUT_PASTE, e)
      },
      onCut: (e: ClipboardEvent) => {
        emit('editInputCut', e)
        // emit(EMIT_EVENTS.EDIT_INPUT_CUT, e)
      },
    })
    expose({
      textareaAddNewLine
    })
    return () => (
      <div ref={containerEl} {...containerProps}>
        <textarea ref={textareaInputRef} {...textareaProps} v-focus={isEditCellFocus.value}
        ></textarea>
      </div>
    )
  },
})
// 526