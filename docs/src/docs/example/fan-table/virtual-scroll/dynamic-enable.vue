<template>
  <div>
    <el-button type="primary" @click="switchVirtual(1)">开启虚拟滚动</el-button>
    <el-button type="primary" @click="switchVirtual(0)">禁用虚拟滚动</el-button>
    <br />
    <br />
    <div>虚拟滚动状态：{{ virtualScrollOption.enable ? "已开启" : "已禁用" }}</div>
    <br />
    <fan-table :max-height="500" :virtual-scroll-option="virtualScrollOption" :columns="columns" :table-data="tableData"
      row-key-field-name="rowKey" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      virtualScrollOption: {
        // 是否开启
        enable: false,
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

  mounted() {
    this.createTableData()
  },
  methods: {
    // switch virtual scroll
    switchVirtual(enable) {
      this.virtualScrollOption.enable = !!enable
    },
    // createTableData
    createTableData() {
      const data = []
      for (let i = 0; i < 100; i++) {
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
