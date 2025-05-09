import { clsName } from '../util/index.js'
import { COMPS_NAME, COMPS_CUSTOM_ATTRS } from '../util/constant'
import { isEmptyValue } from '@P/src/utils/index.js'
import BodyTd from './body-td'
import VueDomResizeObserver from '@P/src/components/resize-observer/resize-observer'
import { GLOBAL_EVENT } from '@P/events/global-events.js'
import { VueElement, computed, defineComponent, inject, reactive } from 'vue'
import { EventType } from 'mitt'
export default defineComponent({
  name: COMPS_NAME.FAN_TABLE_BODY_TR,
  components: { BodyTd },
  props: {
    rowData: {
      type: Object,
      required: true,
    },
    rowIndex: {
      type: Number,
      required: true,
    },
    colgroups: {
      type: Array,
      required: true,
    },
    columnCollection: {
      type: Array,
      required: true,
    },
    rowKeyFieldName: {
      type: String,
      default: null,
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
    // is expand row
    isExpandRow: {
      type: Boolean,
      required: true,
    },
    // expanded row keys
    expandedRowkeys: {
      type: Array,
      default: function () {
        return []
      },
    },
    // expand row change
    expandRowChange: {
      type: Function,
      default: null,
    },

    // checkbox
    checkboxOption: {
      type: Object,
      default: function () {
        return null
      },
    },
    internalCheckboxSelectedRowKeys: {
      type: Array,
      default: function () {
        return null
      },
    },
    // radio
    radioOption: {
      type: Object,
      default: function () {
        return null
      },
    },
    internalRadioSelectedRowKey: {
      type: [String, Number],
      default: null,
    },
    // is virtual scroll
    isVirtualScroll: {
      type: Boolean,
      default: false,
    },
    // cell style option
    cellStyleOption: {
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
    // cell span option
    cellSpanOption: {
      type: Object,
      default: function () {
        return null
      },
    },
    // edit opttion
    editOption: {
      type: Object,
      default: function () {
        return null
      },
    },
  },
  setup(props) {
    const eventCenter = inject<Record<EventType, any>>('eventCenter')!
    const currentRowKey = computed(() => {
      const rowKeyFieldName = props.rowKeyFieldName
      return rowKeyFieldName ? props.rowData[rowKeyFieldName] : null
    })
    // methods start
    // tr class
    const trClass = computed(() => {
      let result = null
      let isHighlight = false

      if (!isEmptyValue(props.highlightRowKey)) {
        if (props.highlightRowKey === currentRowKey.value) {
          isHighlight = true
        }
      }
      result = {
        [clsName('body-tr')]: true,
        [clsName('tr-highlight')]: isHighlight,
      }

      return result
    })
    // click
    function rowClick(e, fn) {
      fn && fn(e)
      const rowInfo = {
        rowData: props.rowData,
        rowIndex: props.rowIndex,
      }
      eventCenter.emit(GLOBAL_EVENT.BODY_ROW_CLICK,
        rowInfo
      )
    }
    // dblclick
    function rowDblclick(e, fn) {
      fn && fn(e)
    }
    // contextmenu
    function rowContextmenu(e, fn) {
      fn && fn(e)
    }
    // mouseenter
    function rowMouseenter(e, fn) {
      fn && fn(e)
    }
    // mouseleave
    function rowMouseleave(e, fn) {
      fn && fn(e)
    }
    // mousemove
    function rowMousemove(e, fn) {
      fn && fn(e)
    }
    // mouseover
    function rowMouseover(e, fn) {
      fn && fn(e)
    }
    // mousedown
    function rowMousedown(e, fn) {
      fn && fn(e)
    }
    // mouseup
    function rowMouseup(e, fn) {
      fn && fn(e)
    }
    // methods end
    const TdContent = () => <>
      {
        props.colgroups.map((column:any) => {
          const tdProps = reactive({
            key: column.key,
            rowIndex: props.rowIndex,
            rowData: props.rowData,
            column,
            columnCollection: props.columnCollection,
            colgroups: props.colgroups,
            expandOption: props.expandOption,
            expandedRowkeys: props.expandedRowkeys,
            checkboxOption: props.checkboxOption,
            rowKeyFieldName: props.rowKeyFieldName,
            allRowKeys: props.allRowKeys,
            isExpandRow: props.isExpandRow,
            internalCheckboxSelectedRowKeys: props.internalCheckboxSelectedRowKeys,
            internalRadioSelectedRowKey: props.internalRadioSelectedRowKey,
            radioOption: props.radioOption,
            cellStyleOption: props.cellStyleOption,
            cellSpanOption: props.cellSpanOption,
            eventCustomOption: props.eventCustomOption,
            cellSelectionData: props.cellSelectionData,
            cellSelectionRangeData: props.cellSelectionRangeData,
            bodyIndicatorRowKeys: props.bodyIndicatorRowKeys,
            editOption: props.editOption,
            // const onExpandRowChange= EMIT_EVENTS.EXPAND_ROW_CHANGE
            onExpandRowChange: () => props.expandRowChange(props.rowData, props.rowIndex),
          })
          return <BodyTd {...tdProps} />
        })
      }
    </>

    let result = null

    // custom on row event
    let customEvents = {}
    if (props.eventCustomOption) {
      const { bodyRowEvents } = props.eventCustomOption
      customEvents = bodyRowEvents ? bodyRowEvents({ row: props.rowData, rowIndex: props.rowIndex }) : {}
    }

    const {
      click,
      dblclick,
      contextmenu,
      mouseenter,
      mouseleave,
      mousemove,
      mouseover,
      mousedown,
      mouseup,
    } = customEvents

    const events = {
      onClick: (e:MouseEvent) => rowClick(e, click),
      onDblclick: (e:MouseEvent) => rowDblclick(e, dblclick),
      onContextmenu: (e) => rowContextmenu(e, contextmenu),
      onMouseenter: (e) => rowMouseenter(e, mouseenter),
      onMouseleave: (e) => rowMouseleave(e, mouseleave),
      onMousemove: (e) => rowMousemove(e, mousemove),
      onMouseover: (e) => rowMouseover(e, mouseover),
      onMousedown: (e) => rowMousedown(e, mousedown),
      onMouseup: (e) => rowMouseup(e, mouseup)
    }
    if (props.isVirtualScroll) {
      const vDOMProps = reactive({
        class: trClass,
        tagName: 'tr',
        id: currentRowKey,
        'row-key': currentRowKey,
        onDomResizeChange: ({ key, height }) => {
          eventCenter.emit(GLOBAL_EVENT.BODY_ROW_HEIGHT_CHANGE,
            {
              rowKey: key,
              height,
            },
          )
        },
        ...events,
      })

      result = (
        <VueDomResizeObserver {...vDOMProps}>
          <TdContent></TdContent>
        </VueDomResizeObserver>
      )
    } else {
      const trProps = reactive({
        class: trClass,
        'row-key': currentRowKey,
        ...events,
      })

      result = <tr {...trProps}>
        <TdContent></TdContent>
      </tr>
    }
    return () => result
  }
})
// 348