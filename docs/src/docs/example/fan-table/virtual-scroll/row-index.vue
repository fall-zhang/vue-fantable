<template>
  <div>
    <el-input v-model="searchValue" style="width:250px" placeholder="search name"></el-input>
    <el-button type="primary" @click="search">Search</el-button>
    <br />
    <br />
    <fan-table :max-height="500" :virtual-scroll-option="virtualScrollOption" :columns="columns" :table-data="tableData"
      row-key-field-name="rowKey" />
  </div>
</template>

<script lang="jsx">
import Mock from 'mockjs'
export default {
  data() {
    return {
      // search value
      searchValue: '',
      // start row index
      startRowIndex: 0,
      virtualScrollOption: {
        // 是否开启
        enable: true,
        scrolling: this.scrolling,
      },
      // columns
      columns: [
        {
          field: 'index',
          key: 'index',
          title: '#',
          width: 200,
          align: 'left',
          renderBodyCell: this.renderRowIndex,
        },
        {
          field: 'name',
          key: 'name',
          title: 'Name',
          width: 200,
          align: 'left',
        },
        {
          field: 'hobby',
          key: 'hobby',
          title: 'Hobby',
          width: 300,
          align: 'left',
        },
        {
          field: 'address',
          key: 'address',
          title: 'Address',
          width: '',
          align: 'left',
        },
      ],
      // real table data
      tableData: [],
      // source data
      sourceData: [],
    }
  },
  created() {
    this.initData()
  },
  methods: {
    // virtual scrolling
    scrolling({
      startRowIndex,
      visibleStartIndex,
      visibleEndIndex,
      visibleAboveCount,
      visibleBelowCount,
    }) {
      this.startRowIndex = startRowIndex
      console.log('startRowIndex::', startRowIndex)
      console.log('visibleStartIndex::', visibleStartIndex)
      console.log('visibleEndIndex::', visibleEndIndex)
      console.log('visibleAboveCount::', visibleAboveCount)
      console.log('visibleBelowCount::', visibleBelowCount)
    },
    // render row index
    renderRowIndex({ row, column, rowIndex }) {
      return (
        <span class="text-bold" style="color:#1890ff;">
          {rowIndex + this.startRowIndex + 1}
        </span>
      )
    },

    // search
    search() {
      const searchValue = this.searchValue
      this.tableData = this.sourceData.filter(
        (x) =>
          !searchValue.length ||
          x.name.toLowerCase().includes(searchValue.toLowerCase()),
      )
    },

    initData() {
      const data = []
      for (let i = 0; i < 1000; i++) {
        data.push({
          rowKey: i,
          name: Mock.Random.name(),
          hobby: `hobby`,
          address: `address`,
        })
      }

      this.sourceData = data
      this.tableData = this.sourceData.slice(0)
    },
  },
}
</script>
