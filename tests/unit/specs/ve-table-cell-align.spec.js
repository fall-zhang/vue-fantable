import { mount } from '@vue/test-utils'
import FanTable from '@P/fan-table/fan-table'
import { later } from '../util'
import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest'

describe('FanTable cell align', () => {
  const TABLE_DATA = [
    {
      name: 'John',
      date: '1900-05-20',
      hobby: 'coding and coding repeat',
      address: 'No.1 Century Avenue, Shanghai',
    },
    {
      name: 'Dickerson',
      date: '1910-06-20',
      hobby: 'coding and coding repeat',
      address: 'No.1 Century Avenue, Beijing',
    },
    {
      name: 'Larsen',
      date: '2000-07-20',
      hobby: 'coding and coding repeat',
      address: 'No.1 Century Avenue, Chongqing',
    },
    {
      name: 'Geneva',
      date: '2010-08-20',
      hobby: 'coding and coding repeat',
      address: 'No.1 Century Avenue, Xiamen',
    },
    {
      name: 'Jami',
      date: '2020-09-20',
      hobby: 'coding and coding repeat',
      address: 'No.1 Century Avenue, Shenzhen',
    },
  ]

  const columns = [
    {
      field: 'name',
      key: 'a',
      title: 'Name',
      align: 'center',
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
      align: 'right',
    },
    {
      field: 'address',
      key: 'd',
      title: 'Address',
      align: 'left',
    },
  ]

  it('render', () => {
    const wrapper = mount({
      render() {
        return (
          <FanTable
            columns={this.columns}
            tableData={this.tableData}
            rowKeyFieldName="rowkey"
          />
        )
      },
      data() {
        return {
          columns,
          tableData: TABLE_DATA,
        }
      },
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('align prop', () => {
    const wrapper = mount({
      render() {
        return (
          <FanTable
            columns={this.columns}
            tableData={this.tableData}
            rowKeyFieldName="rowkey"
          />
        )
      },
      data() {
        return {
          columns,
          tableData: TABLE_DATA,
        }
      },
    })

    // th
    const thEls = wrapper.findAll(
      '.fan-table-header-tr .fan-table-header-th',
    )
    expect(thEls[0].attributes('style')).toContain(
      'text-align: center;',
    )
    expect(thEls[1].attributes('style')).toContain('text-align: left;')
    expect(thEls[2].attributes('style')).toContain('text-align: right;')

    // td
    const tdEls = wrapper
      .findAll('.fan-table-body-tr')[0]
      .findAll('.fan-table-body-td')
    expect(tdEls[0].attributes('style')).toContain(
      'text-align: center;',
    )
    expect(tdEls[1].attributes('style')).toContain('text-align: left;')
    expect(tdEls[2].attributes('style')).toContain('text-align: right;')
  })
})
