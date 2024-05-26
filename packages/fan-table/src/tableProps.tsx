export function tableProps() {
  return {
    // 接管模式，数据交给 fan-table 处理
    takeoverMode: {
      required: false,
      type: Boolean,
      default: false
    },
    tableData: {
      required: true,
      type: Array,
      default: () => ([])
    },
    footerData: {
      type: Array,
      default: function () {
        return []
      },
    },
    showHeader: {
      type: Boolean,
      default: true,
    },
    columns: {
      type: Array,
      required: true,
    },
    // row key field for row expand、row selection
    rowKeyFieldName: {
      type: String,
      default: null,
    },
    // table scroll width
    scrollWidth: {
      type: [Number, String],
      default: null,
    },
    // table max height
    maxHeight: {
      type: [Number, String],
      default: null,
    },
    // fixed header
    fixedHeader: {
      type: Boolean,
      default: true,
    },
    // fixed footer
    fixedFooter: {
      type: Boolean,
      default: true,
    },
    // border around
    borderAround: {
      type: Boolean,
      default: true,
    },
    // border horizontal
    borderX: {
      type: Boolean,
      default: true,
    },
    // border vertical
    borderY: {
      type: Boolean,
      default: false,
    },
    // event custom option
    eventCustomOption: {
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
    // cell span option
    cellSpanOption: {
      type: Object,
      default: function () {
        return null
      },
    },
    // row style option
    rowStyleOption: {
      type: Object,
      default: function () {
        return null
      },
    },
    virtualScrollOption: {
      type: Object,
      default: null,
    //   {
    //     enable:true,
    //     bufferCount:10, // 缓冲的数据
    //     minRowHeight:40,
    //     scrolling:(startRowIndex,visibleStartIndex,visibleEndIndex,visibleAboveCount,visibleBelowCount)=>{}
    // }
    },
    // sort option
    sortOption: {
      type: Object,
      default: function () {
        return null
      },
    },
    // expand row option
    expandOption: {
      type: Object,
      default: function () {
        return null
      },
    },
    checkboxOption: {
      type: Object,
      default: function () {
        return null
      },
    },
    radioOption: {
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
    // cell autofill option
    cellAutofillOption: {
      type: [Object, Boolean],
      default: function () {
        // {
        //   beforeAutofill()
        //   afterAutofill()
        // }
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
    // column hidden option
    columnHiddenOption: {
      type: Object,
      default: function () {
        return null
      },
    },
    // contextmenu header option
    contextmenuHeaderOption: {
      type: Object,
      default: function () {
        return null
      },
    },
    // contextmenu body option
    contextmenuBodyOption: {
      type: Object,
      default: function () {
        return null
      },
    },
    // clipboard option
    clipboardOption: {
      type: Object,
      default: function () {
        return null
      },
    },
    // column width resize option
    columnWidthResizeOption: {
      type: Object,
      default: function () {
        return null
      },
    },
  }
}