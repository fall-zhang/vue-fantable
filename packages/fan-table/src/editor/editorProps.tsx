export const editorProps = function() {
  return {
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
    // table data
    tableData: {
      type: Array,
      required: true,
    },
    colgroups: {
      type: Array,
      required: true,
    },
    // cell selection option
    cellSelectionData: {
      type: Object,
      required: true,
    },
    // editing cell
    editingCell: {
      type: Object,
      required: true,
    },
    // is editing cell
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
    // has right fixed column
    hasRightFixedColumn: {
      type: Boolean,
      required: true,
    },
    scrollBarWidth: {
      type: Number,
      required: true,
    },
  }
}