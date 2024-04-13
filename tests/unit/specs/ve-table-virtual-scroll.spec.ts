import { mount } from '@vue/test-utils'
import FanTable from '@P/fan-table/fan-table'
import { later } from '../util'
import bodyTrScrolling from '@P/fan-table/src/body/body-tr-scrolling.jsx'
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
describe('FanTable virtual scroll', () => {
  // same row height
  const TABLE_DATA_SAME_ROW_HEIGHT = []
  for (let i = 0; i < 1000; i++) {
    TABLE_DATA_SAME_ROW_HEIGHT.push({
      rowKey: i,
      name: i,
      date: i,
      hobby: i,
      address: i,
    })
  }

  // different row height
  function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
  }

  const TABLE_DATA_DIFFERENT_ROW_HEIGHT = []

  for (let i = 0; i < 1000; i++) {
    let value = i
    if (i % 2 === 0) {
      const rowCount = getRandom(3, 5)

      for (let i = 0; i < rowCount; i++) {
        value += `this is the long word.<br />`
      }
    }

    TABLE_DATA_DIFFERENT_ROW_HEIGHT.push({
      rowKey: i,
      name: value,
      date: i,
      hobby: i,
      address: i,
    })
  }

  //
  const MAX_HEIGHT = 500
  const MIN_ROW_HEIGHT = 40

  // 表格渲染的数量
  // const TABLE_ROW_COUNT = Math.ceil(MAX_HEIGHT / MIN_ROW_HEIGHT) + 1;
  const TABLE_ROW_COUNT = Math.ceil(MAX_HEIGHT / MIN_ROW_HEIGHT) * 2

  // get table rendered row count by row height
  function getTableRenderedRowCountByRowHeight(rowHeight, bufferScale = 2) {
    return Math.ceil(MAX_HEIGHT / rowHeight) * bufferScale
  }

  it('render same row height', async () => {
    const wrapper = mount(FanTable, {
      props: {
        columns: [
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
        ],
        tableData: TABLE_DATA_SAME_ROW_HEIGHT,
        virtualScrollOption: {
          // 是否开启
          enable: true,
        },
        maxHeight: MAX_HEIGHT,
        rowKeyFieldName: 'rowKey',
      },
    })

    wrapper.triggerResizeObserver({ width: MAX_HEIGHT })

    await later()

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('dynamically turns virtual scrolling on', async () => {
    const wrapper = mount(FanTable, {
      props: {
        columns: [
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
        ],
        tableData: TABLE_DATA_SAME_ROW_HEIGHT,
        virtualScrollOption: {
          // 是否开启
          enable: false,
        },
        maxHeight: MAX_HEIGHT,
        rowKeyFieldName: 'rowKey',
      },
    })

    wrapper.triggerResizeObserver({ width: MAX_HEIGHT })

    await later()

    expect(wrapper.find('.fan-table-virtual-scroll').exists()).toBe(false)

    wrapper.setProps({
      virtualScrollOption: {
        // 是否开启
        enable: true,
      },
    })

    await later()

    const tableContainerEl = wrapper.find('.fan-table-container')

    expect(tableContainerEl.attributes('style')).toBe(
      'max-height: 500px; height: 500px;',
    )

    expect(wrapper.find('.fan-table-virtual-scroll').exists()).toBe(true)
    expect(wrapper.find('.fan-table-virtual-phantom').exists()).toBe(true)
    expect(wrapper.findAll('.fan-table-body-tr').length).toBe(
      TABLE_ROW_COUNT,
    )
  })

  it('same row height', async () => {
    const wrapper = mount(FanTable, {
      props: {
        columns: [
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
        ],
        tableData: TABLE_DATA_SAME_ROW_HEIGHT,
        virtualScrollOption: {
          // 是否开启
          enable: true,
        },
        maxHeight: MAX_HEIGHT,
        rowKeyFieldName: 'rowKey',
      },
    })

    wrapper.triggerResizeObserver({ width: MAX_HEIGHT })

    await later()

    expect(wrapper.findAll('.fan-table-body-tr').length).toBe(
      TABLE_ROW_COUNT,
    )
  })

  it('different row height', async () => {
    const wrapper = mount(FanTable, {
      props: {
        columns: [
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
        ],
        tableData: TABLE_DATA_DIFFERENT_ROW_HEIGHT,
        virtualScrollOption: {
          // 是否开启
          enable: true,
        },
        maxHeight: MAX_HEIGHT,
        rowKeyFieldName: 'rowKey',
      },
    })

    wrapper.triggerResizeObserver({ width: MAX_HEIGHT })

    await later()

    expect(wrapper.findAll('.fan-table-body-tr').length).toBe(
      TABLE_ROW_COUNT,
    )
  })

  it('buffer scale', async () => {
    const bufferCount = 10

    const wrapper = mount(FanTable, {
      props: {
        columns: [
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
        ],
        tableData: TABLE_DATA_DIFFERENT_ROW_HEIGHT,
        virtualScrollOption: {
          // 是否开启
          enable: true,
          bufferScale: bufferCount,
        },
        maxHeight: MAX_HEIGHT,
        rowKeyFieldName: 'rowKey',
      },
    })

    wrapper.triggerResizeObserver({ width: MAX_HEIGHT })

    await later()

    expect(wrapper.findAll('.fan-table-body-tr').length).toBe(
      Math.ceil(MAX_HEIGHT / MIN_ROW_HEIGHT) * (bufferCount + 1),
    )
  })

  it('with row checkbox', async () => {
    const wrapper = mount(FanTable, {
      props: {
        columns: [
          {
            field: 'name',
            key: 'b',
            title: 'Name',
            width: 200,
            align: 'left',
            // type=checkbox
            type: 'checkbox',
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
        tableData: TABLE_DATA_SAME_ROW_HEIGHT,
        virtualScrollOption: {
          // 是否开启
          enable: true,
        },
        checkboxOption: {},
        maxHeight: MAX_HEIGHT,
        rowKeyFieldName: 'rowKey',
      },
    })

    wrapper.triggerResizeObserver({ width: MAX_HEIGHT })

    await later()

    expect(wrapper.find('.ve-checkbox').exists()).toBe(true)

    expect(wrapper.findAll('.fan-table-body-tr').length).toBe(
      TABLE_ROW_COUNT,
    )
  })

  it('with row radio', async () => {
    const wrapper = mount(FanTable, {
      props: {
        columns: [
          {
            field: 'name',
            key: 'b',
            title: 'Name',
            width: 200,
            align: 'left',
            // type=radio
            type: 'radio',
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
        tableData: TABLE_DATA_SAME_ROW_HEIGHT,
        virtualScrollOption: {
          // 是否开启
          enable: true,
        },
        radioOption: {},
        maxHeight: MAX_HEIGHT,
        rowKeyFieldName: 'rowKey',
      },
    })

    wrapper.triggerResizeObserver({ width: MAX_HEIGHT })

    await later()

    expect(wrapper.find('.ve-radio').exists()).toBe(true)

    expect(wrapper.findAll('.fan-table-body-tr').length).toBe(
      TABLE_ROW_COUNT,
    )
  })

  it('with row expand', async () => {
    const wrapper = mount(FanTable, {
      props: {
        columns: [
          {
            field: 'name',
            key: 'b',
            title: 'Name',
            width: 200,
            align: 'left',
            // type=expand
            type: 'expand',
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
        tableData: TABLE_DATA_SAME_ROW_HEIGHT,
        virtualScrollOption: {
          // 是否开启
          enable: true,
        },
        expandOption: {
          render: ({ row, column, rowIndex }, h) => {
            return (
              <p>
                                My name is{' '}
                <span style="color:#1890ff;">{row.name}</span>
                                ,I'm living in {row.address}
              </p>
            )
          },
        },
        maxHeight: MAX_HEIGHT,
        rowKeyFieldName: 'rowKey',
      },
    })

    wrapper.triggerResizeObserver({ width: MAX_HEIGHT })

    await later()

    expect(wrapper.find('.fan-table-row-expand-icon').exists()).toBe(true)

    expect(wrapper.findAll('.fan-table-body-tr').length).toBe(
      TABLE_ROW_COUNT,
    )
  })

  it('with column fixed', async () => {
    const wrapper = mount(FanTable, {
      props: {
        columns: [
          {
            field: 'name',
            key: 'b',
            title: 'Name',
            width: 200,
            align: 'left',
            fixed: 'left',
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
            fixed: 'right',
          },
        ],
        tableData: TABLE_DATA_SAME_ROW_HEIGHT,
        virtualScrollOption: {
          // 是否开启
          enable: true,
        },
        maxHeight: MAX_HEIGHT,
        rowKeyFieldName: 'rowKey',
      },
    })

    wrapper.triggerResizeObserver({ width: MAX_HEIGHT })

    await later()

    const thEls = wrapper.findAll(
      '.fan-table-header .fan-table-header-tr .fan-table-header-th',
    )

    expect(thEls[0].classes()).toContain('fan-table-fixed-left')
    expect(thEls[0].classes()).toContain(
      'fan-table-last-left-fixed-column',
    )

    expect(thEls[2].classes()).toContain('fan-table-fixed-right')
    expect(thEls[2].classes()).toContain(
      'fan-table-first-right-fixed-column',
    )

    const tdEls = wrapper.findAll(
      '.fan-table-header .fan-table-header-tr .fan-table-header-th',
    )

    expect(tdEls[0].classes()).toContain('fan-table-fixed-left')
    expect(tdEls[0].classes()).toContain(
      'fan-table-last-left-fixed-column',
    )

    expect(tdEls[2].classes()).toContain('fan-table-fixed-right')
    expect(tdEls[2].classes()).toContain(
      'fan-table-first-right-fixed-column',
    )

    expect(wrapper.findAll('.fan-table-body-tr').length).toBe(
      TABLE_ROW_COUNT,
    )
  })

  it('with column footer', async () => {
    const wrapper = mount(FanTable, {
      props: {
        columns: [
          {
            field: 'name',
            key: 'b',
            title: 'Name',
            width: 200,
            align: 'left',
            fixed: 'left',
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
            fixed: 'right',
          },
        ],
        tableData: TABLE_DATA_SAME_ROW_HEIGHT,
        footerData: [
          {
            rowKey: 0,
            name: '平均值',
            date: 1100,
            hobby: 1200,
            address: 1300,
          },
          {
            rowKey: 1,
            name: '汇总值',
            date: 701000,
            hobby: 801000,
            address: 801000,
          },
        ],
        virtualScrollOption: {
          // 是否开启
          enable: true,
        },
        maxHeight: MAX_HEIGHT,
        rowKeyFieldName: 'rowKey',
      },
    })

    wrapper.triggerResizeObserver({ width: MAX_HEIGHT })

    await later()

    expect(
      wrapper.findAll('.fan-table-footer-tr .fan-table-footer-td').length,
    ).toBe(6)

    expect(wrapper.findAll('.fan-table-body-tr').length).toBe(
      TABLE_ROW_COUNT,
    )
  })

  it('scrolling callback', async () => {
    const mockFn = vi.fn()
    const wrapper = mount(FanTable, {
      props: {
        columns: [
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
        ],
        tableData: TABLE_DATA_SAME_ROW_HEIGHT,
        virtualScrollOption: {
          // 是否开启
          enable: true,
          scrolling: mockFn,
        },
        maxHeight: MAX_HEIGHT,
        rowKeyFieldName: 'rowKey',
      },
    })

    wrapper.triggerResizeObserver({ width: MAX_HEIGHT })

    await later()

    expect(mockFn).toHaveBeenCalledTimes(1)

    expect(mockFn).toHaveBeenCalledWith({
      startRowIndex: 0,
      visibleStartIndex: 0,
      visibleEndIndex: Math.ceil(MAX_HEIGHT / MIN_ROW_HEIGHT),
      visibleAboveCount: 0,
      visibleBelowCount: Math.ceil(MAX_HEIGHT / MIN_ROW_HEIGHT),
    })
  })

  it('minRowHeight prop', async () => {
    const mockFn = vi.fn()
    const minRowHeight = 50
    const wrapper = mount(FanTable, {
      props: {
        columns: [
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
        ],
        tableData: TABLE_DATA_SAME_ROW_HEIGHT,
        virtualScrollOption: {
          // 是否开启
          enable: true,
          minRowHeight,
        },
        maxHeight: MAX_HEIGHT,
        rowKeyFieldName: 'rowKey',
      },
    })

    wrapper.triggerResizeObserver({ width: MAX_HEIGHT })

    await later()

    const rowCount = getTableRenderedRowCountByRowHeight(minRowHeight)
    expect(wrapper.findAll('.fan-table-body-tr').length).toBe(rowCount)
  })

  /*
    how to test?
    */
  it('virtual scroll palceholder', async () => {
    const wrapper = mount(bodyTrScrolling, {
      props: {
        colgroups: [{}],
      },
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
})
