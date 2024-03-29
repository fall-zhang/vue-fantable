import { mount } from '@vue/test-utils'
import FanTable from '@P/fan-table/fan-table'
import { later } from '../util'
import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest'
globalThis.ResizeObserver = class ResizeObserver {
  observe() {
    // do nothing
  }

  unobserve() {
    // do nothing
  }

  disconnect() {
    // do nothing
  }
}
describe('FanTable row checkbox', () => {
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
      // type=checkbox
      type: 'checkbox',
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
    const wrapper = mount(FanTable, {
      props: {
        columns: COLUMNS,
        tableData: TABLE_DATA,
        checkboxOption: {},
        rowKeyFieldName: 'rowKey',
      },
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('has checkbox', () => {
    const wrapper = mount(FanTable, {
      props: {
        columns: COLUMNS,
        tableData: TABLE_DATA,
        checkboxOption: {},
        rowKeyFieldName: 'rowKey',
      },
    })

    expect(wrapper.find('.fan-table-header-tr .ve-checkbox').exists()).toBe(
      true,
    )
    expect(wrapper.find('.fan-table-body-tr .ve-checkbox').exists()).toBe(
      true,
    )
  })

  it('check default selected key', async () => {
    const wrapper = mount(FanTable, {
      props: {
        columns: COLUMNS,
        tableData: TABLE_DATA,
        checkboxOption: {
          defaultSelectedRowKeys: [1001, 1003, 1004],
        },
        rowKeyFieldName: 'rowKey',
      },
    })

    await later()

    expect(
      wrapper
        .find(
          '.fan-table-header-tr .ve-checkbox .ve-checkbox-indeterminate',
        )
        .exists(),
    ).toBe(true)

    // checked count
    expect(
      wrapper.findAll(
        '.fan-table-body-tr .ve-checkbox .ve-checkbox-checked',
      ).length,
    ).toBe(3)
  })

  it('check disable selected keys with defaultSelectedRowKeys', async () => {
    const wrapper = mount(FanTable, {
      props: {
        columns: COLUMNS,
        tableData: TABLE_DATA,
        checkboxOption: {
          // 禁用的选择（禁止勾选或者禁止取消勾选）
          disableSelectedRowKeys: [1002, 1005],
          // 默认选择
          defaultSelectedRowKeys: [1001, 1003, 1004, 1005],
        },
        rowKeyFieldName: 'rowKey',
      },
    })

    await later()

    expect(
      wrapper
        .find(
          '.fan-table-header-tr .ve-checkbox .ve-checkbox-indeterminate',
        )
        .exists(),
    ).toBe(true)

    // checked count
    expect(
      wrapper.findAll(
        '.fan-table-body-tr .ve-checkbox .ve-checkbox-checked',
      ).length,
    ).toBe(4)

    // disable checked count
    expect(
      wrapper.findAll(
        '.fan-table-body-tr .ve-checkbox .ve-checkbox-checked.ve-checkbox-disabled',
      ).length,
    ).toBe(1)

    // disable unchecked count
    expect(
      wrapper
        .findAll('.fan-table-body-tr')[1]
        .find('.ve-checkbox-content')
        .classes()
        .includes('ve-checkbox-checked'),
    ).toBe(false)
  })

  it('check disable selected keys', async () => {
    const wrapper = mount(FanTable, {
      props: {
        columns: COLUMNS,
        tableData: TABLE_DATA,
        checkboxOption: {
          // 禁用的选择（禁止勾选或者禁止取消勾选）
          disableSelectedRowKeys: [1002, 1005],
          // 默认选择
          // defaultSelectedRowKeys: [1001, 1003, 1004, 1005],
        },
        rowKeyFieldName: 'rowKey',
      },
    })

    await later()

    expect(
      wrapper
        .find(
          '.fan-table-header-tr .ve-checkbox .ve-checkbox-indeterminate',
        )
        .exists(),
    ).toBe(false)

    // checked count
    expect(
      wrapper.findAll(
        '.fan-table-body-tr .ve-checkbox .ve-checkbox-checked',
      ).length,
    ).toBe(0)

    // disable checked count
    expect(
      wrapper.findAll(
        '.fan-table-body-tr .ve-checkbox .ve-checkbox-checked.ve-checkbox-disabled',
      ).length,
    ).toBe(0)

    // disable unchecked count
    expect(
      wrapper
        .findAll('.fan-table-body-tr')[1]
        .find('.ve-checkbox-content')
        .classes()
        .includes('ve-checkbox-checked'),
    ).toBe(false)
  })

  it('select all event with check disable selected keys', async () => {
    const wrapper = mount(FanTable, {
      props: {
        columns: COLUMNS,
        tableData: TABLE_DATA,
        checkboxOption: {
          // 禁用的选择（禁止勾选或者禁止取消勾选）
          disableSelectedRowKeys: [1002, 1005],
          // 默认选择
          // defaultSelectedRowKeys: [1001, 1003, 1004, 1005],
        },
        rowKeyFieldName: 'rowKey',
      },
    })

    await later()

    // select all
    wrapper
      .findAll('.fan-table-header-tr')[0]
      .findAll('.fan-table-header-th')[0]
      .find('.ve-checkbox')
      .trigger('click')

    await later()

    expect(
      wrapper
        .find(
          '.fan-table-header-tr .ve-checkbox .ve-checkbox-indeterminate',
        )
        .exists(),
    ).toBe(true)

    // checked count
    expect(
      wrapper.findAll(
        '.fan-table-body-tr .ve-checkbox .ve-checkbox-checked',
      ).length,
    ).toBe(3)

    // disable unchecked count
    expect(
      wrapper
        .findAll('.fan-table-body-tr')[1]
        .find('.ve-checkbox-content')
        .classes()
        .includes('ve-checkbox-checked'),
    ).toBe(false)

    expect(
      wrapper
        .findAll('.fan-table-body-tr')[4]
        .find('.ve-checkbox-content')
        .classes()
        .includes('ve-checkbox-checked'),
    ).toBe(false)
  })

  it('controllable attr selectedRowKey', async () => {
    const wrapper = mount(FanTable, {
      props: {
        columns: COLUMNS,
        tableData: TABLE_DATA,
        checkboxOption: {
          // 可控属性
          selectedRowKeys: [1003],
        },
        rowKeyFieldName: 'rowKey',
      },
    })

    await later()

    expect(
      wrapper
        .find(
          '.fan-table-header-tr .ve-checkbox .ve-checkbox-indeterminate',
        )
        .exists(),
    ).toBe(true)

    expect(
      wrapper.findAll(
        '.fan-table-body-tr .ve-checkbox .ve-checkbox-checked',
      ).length,
    ).toBe(1)

    wrapper.setProps({
      checkboxOption: {
        selectedRowKeys: [1003, 1004],
      },
    })

    await later()

    expect(
      wrapper.findAll(
        '.fan-table-body-tr .ve-checkbox .ve-checkbox-checked',
      ).length,
    ).toBe(2)
  })

  it('header hideSelectAll', async () => {
    const wrapper = mount(FanTable, {
      props: {
        columns: COLUMNS,
        tableData: TABLE_DATA,
        checkboxOption: {
          // 可控属性
          hideSelectAll: true,
        },
        rowKeyFieldName: 'rowKey',
      },
    })

    await later()

    expect(wrapper.find('.fan-table-header-tr .ve-checkbox').exists()).toBe(
      false,
    )
  })

  it('checkboxOption selectedRowChange event', async () => {
    const mockFn = vi.fn()

    const wrapper = mount(FanTable, {
      props: {
        columns: COLUMNS,
        tableData: TABLE_DATA,
        checkboxOption: {
          selectedRowChange: ({
            row,
            isSelected,
            selectedRowKeys,
          }) => {
            mockFn(row, isSelected, selectedRowKeys)
          },
        },
        rowKeyFieldName: 'rowKey',
      },
    })

    wrapper
      .findAll('.fan-table-body-tr')[0]
      .findAll('.fan-table-body-td')[0]
      .find('.ve-checkbox')
      .trigger('click')

    await later()

    expect(mockFn).toHaveBeenCalled()
    expect(mockFn).toHaveBeenCalledWith(TABLE_DATA[0], true, [1001])
  })

  it('checkboxOption selectedAllChange event', async () => {
    const mockFn = vi.fn()

    const wrapper = mount(FanTable, {
      props: {
        columns: COLUMNS,
        tableData: TABLE_DATA,
        checkboxOption: {
          selectedAllChange: ({ isSelected, selectedRowKeys }) => {
            mockFn(isSelected, selectedRowKeys)
          },
        },
        rowKeyFieldName: 'rowKey',
      },
    })

    wrapper
      .find('.fan-table-header-tr')
      .findAll('.fan-table-header-th')[0]
      .find('.ve-checkbox')
      .trigger('click')

    await later()

    expect(mockFn).toHaveBeenCalled()
    expect(mockFn).toHaveBeenCalledWith(
      true,
      [1001, 1002, 1003, 1004, 1005],
    )
  })
})
