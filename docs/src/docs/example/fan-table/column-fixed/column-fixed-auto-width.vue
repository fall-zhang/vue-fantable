<template>
  <fan-table :scroll-width="1600" border-y :columns="columns" :table-data="tableData" row-key-field-name="rowKey" />
</template>

<script>
export default {
  data() {
    return {
      columns: [
        { field: 'col1', key: 'a', title: 'Title1', fixed: 'left' },
        { field: 'col2', key: 'b', title: 'Title2', fixed: 'left' },
        { field: 'col3', key: 'c', title: 'Title3' },
        { field: 'col4', key: 'd', title: 'Title4' },
        { field: 'col5', key: 'e', title: 'Title5' },
        { field: 'col6', key: 'f', title: 'Title6' },
        { field: 'col7', key: 'g', title: 'Title7' },
        { field: 'col8', key: 'h', title: 'Title8' },
        { field: 'col9', key: 'i', title: 'Title9', fixed: 'right', },
        { field: 'col10', key: 'j', title: 'Title10', fixed: 'right', },
      ],
    }
  },
  created() {
    this.initTableData()
  },
  methods: {
    initTableData() {
      const data = []
      for (let i = 0; i < 10; i++) {
        data.push({
          rowKey: i,
          col1: i,
          col2: i,
          col3: i,
          col4: i,
          col5: i,
          col6: i,
          col7: i,
          col8: i,
          col9: i,
          col10: i,
        })
      }
      this.tableData = data
    },
  },
}
</script>
