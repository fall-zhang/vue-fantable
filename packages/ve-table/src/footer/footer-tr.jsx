import FooterTd from './footer-td.jsx'
import { clsName } from '../util/index.js'
import { COMPS_NAME, COMPS_CUSTOM_ATTRS } from '../util/constant'
import VueDomResizeObserver from '../../../src/comps/resize-observer/index'
import emitter from '../../../src/mixins/emitter'
import { GLOBAL_EVENT } from '@P/events/global-events.js'
import eventCenter from '@P/events/event-center.js'
export default {
  name: COMPS_NAME.VE_TABLE_BODY_TR,
  mixins: [emitter],
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
    // event custom option
    eventCustomOption: {
      type: Object,
      default: function () {
        return null
      },
    },
    // cell selection key data
    cellSelectionData: {
      type: Object,
      default: function () {
        return null
      },
    },
    // footer rows
    footerRows: {
      type: Array,
      default: function () {
        return []
      },
    },
    // fixed footer
    fixedFooter: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    // current row key
    currentRowKey() {
      const { rowKeyFieldName } = this
      return rowKeyFieldName ? this.rowData[rowKeyFieldName] : null
    },
    // tr class
    trClass() {
      let result = null

      result = {
        [clsName('footer-tr')]: true,
      }

      return result
    },
  },

  methods: {
    // tr height change
    trHeightChange({ height }) {
      eventCenter.emit(GLOBAL_EVENT.FOOTER_ROW_HEIGHT_CHANGE,
        {
          rowIndex: this.rowIndex,
          height,
        },
      )
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
      colgroups,
      rowKeyFieldName,
      rowIndex,
      rowData,
      cellStyleOption,
      eventCustomOption,
    } = this

    // get td content
    const getTdContent = () => {
      return colgroups.map((column) => {
        const tdProps = {
          key: column.key,
          rowIndex,
          rowData,
          column,
          colgroups,
          rowKeyFieldName,
          cellStyleOption,
          cellSelectionData: this.cellSelectionData,
          footerRows: this.footerRows,
          fixedFooter: this.fixedFooter,
          cellSpanOption: this.cellSpanOption,
          eventCustomOption: this.eventCustomOption,
        }
        return <FooterTd {...tdProps} />
      })
    }

    // custom on row event
    let customEvents = {}
    if (eventCustomOption) {
      const { footerRowEvents } = eventCustomOption
      customEvents = footerRowEvents
        ? footerRowEvents({ row: rowData, rowIndex })
        : {}
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

    const props = {
      class: this.trClass,
      tagName: 'tr',
      [COMPS_CUSTOM_ATTRS.BODY_ROW_KEY]: this.currentRowKey,
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
      onDomResizeChange: this.trHeightChange,
    }

    return (
      <VueDomResizeObserver {...props}>
        {getTdContent()}
      </VueDomResizeObserver>
    )
  },
}
