<template>
    <fan-table
        max-height="calc(100vh - 350px)"
        fixed-header
        :columns="columns"
        :table-data="tableData"
    />
</template>

<script>
export default {
  data() {
    return {
      columns: [
        { field: 'name', key: 'a', title: 'Name', align: 'center' },
        { field: 'date', key: 'b', title: 'Date', align: 'left' },
        {
          field: 'hobby',
          key: 'c',
          title: 'Hobby',
          align: 'center',
        },
        {
          field: 'address',
          key: 'd',
          title: 'Address',
          align: 'left',
        },
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
      for (let i = 0; i < 20; i++) {
        data.push({
          name: i,
          date: i,
          hobby: i,
          address: i,
        })
      }
      this.tableData = data
    },
  },
}
</script>
