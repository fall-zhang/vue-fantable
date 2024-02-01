<template>
    <div>
        <fan-table
            :columns="columns"
            :table-data="tableData"
            border-y
            :cell-autofill-option="cellAutofillOption"
            :edit-option="editOption"
            row-key-field-name="rowKey"
            :row-style-option="rowStyleOption"
        />
    </div>
</template>

<script>
export default {
  data() {
    return {
      rowStyleOption: {
        clickHighlight: false,
        hoverHighlight: false,
      },
      cellAutofillOption: true,
      editOption: {
        // cell value change
        cellValueChange: ({ row, column }) => {},
      },
      columns: [
        {
          field: 'index',
          key: 'index',
          operationColumn: true,
          title: '',
          width: 50,
          align: 'center',
          renderBodyCell: ({ row, column, rowIndex }, h) => {
            return ++rowIndex
          },
          edit: true,
        },
        { field: 'col1', key: 'col1', title: 'Col1', edit: true },
        { field: 'col2', key: 'col2', title: 'Col2' },
        { field: 'col3', key: 'col3', title: 'Col3' },
        { field: 'col4', key: 'col4', title: 'Col4' },
        { field: 'col5', key: 'col5', title: 'Col5' },
        { field: 'col6', key: 'col6', title: 'Col6' },
      ],
      tableData: [],
    }
  },
  created() {
    this.initTableData()
  },
  methods: {
    initTableData() {
      const data = []
      for (let i = 0; i < 8; i++) {
        data.push({
          rowKey: i,
          col1: `A${i + 1}`,
          col2: `B${i + 1}`,
          col3: `C${i + 1}`,
          col4: `D${i + 1}`,
          col5: `E${i + 1}`,
          col6: `F${i + 1}`,
          col7: `G${i + 1}`,
          col8: `H${i + 1}`,
        })
      }
      this.tableData = data
    },
  },
}
</script>
