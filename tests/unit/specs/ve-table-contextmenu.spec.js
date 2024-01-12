import { mount } from '@vue/test-utils'
import veTable from '@P/ve-table/ve-table'
import { later } from '../util'
import { cloneDeep } from 'lodash-es'
import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest'

describe('veTable contextmenu', () => {
  const TABLE_DATA = [
    {
      name: 'John',
      date: '1900-05-20',
      number: '32',
      address: 'No.1 Century Avenue, Shanghai',
      rowKey: 0,
    },
    {
      name: 'Dickerson',
      date: '1910-06-20',
      number: '676',
      address: 'No.1 Century Avenue, Beijing',
      rowKey: 1,
    },
    {
      name: 'Larsen',
      date: '2000-07-20',
      number: '76',
      address: 'No.1 Century Avenue, Chongqing',
      rowKey: 2,
    },
    {
      name: 'Geneva',
      date: '2010-08-20',
      number: '7797',
      address: 'No.1 Century Avenue, Xiamen',
      rowKey: 3,
    },
    {
      name: 'Jami',
      date: '2020-09-20',
      number: '8978',
      address: 'No.1 Century Avenue, Shenzhen',
      rowKey: 4,
    },
  ]

  const COLUMNS = [
    {
      field: '',
      key: 'a',
      title: '',
      width: 50,
      align: 'center',
      operationColumn: true,
      renderBodyCell: ({ row, column, rowIndex }, h) => {
        return ++rowIndex
      },
    },
    {
      field: 'name',
      key: 'name',
      title: 'Name',
      align: 'left',
      width: '15%',
    },
    {
      field: 'date',
      key: 'date',
      title: 'Date',
      align: 'left',
      width: '15%',
    },
    {
      field: 'number',
      key: 'number',
      title: 'Number',
      align: 'right',
      width: '30%',
    },
    {
      field: 'address',
      key: 'address',
      title: 'Address',
      align: 'left',
      width: '40%',
    },
  ]

  const HEADER_CONTEXTMENUS = [
    {
      type: 'CUT',
    },
    {
      type: 'COPY',
    },
    {
      type: 'SEPARATOR',
    },
    {
      type: 'EMPTY_COLUMN',
    },
    {
      type: 'SEPARATOR',
    },
    {
      type: 'LEFT_FIXED_COLUMN_TO',
    },
    {
      type: 'CANCEL_LEFT_FIXED_COLUMN_TO',
    },
    {
      type: 'RIGHT_FIXED_COLUMN_TO',
    },
    {
      type: 'CANCEL_RIGHT_FIXED_COLUMN_TO',
    },
  ]

  const BODY_CONTEXTMENUS = [
    {
      type: 'CUT',
    },
    {
      type: 'COPY',
    },
    {
      type: 'SEPARATOR',
    },
    {
      type: 'INSERT_ROW_ABOVE',
    },
    {
      type: 'INSERT_ROW_BELOW',
    },
    {
      type: 'SEPARATOR',
    },
    {
      type: 'REMOVE_ROW',
    },
    {
      type: 'EMPTY_ROW',
    },
    {
      type: 'EMPTY_CELL',
    },
  ]

  afterEach(() => {
    return new Promise((resolve) => {
      const contextmenuNodes = document.querySelectorAll(
        '.ve-contextmenu-node',
      );

      [].forEach.call(contextmenuNodes, (nodeEl) => {
        nodeEl.remove()
      })

      resolve()
    })
  })

  it('render', () => {
    const wrapper = mount(veTable, {
      props: {
        columns: COLUMNS,
        tableData: TABLE_DATA,
        rowKeyFieldName: 'rowKey',
        contextmenuHeaderOption: {
          beforeShow: ({
            isWholeRowSelection,
            selectionRangeKeys,
            selectionRangeIndexes,
          }) => {},
          afterMenuClick: ({
            type,
            selectionRangeKeys,
            selectionRangeIndexes,
          }) => {},
          contextmenus: HEADER_CONTEXTMENUS,
        },
        contextmenuBodyOption: {
          beforeShow: ({
            isWholeRowSelection,
            selectionRangeKeys,
            selectionRangeIndexes,
          }) => {},
          afterMenuClick: ({
            type,
            selectionRangeKeys,
            selectionRangeIndexes,
          }) => {},
          contextmenus: BODY_CONTEXTMENUS,
        },
      },
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('header contextmenu beforeShow callback', async () => {
    const mockBeforeShowFn = vi.fn()

    const tableData = cloneDeep(TABLE_DATA)

    const WRAPPER = mount(
      {
        render() {
          return (
            <div>
              <ve-table
                row-key-field-name="rowKey"
                columns={COLUMNS}
                table-data={tableData}
                contextmenu-header-option={
                  this.contextmenuHeaderOption
                }
              />
            </div>
          )
        },
        data() {
          return {
            contextmenuHeaderOption: {
              beforeShow: ({
                isWholeColSelection,
                selectionRangeKeys,
                selectionRangeIndexes,
              }) => {
                mockBeforeShowFn({
                  isWholeColSelection,
                  selectionRangeKeys,
                  selectionRangeIndexes,
                })
              },
              afterMenuClick: ({
                type,
                selectionRangeKeys,
                selectionRangeIndexes,
              }) => {
                //
              },
              contextmenus: HEADER_CONTEXTMENUS,
            },
          }
        },
      },
      // need attach to documnet
      { attachTo: document.body },
    )

    const firstTrThEl = WRAPPER.findAll('.ve-table-header-tr')[0]
      .findAll('.ve-table-header-th')[1]

    firstTrThEl.trigger('mousedown', {
      button: 3,
    })
    await later()
    firstTrThEl.trigger('contextmenu')
    await later()

    const contextmenuNodes = document.querySelectorAll(
      '.ve-contextmenu-node',
    )

    expect(contextmenuNodes.length).toBe(7)

    expect(mockBeforeShowFn).toHaveBeenCalledWith({
      isWholeColSelection: true,
      selectionRangeKeys: {
        endColKey: 'name',
        endRowKey: 4,
        startColKey: 'name',
        startRowKey: 0,
      },
      selectionRangeIndexes: {
        endColIndex: 1,
        endRowIndex: 4,
        startColIndex: 1,
        startRowIndex: 0,
      },
    })
  })

  it('header contextmenu afterMenuClick callback', async () => {
    const mockAfterMenuClickFn = vi.fn()

    const tableData = cloneDeep(TABLE_DATA)

    const WRAPPER = mount(
      {
        render() {
          return (
            <div>
              <ve-table
                row-key-field-name="rowKey"
                columns={COLUMNS}
                table-data={tableData}
                contextmenu-header-option={
                  this.contextmenuHeaderOption
                }
              />
            </div>
          )
        },
        data() {
          return {
            contextmenuHeaderOption: {
              beforeShow: ({
                isWholeColSelection,
                selectionRangeKeys,
                selectionRangeIndexes,
              }) => {
                //
              },
              afterMenuClick: ({
                type,
                selectionRangeKeys,
                selectionRangeIndexes,
              }) => {
                mockAfterMenuClickFn({
                  type,
                  selectionRangeKeys,
                  selectionRangeIndexes,
                })
              },
              contextmenus: HEADER_CONTEXTMENUS,
            },
          }
        },
      },
      // need attach to documnet
      { attachTo: document.body },
    )

    const firstTrThEl = WRAPPER.findAll('.ve-table-header-tr')[0]
      .findAll('.ve-table-header-th')[1]

    firstTrThEl.trigger('mousedown', {
      button: 3,
    })
    await later()
    firstTrThEl.trigger('contextmenu')
    await later()

    const contextmenuNodes = document.querySelectorAll(
      '.ve-contextmenu-node',
    )

    expect(contextmenuNodes.length).toBe(7)

    const contentmenuItemClickEvent = new MouseEvent('click', {
      view: window, // window
      bubbles: true,
      cancelable: true,
    })

    contextmenuNodes[2].dispatchEvent(contentmenuItemClickEvent)

    await later()

    expect(mockAfterMenuClickFn).toHaveBeenCalledWith({
      type: 'EMPTY_COLUMN',
      selectionRangeKeys: {
        endColKey: 'name',
        endRowKey: 4,
        startColKey: 'name',
        startRowKey: 0,
      },
      selectionRangeIndexes: {
        endColIndex: 1,
        endRowIndex: 4,
        startColIndex: 1,
        startRowIndex: 0,
      },
    })
  })

  it('body contextmenu beforeShow callback', async () => {
    const mockBeforeShowFn = vi.fn()

    const tableData = cloneDeep(TABLE_DATA)

    const WRAPPER = mount(
      {
        render() {
          return (
            <div>
              <ve-table
                row-key-field-name="rowKey"
                columns={COLUMNS}
                table-data={tableData}
                contextmenu-body-option={
                  this.contextmenuBodyOption
                }
              />
            </div>
          )
        },
        data() {
          return {
            contextmenuBodyOption: {
              beforeShow: ({
                isWholeRowSelection,
                selectionRangeKeys,
                selectionRangeIndexes,
              }) => {
                mockBeforeShowFn({
                  isWholeRowSelection,
                  selectionRangeKeys,
                  selectionRangeIndexes,
                })
              },
              afterMenuClick: ({
                type,
                selectionRangeKeys,
                selectionRangeIndexes,
              }) => {
                //
              },
              contextmenus: BODY_CONTEXTMENUS,
            },
          }
        },
      },
      // need attach to documnet
      { attachTo: document.body },
    )

    const firstTrTdEl = WRAPPER.findAll('.ve-table-body-tr')[2]
      .findAll('.ve-table-body-td')[2]

    firstTrTdEl.trigger('mousedown', {
      button: 3,
    })
    await later()
    firstTrTdEl.trigger('contextmenu')
    await later()

    expect(firstTrTdEl.classes()).toContain('ve-table-cell-selection')

    const contextmenuNodes = document.querySelectorAll(
      '.ve-contextmenu-node',
    )

    expect(contextmenuNodes.length).toBe(6)

    expect(mockBeforeShowFn).toHaveBeenCalledWith({
      isWholeRowSelection: false,
      selectionRangeKeys: {
        endColKey: 'date',
        endRowKey: 2,
        startColKey: 'date',
        startRowKey: 2,
      },
      selectionRangeIndexes: {
        endColIndex: 2,
        endRowIndex: 2,
        startColIndex: 2,
        startRowIndex: 2,
      },
    })
  })

  it('body contextmenu afterMenuClick callback', async () => {
    const mockAfterMenuClickFn = vi.fn()

    const tableData = cloneDeep(TABLE_DATA)

    const WRAPPER = mount(
      {
        render() {
          return (
            <div>
              <ve-table
                row-key-field-name="rowKey"
                columns={COLUMNS}
                table-data={tableData}
                contextmenu-body-option={
                  this.contextmenuBodyOption
                }
              />
            </div>
          )
        },
        data() {
          return {
            contextmenuBodyOption: {
              beforeShow: ({
                isWholeColSelection,
                selectionRangeKeys,
                selectionRangeIndexes,
              }) => {
                //
              },
              afterMenuClick: ({
                type,
                selectionRangeKeys,
                selectionRangeIndexes,
              }) => {
                mockAfterMenuClickFn({
                  type,
                  selectionRangeKeys,
                  selectionRangeIndexes,
                })
              },
              contextmenus: BODY_CONTEXTMENUS,
            },
          }
        },
      },
      // need attach to documnet
      { attachTo: document.body },
    )

    const firstTrTdEl = WRAPPER.findAll('.ve-table-body-tr')[2]
      .findAll('.ve-table-body-td')[2]

    firstTrTdEl.trigger('mousedown', {
      button: 3,
    })
    await later()
    firstTrTdEl.trigger('contextmenu')
    await later()

    expect(firstTrTdEl.classes()).toContain('ve-table-cell-selection')

    const contextmenuNodes = document.querySelectorAll(
      '.ve-contextmenu-node',
    )

    expect(contextmenuNodes.length).toBe(6)

    const contentmenuItemClickEvent = new MouseEvent('click', {
      view: window, // window
      bubbles: true,
      cancelable: true,
    })

    contextmenuNodes[2].dispatchEvent(contentmenuItemClickEvent)

    await later()

    expect(mockAfterMenuClickFn).toHaveBeenCalledWith({
      type: 'INSERT_ROW_ABOVE',
      selectionRangeKeys: {
        endColKey: 'date',
        endRowKey: 2,
        startColKey: 'date',
        startRowKey: 2,
      },
      selectionRangeIndexes: {
        endColIndex: 2,
        endRowIndex: 2,
        startColIndex: 2,
        startRowIndex: 2,
      },
    })
  })
})
