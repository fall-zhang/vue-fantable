<template>
  <div>
    <div style="margin-bottom:20px;line-height:3.0;">
      <el-button type="primary" @click="scrollY(1000)">垂直滚动到 1000px</el-button>
      <el-button type="primary" @click="scrollY(500)">垂直滚动到 500px</el-button>
      <el-button type="primary" @click="scrollY(0)">垂直滚动到 0px</el-button>
      <el-button type="primary" @click="scrollX(500)">水平滚动到 300px</el-button>
      <el-button type="primary" @click="scrollX(300)">水平滚动到 200px</el-button>
      <el-button type="primary" @click="scrollX(0)">水平滚动到 0px</el-button>
    </div>
    <fan-table ref="tableRef" style="width:1000px" :scroll-width="1600" :max-height="350" border-y :columns="columns"
      :table-data="tableData" row-key-field-name="rowKey" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      columns: [
        {
          field: 'col1',
          key: 'a',
          title: 'col1',
          width: 50,
          fixed: 'left',
        },
        {
          title: 'col2-col3',
          fixed: 'left',
          children: [
            {
              field: 'col2',
              key: 'b',
              title: 'col2',
              width: 50,
            },
            {
              field: 'col3',
              key: 'c',
              title: 'col3',
              width: 50,
            },
          ],
        },
        {
          title: 'col4-col5-col6',
          children: [
            {
              title: 'col4-col5',
              children: [
                {
                  field: 'col4',
                  key: 'd',
                  title: 'col4',
                  width: 130,
                },
                {
                  field: 'col5',
                  key: 'e',
                  title: 'col5',
                  width: 140,
                },
              ],
            },
            {
              title: 'col6',
              field: 'col6',
              key: 'f',
              width: 140,
            },
          ],
        },
        {
          title: 'col7',
          fixed: 'right',
          children: [
            {
              title: 'col7-1',
              field: 'col7',
              key: 'g',
              width: 50,
            },
          ],
        },
        {
          field: 'col8',
          key: 'h',
          title: 'col8',
          width: 50,
          fixed: 'right',
        },
      ],
    }
  },
  created() {
    this.initTableData()
  },
  methods: {
    initTableData() {
      const data = []
      for (let i = 0; i < 80; i++) {
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
        })
      }
      this.tableData = data
    },
    // scroll y
    scrollY(val) {
      this.$refs.tableRef.scrollTo({ top: val, behavior: 'smooth' })
    },
    // scroll x
    scrollX(val) {
      this.$refs.tableRef.scrollTo({ left: val, behavior: 'smooth' })
    },
  },
}
</script>
