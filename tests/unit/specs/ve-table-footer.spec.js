import { mount } from '@vue/test-utils'
import FanTable from '@P/fan-table/fan-table'
import { later } from '../util'
import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest'

describe('FanTable footer', () => {
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

  const FOOTER_DATA = [
    {
      rowkey: 0,
      name: '平均值',
      date: 213,
      hobby: 355,
      address: 189,
    },
    {
      rowkey: 1,
      name: '汇总值',
      date: 1780,
      hobby: 890,
      address: 2988,
    },
  ]

  const COLUMNS = [
    {
      field: 'name',
      key: 'a',
      title: 'Name',
      align: 'center',
      fixed: 'left',
      renderFooterCell: ({ row, column, rowIndex }, h) => {
        return (
          <span class="text-bold" style="">
            {row.name}
          </span>
        )
      },
    },
    {
      field: 'date',
      key: 'b',
      title: 'Date',
      align: 'left',
    },
    {
      field: 'hobby',
      key: 'c',
      title: 'Hobby',
      align: 'center',
    },
    { field: 'address', key: 'd', title: 'Address', align: 'left' },
  ]

  it('render', () => {
    const wrapper = mount(FanTable, {
      props: {
        columns: COLUMNS,
        tableData: TABLE_DATA,
        footerData: FOOTER_DATA,
        rowKeyFieldName: 'rowKey',
      },
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('custom cell content', () => {
    const wrapper = mount(FanTable, {
      props: {
        columns: COLUMNS,
        tableData: TABLE_DATA,
        footerData: FOOTER_DATA,
        rowKeyFieldName: 'rowKey',
      },
    })

    expect(
      wrapper
        .findAll('.fan-table-footer-tr')[0]
        .findAll('.fan-table-footer-td .text-bold')
        .exists(),
    ).toBe(true)
  })

  it('custom cell style', () => {
    const wrapper = mount(FanTable, {
      props: {
        columns: COLUMNS,
        tableData: TABLE_DATA,
        footerData: FOOTER_DATA,
        rowKeyFieldName: 'rowKey',
        cellStyleOption: {
          footerCellClass: ({ row, column, rowIndex }) => {
            if (column.field === 'address') {
              return 'table-footer-cell-class1'
            }

            if (column.field === 'date' && rowIndex === 1) {
              return 'table-footer-cell-class2'
            }
          },
        },
      },
    })

    expect(
      wrapper
        .findAll('.fan-table-footer-tr')[0]
        .findAll('.fan-table-footer-td')[3]
        .find('.table-footer-cell-class1')
        .exists(),
    ).toBe(true)

    expect(
      wrapper
        .findAll('.fan-table-footer-tr')[1]
        .findAll('.fan-table-footer-td')[1]
        .find('.table-footer-cell-class2')
        .exists(),
    ).toBe(true)
  })

  it('cell span', () => {
    const wrapper = mount(FanTable, {
      props: {
        columns: COLUMNS,
        tableData: TABLE_DATA,
        footerData: FOOTER_DATA,
        rowKeyFieldName: 'rowKey',
        cellSpanOption: {
          footerCellSpan: ({ row, column, rowIndex }) => {
            if (rowIndex === 0) {
              if (column.field === 'date') {
                return {
                  rowspan: 1,
                  colspan: 2,
                }
              } else if (column.field === 'hobby') {
                // does not need to be rendered
                return {
                  rowspan: 0,
                  colspan: 0,
                }
              }
            }
          },
        },
      },
    })

    const tdEl = wrapper
      .findAll('.fan-table-footer-tr')[0]
      .findAll('.fan-table-footer-td')[1]

    expect(tdEl.attributes('rowspan')).toBe('1')

    expect(tdEl.attributes('colspan')).toBe('2')
  })

  it('custom row events', () => {
    const mockClickFn = vi.fn()
    const mockDblclickFn = vi.fn()
    const mockContextmenuFn = vi.fn()
    const mockMouseenterFn = vi.fn()
    const mockMouseleaveFn = vi.fn()

    const wrapper = mount(FanTable, {
      props: {
        columns: COLUMNS,
        tableData: TABLE_DATA,
        footerData: FOOTER_DATA,
        rowKeyFieldName: 'rowKey',
        eventCustomOption: {
          footerRowEvents: ({ row, rowIndex }) => {
            return {
              click: (event) => {
                mockClickFn(row, rowIndex, event)
              },
              dblclick: (event) => {
                mockDblclickFn(row, rowIndex, event)
              },
              contextmenu: (event) => {
                mockContextmenuFn(row, rowIndex, event)
              },
              mouseenter: (event) => {
                mockMouseenterFn(row, rowIndex, event)
              },
              mouseleave: (event) => {
                mockMouseleaveFn(row, rowIndex, event)
              },
            }
          },
        },
      },
    })

    const firstTrEl = wrapper.findAll('.fan-table-footer-tr')[0]

    firstTrEl.trigger('click')
    expect(mockClickFn).toBeCalledWith(
      FOOTER_DATA[0],
      0,
      expect.any(Object),
    )

    firstTrEl.trigger('dblclick')
    expect(mockDblclickFn).toBeCalledWith(
      FOOTER_DATA[0],
      0,
      expect.any(Object),
    )

    firstTrEl.trigger('contextmenu')
    expect(mockContextmenuFn).toBeCalledWith(
      FOOTER_DATA[0],
      0,
      expect.any(Object),
    )

    firstTrEl.trigger('mouseenter')
    expect(mockMouseenterFn).toBeCalledWith(
      FOOTER_DATA[0],
      0,
      expect.any(Object),
    )

    firstTrEl.trigger('mouseleave')
    expect(mockMouseleaveFn).toBeCalledWith(
      FOOTER_DATA[0],
      0,
      expect.any(Object),
    )
  })

  it('custom cell events', () => {
    const mockClickFn = vi.fn()
    const mockDblclickFn = vi.fn()
    const mockContextmenuFn = vi.fn()
    const mockMouseenterFn = vi.fn()
    const mockMouseleaveFn = vi.fn()

    const wrapper = mount(FanTable, {
      props: {
        columns: COLUMNS,
        tableData: TABLE_DATA,
        footerData: FOOTER_DATA,
        rowKeyFieldName: 'rowKey',
        eventCustomOption: {
          footerCellEvents: ({ row, column, rowIndex }) => {
            return {
              click: (event) => {
                mockClickFn(row, column, rowIndex, event)
              },
              dblclick: (event) => {
                mockDblclickFn(row, column, rowIndex, event)
              },
              contextmenu: (event) => {
                mockContextmenuFn(row, column, rowIndex, event)
              },
              mouseenter: (event) => {
                mockMouseenterFn(row, column, rowIndex, event)
              },
              mouseleave: (event) => {
                mockMouseleaveFn(row, column, rowIndex, event)
              },
            }
          },
        },
      },
    })

    const firstTrTdEl = wrapper
      .findAll('.fan-table-footer-tr')[0]
      .findAll('.fan-table-footer-td')[0]

    firstTrTdEl.trigger('click')
    expect(mockClickFn).toBeCalledWith(
      FOOTER_DATA[0],
      expect.any(Object),
      0,
      expect.any(Object),
    )

    firstTrTdEl.trigger('dblclick')
    expect(mockDblclickFn).toBeCalledWith(
      FOOTER_DATA[0],
      expect.any(Object),
      0,
      expect.any(Object),
    )

    firstTrTdEl.trigger('contextmenu')
    expect(mockContextmenuFn).toBeCalledWith(
      FOOTER_DATA[0],
      expect.any(Object),
      0,
      expect.any(Object),
    )

    firstTrTdEl.trigger('mouseenter')
    expect(mockMouseenterFn).toBeCalledWith(
      FOOTER_DATA[0],
      expect.any(Object),
      0,
      expect.any(Object),
    )

    firstTrTdEl.trigger('mouseleave')
    expect(mockMouseleaveFn).toBeCalledWith(
      FOOTER_DATA[0],
      expect.any(Object),
      0,
      expect.any(Object),
    )
  })

  it('footer not fixed', () => {
    const wrapper = mount(FanTable, {
      props: {
        columns: COLUMNS,
        tableData: TABLE_DATA,
        footerData: FOOTER_DATA,
        rowKeyFieldName: 'rowKey',
        fixedFooter: false,
      },
    })

    expect(
      wrapper.findAll('.fan-table-fixed-footer .fan-table-footer').exists(),
    ).toBe(false)
  })

  it('column fixed', () => {
    const wrapper = mount(FanTable, {
      props: {
        columns: [
          {
            field: 'name',
            key: 'a',
            title: 'Name',
            align: 'center',
            fixed: 'left',
            width: 200,
          },
          {
            field: 'date',
            key: 'b',
            title: 'Date',
            align: 'left',
          },
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
            fixed: 'right',
            width: 200,
          },
        ],
        tableData: TABLE_DATA,
        footerData: FOOTER_DATA,
        rowKeyFieldName: 'rowKey',
      },
    })

    expect(
      wrapper.find('.fan-table-header-th.fan-table-fixed-left').exists(),
    ).toBe(true)

    expect(
      wrapper
        .find(
          '.fan-table-body-td.fan-table-fixed-left.fan-table-last-left-fixed-column',
        )
        .exists(),
    ).toBe(true)

    expect(
      wrapper
        .find(
          '.fan-table-body-td.fan-table-fixed-right.fan-table-first-right-fixed-column',
        )
        .exists(),
    ).toBe(true)
  })
})
