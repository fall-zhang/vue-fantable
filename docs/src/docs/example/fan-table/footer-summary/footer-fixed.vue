<template>
    <fan-table
        border-y
        fixed-header
        :max-height="300"
        :columns="columns"
        :table-data="tableData"
        :footer-data="footerData"
        :fixed-footer="false"
        row-key-field-name="rowKey"
    />
</template>

<script>
export default {
  data() {
    return {
      columns: [
        {
          field: 'name',
          key: 'a',
          title: 'Name',
          align: 'center',
          width: 200,
        },
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
          width: 200,
        },
      ],
      tableData: [],
      footerData: [],
    }
  },
  created() {
    this.initTableData()
    this.initFooterData()
  },
  methods: {
    initTableData() {
      const data = []
      for (let i = 0; i < 15; i++) {
        data.push({
          rowKey: i,
          name: i,
          date: i,
          hobby: i,
          address: i,
        })
      }
      this.tableData = data
    },

    initFooterData() {
      this.footerData = [
        {
          rowKey: 0,
          name: '平均值',
          date: 213,
          hobby: 355,
          address: 189,
        },
        {
          rowKey: 1,
          name: '汇总值',
          date: 1780,
          hobby: 890,
          address: 2988,
        },
      ]
    },
  },
}
</script>
