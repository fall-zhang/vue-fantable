<template>
    <div>
        <fan-table
            :max-height="500"
            :virtual-scroll-option="virtualScrollOption"
            :columns="columns"
            :table-data="tableData"
            row-key-field-name="rowKey"
        />
    </div>
</template>

<script>
export default {
  data() {
    return {
      virtualScrollOption: {
        // 是否开启
        enable: true,
      },
      columns: [
        {
          field: 'index',
          key: 'a',
          title: '#',
          width: 100,
          align: 'left',
        },
        {
          field: 'name',
          key: 'b',
          title: 'Name',
          width: 200,
          align: 'left',
        },
        {
          field: 'hobby',
          key: 'c',
          title: 'Hobby',
          width: 300,
          align: 'left',
        },
        {
          field: 'address',
          key: 'd',
          title: 'Address',
          width: '',
          align: 'left',
        },
      ],
      tableData: [],
    }
  },
  created() {
    this.initData()
  },
  methods: {
    initData() {
      const data = []
      for (let i = 0; i < 10000; i++) {
        data.push({
          rowKey: i,
          index: i,
          name: `name${i}`,
          hobby: `hobby${i}`,
          address: `address${i}`,
        })
      }

      this.tableData = data
    },
  },
}
</script>
