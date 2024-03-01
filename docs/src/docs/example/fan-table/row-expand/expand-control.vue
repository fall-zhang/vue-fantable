<template>
    <div>
        <button class="button-demo" @click="expandSwitch(1003)">第3行展开切换</button>
        <button class="button-demo" @click="expandAll()">展开全部</button>
        <button class="button-demo" @click="foldAll()">折叠全部</button>
        <br />
        <br />
        <fan-table
            style="width:100%"
            :columns="columns"
            :table-data="tableData"
            :expand-option="expandOption"
            row-key-field-name="rowKey"
        />
    </div>
</template>

<script lang="jsx">
export default {
  data() {
    return {
      expandOption: {
        expandedRowKeys: [1001], // this.expandRowKeys,
        render: ({ row, column, rowIndex }, h) => {
          return (
            <p>
                                My name is <span style="color:#1890ff;">{row.name}</span>
                                ,I'm living in {row.address}
            </p>
          )
        },
        // 重新赋值处理
        afterExpandRowChange: ({ afterExpandedRowKeys, row, rowIndex }) => {
          this.changeExpandedRowKeys(afterExpandedRowKeys)
        },
      },
      columns: [
        {
          field: '',
          key: 'a',
          // 设置需要显示展开图标的列
          type: 'expand',
          title: '',
          width: 50,
          align: 'center',
        },
        {
          field: 'name',
          key: 'b',
          title: 'Name',
          width: 200,
          align: 'center',
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
      tableData: [
        {
          rowKey: 1001,
          name: 'John',
          date: '1900-05-20',
          hobby: 'coding',
          address: 'No.1 Century Avenue, Shanghai',
        },
        {
          rowKey: 1002,
          name: 'Dickerson',
          date: '1910-06-20',
          hobby: 'coding',
          address: 'No.1 Century Avenue, Beijing',
        },
        {
          rowKey: 1003,
          name: 'Larsen',
          date: '2000-07-20',
          hobby: 'coding and coding repeat',
          address: 'No.1 Century Avenue, Chongqing',
        },
        {
          rowKey: 1004,
          name: 'Geneva',
          date: '2010-08-20',
          hobby: 'coding and coding repeat',
          address: 'No.1 Century Avenue, Xiamen',
        },
        {
          rowKey: 1005,
          name: 'Jami',
          date: '2020-09-20',
          hobby: 'coding and coding repeat',
          address: 'No.1 Century Avenue, Shenzhen',
        },
      ],
    }
  },
  methods: {
    // 给可控属性重新赋值
    changeExpandedRowKeys(keys) {
      this.expandOption.expandedRowKeys = keys
    },
    // 切换展开行
    expandSwitch(key) {
      const rowKeyIndex = this.expandOption.expandedRowKeys.indexOf(key)

      if (rowKeyIndex > -1) {
        this.expandOption.expandedRowKeys.splice(rowKeyIndex, 1)
      } else {
        this.expandOption.expandedRowKeys.push(key)
      }
    },
    // 展开全部
    expandAll() {
      this.expandOption.expandedRowKeys = this.tableData.map((x) => x.rowKey)
    },
    // 折叠全部
    foldAll() {
      this.expandOption.expandedRowKeys = []
    },
  },
}
</script>