export function bodyProps() {
  return {
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
      default: () => ([])
    },
    actualRenderTableData: {
      type: Array,
      required: true,
    },
    // 没有使用的属性
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
      default () {
        return {
          expandedRowKeys: ''
        }
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
  }
}