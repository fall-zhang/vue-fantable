import { mount } from '@vue/test-utils'
import FanTable from '@P/fan-table/fan-table'
import { later } from '../util'
import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest'

describe('FanTable cell ellipsis', () => {
  const TABLE_DATA = [
    {
      name: 'John',
      date: '1900-05-20',
      hobby: 'coding and coding repeat',
      address:
                'No.1 Century Avenue, Shanghai,this is a long text,this is a long text,this is a long text,this is a long text,this is a long text,this is a long text',
      rowkey: 0,
    },
    {
      name: 'Dickerson',
      date: '1910-06-20',
      hobby: 'coding and coding repeat',
      address:
                'No.1 Century Avenue, Beijing,this is a long text,this is a long text,this is a long text,this is a long text',
      rowkey: 1,
    },
    {
      name: 'Larsen',
      date: '2000-07-20',
      hobby: 'coding and coding repeat',
      address:
                'No.1 Century Avenue, Chongqing,this is a long text,this is a long text,this is a long text,this is a long text,this is a long text,this is a long text,this is a long text,this is a long text',
      rowkey: 2,
    },
    {
      name: 'Geneva',
      date: '2010-08-20',
      hobby: 'coding and coding repeat',
      address:
                'No.1 Century Avenue, Xiamen,this is a long text,this is a long text',
      rowkey: 3,
    },
    {
      name: 'Jami',
      date: '2020-09-20',
      hobby: 'coding and coding repeat',
      address: 'No.1 Century Avenue, Shenzhen',
      rowkey: 4,
    },
  ]

  const COLUMNS = [
    {
      field: 'name',
      key: 'a',
      title: 'Name',
      align: 'left',
      width: '15%',
    },
    {
      field: 'date',
      key: 'b',
      title: 'Date',
      align: 'left',
      width: '15%',
    },
    {
      field: 'hobby',
      key: 'c',
      title: 'Hobby',
      align: 'center',
      width: '30%',
    },
    {
      field: 'address',
      key: 'd',
      title: 'Address',
      align: 'left',
      width: '40%',
      ellipsis: {},
    },
  ]

  it('render single line ellipsis', () => {
    const wrapper = mount(FanTable, {
      props: {
        columns: COLUMNS,
        tableData: TABLE_DATA,
        rowKeyFieldName: 'rowKey',
      },
    })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('render multiline ellipsis', async () => {
    const wrapper = mount(FanTable, {
      props: {
        columns: [
          {
            field: 'name',
            key: 'a',
            title: 'Name',
            align: 'left',
            width: '15%',
          },
          {
            field: 'date',
            key: 'b',
            title: 'Date',
            align: 'left',
            width: '15%',
          },
          {
            field: 'hobby',
            key: 'c',
            title: 'Hobby',
            align: 'center',
            width: '30%',
          },
          {
            field: 'address',
            key: 'd',
            title: 'Address',
            align: 'left',
            width: '40%',
            ellipsis: {
              lineClamp: 3,
            },
          },
        ],
        // table data
        tableData: TABLE_DATA,
        rowKeyFieldName: 'rowKey',
        fixedHeader: true,
      },
    })

    await later()

    const trEl = wrapper.findAll('.fan-table-body-tr')[0]
    expect(
      trEl
        .findAll('.fan-table-body-td')[3]
        .find('.fan-table-body-td-span-ellipsis')
        .exists(),
    ).toBe(true)
  })
})
