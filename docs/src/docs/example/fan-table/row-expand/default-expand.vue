<template>
    <fan-table
        style="width:100%"
        :columns="columns"
        :table-data="tableData"
        :expand-option="expandOption"
        row-key-field-name="rowKey"
    />
</template>

<script lang="jsx">
export default {
  data() {
    return {
      expandOption: {
        defaultExpandAllRows: false,
        // 默认需要展开的行
        defaultExpandedRowKeys: [1001, 1003],
        expandable: ({ row, column, rowIndex }) => {
          if (row.rowKey === 1002) {
            return false
          }
        },
        // render 函数
        render: ({ row, column, rowIndex }, h) => {
          return (
            <p>
                                My name is <span style="color:#1890ff;">{row.name}</span>
                                ,I'm living in {row.address}
            </p>
          )
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
}
</script>