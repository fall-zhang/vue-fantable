import HeaderTh from './header-th.jsx'
import { clsName, getDomResizeObserverCompKey } from '../util/index.js'
import { COMPS_NAME } from '../util/constant'
import VueDomResizeObserver from '@P/src/components/resize-observer/index.js'
// import eventCenter from '@P/events/event-center.js'
import { GLOBAL_EVENT } from '@P/events/global-events.js'
export default {
  name: COMPS_NAME.FAN_TABLE_THADER_TR,
  components: {
    VueDomResizeObserver,
    HeaderTh
  },
  inject: ['eventCenter'],
  props: {
    columnsOptionResetTime: {
      type: Number,
      default: 0,
    },
    // group columns item
    groupColumn: {
      type: Array,
      required: true,
    },
    headerRows: {
      type: Array,
      default: function () {
        return []
      },
    },
    colgroups: {
      type: Array,
      required: true,
    },
    fixedHeader: {
      type: Boolean,
      required: true,
    },
    isGroupHeader: {
      type: Boolean,
      required: true,
    },
    rowIndex: {
      type: Number,
      required: true,
    },
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
    headerIndicatorColKeys: {
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
    // sort option
    sortOption: {
      type: Object,
      default: function () {
        return null
      },
    },
    // sort columns
    sortColumns: {
      type: Object,
      default: function () {
        return null
      },
    },
    // cell style option
    cellStyleOption: {
      type: Object,
      default: function () {
        return null
      },
    },
    // event custom option
    eventCustomOption: {
      type: Object,
      default: function () {
        return null
      },
    },
  },
  methods: {
    // tr height change
    trHeightChange({ height }) {
      this.eventCenter.emit(GLOBAL_EVENT.HEADER_ROW_HEIGHT_CHANGE, {
        rowIndex: this.rowIndex,
        height,
      })
    },
    // click
    rowClick(e, fn) {
      fn && fn(e)
    },
    // dblclick
    rowDblclick(e, fn) {
      fn && fn(e)
    },
    // contextmenu
    rowContextmenu(e, fn) {
      fn && fn(e)
    },
    // mouseenter
    rowMouseenter(e, fn) {
      fn && fn(e)
    },
    // mouseleave
    rowMouseleave(e, fn) {
      fn && fn(e)
    },
    // mousemove
    rowMousemove(e, fn) {
      fn && fn(e)
    },
    // mouseover
    rowMouseover(e, fn) {
      fn && fn(e)
    },
    // mousedown
    rowMousedown(e, fn) {
      fn && fn(e)
    },
    // mouseup
    rowMouseup(e, fn) {
      fn && fn(e)
    },
  },
  render() {
    const {
      groupColumn,
      colgroups,
      headerRows,
      fixedHeader,
      rowIndex,
      trHeightChange,
      checkboxOption,
      sortOption,
      sortColumns,
      cellStyleOption,
      eventCustomOption,
      cellSelectionData,
    } = this

    // custom on cell event
    let customEvents = {}
    if (eventCustomOption) {
      const { headerRowEvents } = eventCustomOption
      customEvents = headerRowEvents ? headerRowEvents({ rowIndex }) : {}
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

    const trProps = {
      key: getDomResizeObserverCompKey(
        rowIndex,
        this.columnsOptionResetTime,
      ),
      class: clsName('header-tr'),
      tagName: 'tr',
      onDomResizeChange: trHeightChange,
      onClick: (e) => {
        this.rowClick(e, click)
      },
      onDblclick: (e) => {
        this.rowDblclick(e, dblclick)
      },
      onContextmenu: (e) => {
        this.rowContextmenu(e, contextmenu)
      },
      onMouseenter: (e) => {
        this.rowMouseenter(e, mouseenter)
      },
      onMouseleave: (e) => {
        this.rowMouseleave(e, mouseleave)
      },
      onMousemove: (e) => {
        this.rowMousemove(e, mousemove)
      },
      onMouseover: (e) => {
        this.rowMouseover(e, mouseover)
      },
      onMousedown: (e) => {
        this.rowMousedown(e, mousedown)
      },
      onMouseup: (e) => {
        this.rowMouseup(e, mouseup)
      },
    }
    return (
      <VueDomResizeObserver {...trProps} >
        {groupColumn.map((groupColumnItem) => {
          // th props
          const thProps = {
            key: groupColumnItem.key,
            groupColumn,
            groupColumnItem,
            colgroups,
            headerRows,
            fixedHeader,
            isGroupHeader: this.isGroupHeader,
            rowIndex,
            checkboxOption,
            sortOption,
            sortColumns,
            cellStyleOption,
            eventCustomOption: this.eventCustomOption,
            cellSelectionData,
            cellSelectionRangeData: this.cellSelectionRangeData,
            headerIndicatorColKeys: this.headerIndicatorColKeys,
          }

          return <HeaderTh {...thProps} />
        })}
      </VueDomResizeObserver>
    )
  },
}
