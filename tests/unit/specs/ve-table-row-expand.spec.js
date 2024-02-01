import { mount } from '@vue/test-utils'
import veTable from '@P/fan-table/fan-table'
import { later } from '../util'
import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest'

describe('veTable row expand', () => {
  const TABLE_DATA = [
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
  ]

  const COLUMNS = [
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
  ]

  it('render', () => {
    const wrapper = mount(veTable, {
      props: {
        columns: COLUMNS,
        tableData: TABLE_DATA,
        expandOption: {
          defaultExpandAllRows: false,
          // 默认需要展开的行
          defaultExpandedRowKeys: [1001, 1003],
          expandable: ({ row, column, rowIndex }) => {
            if (row.rowKey === 1002) {
              return false
            }
          },
        },
        rowKeyFieldName: 'rowKey',
      },
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('trigger type default(icon)', async () => {
    const wrapper = mount(veTable, {
      props: {
        columns: COLUMNS,
        tableData: TABLE_DATA,
        expandOption: {
          render: ({ row, column, rowIndex }, h) => {
            return (
              <p>
                                My name is
                <span style="color:#1890ff;">{row.name}</span>
                                ,I'm living in {row.address}
              </p>
            )
          },
        },
        rowKeyFieldName: 'rowKey',
      },
    })

    // 默认不渲染节点
    expect(wrapper.find('.fan-table-expand-tr').exists()).toBe(false)

    wrapper
      .findAll('.fan-table-body-tr')[0]
      .find('.fan-table-row-expand-icon')
      .trigger('click')

    await later()

    expect(
      wrapper
        .findAll('.fan-table-expand-tr')[0]
        .find('.fan-table-expand-td .fan-table-expand-td-content')
        .exists(),
    ).toBe(true)

    wrapper
      .findAll('.fan-table-body-tr')[0]
      .find('.fan-table-row-expand-icon')
      .trigger('click')

    await later()

    // 折叠后销毁节点
    expect(wrapper.find('.fan-table-expand-tr').exists()).toBe(false)
  })

  it('trigger type:cell', async () => {
    const wrapper = mount(veTable, {
      props: {
        columns: COLUMNS,
        tableData: TABLE_DATA,
        expandOption: {
          trigger: 'cell',
          render: ({ row, column, rowIndex }, h) => {
            return (
              <p>
                                My name is
                <span style="color:#1890ff;">{row.name}</span>
                                ,I'm living in {row.address}
              </p>
            )
          },
        },
        rowKeyFieldName: 'rowKey',
      },
    })

    wrapper
      .findAll('.fan-table-body-tr')[0]
      .findAll('.fan-table-body-td')[0]
      .trigger('click')

    await later()

    expect(
      wrapper
        .findAll('.fan-table-expand-tr')[0]
        .find('.fan-table-expand-td .fan-table-expand-td-content')
        .exists(),
    ).toBe(true)
  })

  it('trigger type:row', async () => {
    const wrapper = mount(veTable, {
      props: {
        columns: COLUMNS,
        tableData: TABLE_DATA,
        expandOption: {
          trigger: 'row',
          render: ({ row, column, rowIndex }, h) => {
            return (
              <p>
                                My name is
                <span style="color:#1890ff;">{row.name}</span>
                                ,I'm living in {row.address}
              </p>
            )
          },
        },
        rowKeyFieldName: 'rowKey',
      },
    })

    wrapper.findAll('.fan-table-body-tr')[0].trigger('click')

    await later()

    expect(
      wrapper
        .findAll('.fan-table-expand-tr')[0]
        .find('.fan-table-expand-td .fan-table-expand-td-content')
        .exists(),
    ).toBe(true)
  })

  it('expandOption expandable', async () => {
    const wrapper = mount(veTable, {
      props: {
        columns: COLUMNS,
        tableData: TABLE_DATA,
        expandOption: {
          expandable: ({ row, column, rowIndex }) => {
            if (row.rowKey === 1002) {
              return false
            }
          },
          render: ({ row, column, rowIndex }, h) => {
            return (
              <p>
                                My name is
                <span style="color:#1890ff;">{row.name}</span>
                                ,I'm living in {row.address}
              </p>
            )
          },
        },
        rowKeyFieldName: 'rowKey',
      },
    })

    expect(
      wrapper
        .findAll('.fan-table-body-tr')[1]
        .find('.fan-table-row-expand-icon')
        .exists(),
    ).toBe(false)
  })

  it('expandOption defaultExpandedRowKeys', async () => {
    const wrapper = mount(veTable, {
      props: {
        columns: COLUMNS,
        tableData: TABLE_DATA,
        expandOption: {
          defaultExpandedRowKeys: [1001, 1003],
          render: ({ row, column, rowIndex }, h) => {
            return (
              <p>
                                My name is
                <span style="color:#1890ff;">{row.name}</span>
                                ,I'm living in {row.address}
              </p>
            )
          },
        },
        rowKeyFieldName: 'rowKey',
      },
    })

    expect(
      wrapper
        .findAll('.fan-table-body-tr')[0]
        .find('.fan-table-row-expand-icon')
        .exists(),
    ).toBe(true)

    expect(
      wrapper
        .findAll('.fan-table-body-tr')[2]
        .find('.fan-table-row-expand-icon')
        .exists(),
    ).toBe(true)
  })

  it('expandOption defaultExpandAllRows', async () => {
    const wrapper = mount(veTable, {
      props: {
        columns: COLUMNS,
        tableData: TABLE_DATA,
        expandOption: {
          defaultExpandAllRows: true,
          render: ({ row, column, rowIndex }, h) => {
            return (
              <p>
                                My name is
                <span style="color:#1890ff;">{row.name}</span>
                                ,I'm living in {row.address}
              </p>
            )
          },
        },
        rowKeyFieldName: 'rowKey',
      },
    })

    expect(wrapper.findAll('.fan-table-row-expand-icon').length).toBe(5)
  })

  it('expandOption beforeExpandRowChange event', async () => {
    const mockFn = vi.fn()

    const wrapper = mount(veTable, {
      props: {
        columns: COLUMNS,
        tableData: TABLE_DATA,
        expandOption: {
          render: ({ row, column, rowIndex }, h) => {
            return (
              <p>
                                My name is
                <span style="color:#1890ff;">{row.name}</span>
                                ,I'm living in {row.address}
              </p>
            )
          },
          beforeExpandRowChange: ({
            beforeExpandedRowKeys,
            row,
            rowIndex,
          }) => {
            if (row.rowKey === 1001) {
              mockFn(false)
              return false
            }
            mockFn(true)
            return true
          },
        },

        rowKeyFieldName: 'rowKey',
      },
    })

    wrapper
      .findAll('.fan-table-body-tr')[0]
      .find('.fan-table-row-expand-icon')
      .trigger('click')
    expect(mockFn).toHaveBeenCalled()
    expect(mockFn).toHaveBeenCalledWith(false)

    await later()
    expect(wrapper.findAll('.fan-table-expand-tr').exists()).toBe(false)

    wrapper
      .findAll('.fan-table-body-tr')[1]
      .find('.fan-table-row-expand-icon')
      .trigger('click')
    expect(mockFn).toHaveBeenCalled()
    expect(mockFn).toHaveBeenCalledWith(true)

    await later()
    expect(
      wrapper
        .findAll('.fan-table-expand-tr')
      // 只要一行[0]
        .find('.fan-table-expand-td .fan-table-expand-td-content')
        .exists(),
    ).toBe(true)
  })

  it('expandOption afterExpandRowChange event', async () => {
    const mockFn = vi.fn()

    const wrapper = mount(veTable, {
      props: {
        columns: COLUMNS,
        tableData: TABLE_DATA,
        expandOption: {
          render: ({ row, column, rowIndex }, h) => {
            return (
              <p>
                                My name is
                <span style="color:#1890ff;">{row.name}</span>
                                ,I'm living in {row.address}
              </p>
            )
          },
          afterExpandRowChange: ({
            afterExpandedRowKeys,
            row,
            rowIndex,
          }) => {
            mockFn()
          },
        },

        rowKeyFieldName: 'rowKey',
      },
    })

    wrapper
      .findAll('.fan-table-body-tr')[0]
      .find('.fan-table-row-expand-icon')
      .trigger('click')
    expect(mockFn).toHaveBeenCalled()
  })

  it('expandOption expandedRowKeys(controllable attr)', async () => {
    const mockFn = vi.fn()

    const wrapper = mount({
      template: `
            <div>
                <button class="button-demo" @click="expandRow(1003)">第3行展开切换</button>
                <fan-table
                style="width:100%"
                :columns="columns"
                :table-data="tableData"
                :expand-option="expandOption"
                row-key-field-name="rowKey"
                />
            </div>
            `,
      data() {
        return {
          expandOption: {
            expandedRowKeys: [1001], // this.expandRowKeys,
            render: ({ row, column, rowIndex }, h) => {
              return (
                <p>
                                    My name is
                  <span style="color:#1890ff;">
                    {row.name}
                  </span>
                                    ,I'm living in {row.address}
                </p>
              )
            },
            // 重新赋值处理
            afterExpandRowChange: ({
              afterExpandedRowKeys,
              row,
              rowIndex,
            }) => {
              mockFn(afterExpandedRowKeys)
              this.changeExpandedRowKeys(afterExpandedRowKeys)
            },
          },
          columns: COLUMNS,
          tableData: TABLE_DATA,
        }
      },
      methods: {
        // 给可控属性重新赋值
        changeExpandedRowKeys(keys) {
          this.expandOption.expandedRowKeys = keys
          mockFn(keys)
        },
        // 切换展开行
        expandRow(key) {
          this.expandOption.expandedRowKeys.push(key)
        },
      },
    })

    expect(
      wrapper
        .findAll('.fan-table-expand-tr')[0]
        .find('.fan-table-expand-td .fan-table-expand-td-content')
        .exists(),
    ).toBe(true)

    wrapper.find('.button-demo').trigger('click')

    await later()

    expect(
      wrapper
        .findAll('.fan-table-expand-tr')[1]
        .find('.fan-table-expand-td .fan-table-expand-td-content')
        .exists(),
    ).toBe(true)

    wrapper
      .findAll('.fan-table-body-tr')[1]
      .find('.fan-table-row-expand-icon')
      .trigger('click')

    await later()

    expect(mockFn).toHaveBeenCalled()
    expect(mockFn).toHaveBeenCalledWith([1001, 1003, 1002])
    expect(wrapper.html()).toMatchSnapshot()
  })
})
