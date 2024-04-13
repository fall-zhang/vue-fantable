import { clsName } from '../util/index'
import HeaderTr from './header-tr.jsx'
import { COMPS_NAME, EMIT_EVENTS } from '../util/constant'
// import eventCenter from '@P/events/event-center'
import { GLOBAL_EVENT } from '@P/events/global-events'
export default {
  name: COMPS_NAME.FAN_TABLE_THADER,
  components: {
    HeaderTr
  },
  inject: ['eventCenter'],
  props: {
    columnsOptionResetTime: {
      type: Number,
      default: 0,
    },
    groupColumns: {
      type: Array,
      required: true,
    },
    colgroups: {
      type: Array,
      required: true,
    },
    fixedHeader: {
      type: Boolean,
      required: true,
    },
    isGroupHeader: {
      type: Boolean,
      required: true,
    },
    cellSelectionData: {
      type: Object,
      default: function () {
        return null
      },
    },
    // cell selection range data
    cellSelectionRangeData: {
      type: Object,
      default: function () {
        return null
      },
    },
    headerIndicatorColKeys: {
      type: Object,
      default: function () {
        return null
      },
    },
    headerRows: {
      type: Array,
      default: function () {
        return []
      },
    },
    // checkbox option
    checkboxOption: {
      type: Object,
      default: function () {
        return null
      },
    },
    // sort option
    sortOption: {
      type: Object,
      default: function () {
        return null
      },
    },
    // cell style option
    cellStyleOption: {
      type: Object,
      default: function () {
        return null
      },
    },
    // event custom option
    eventCustomOption: {
      type: Object,
      default: function () {
        return null
      },
    },
  },
  data() {
    return {
      /*
            sort columns
            不要使用computed代替，属性动态添加会造成响应式问题
            */
      sortColumns: {},
    }
  },
  computed: {
    // header class
    headerClass() {
      return {
        [clsName('fixed-header')]: this.fixedHeader,
      }
    },
  },
  watch: {
    // watch colgroups
    colgroups: {
      handler() {
        this.initSortColumns()
      },
      immediate: true,
    },
  },
  mounted() {
    // receive sort change
    this.eventCenter.on(GLOBAL_EVENT.SORT_CHANGE, (params) => {
      this.sortChange(params)
    })
  },
  methods: {
    // sort change
    sortChange({ currentField, sortResult }) {
      const { sortColumns, sortOption = {} } = this
      let sortChange = null
      let multipleSort = null
      if (sortOption && sortOption.sortChange) {
        sortChange = sortOption.sortChange
      }
      if (sortOption && sortOption.multipleSort) {
        multipleSort = sortOption.multipleSort
      }
      // const { multipleSort, sortChange } = sortOption

      this.sortColumns[currentField] = sortResult

      if (!multipleSort) {
        for (const field in sortColumns) {
          if (field !== currentField) {
            sortColumns[field] = ''
          }
        }
      }

      // 执行 fan-table 上的 sort-change
      this.eventCenter.emit(GLOBAL_EVENT.SORT_CHANGE_AFTER,
        sortColumns,
      )
      // invoke
      if (sortChange) sortChange(sortColumns)
    },

    // init sort columns
    initSortColumns() {
      const { colgroups } = this
      const sortColumns = {}
      colgroups.forEach((item) => {
        if (typeof item.sortBy === 'string') {
          sortColumns[item.field] = item.sortBy
        }
      })
      this.sortColumns = sortColumns
    },
  },
  render() {
    const {
      headerClass,
      groupColumns,
      colgroups,
      fixedHeader,
      headerRows,
      checkboxOption,
      sortOption,
      sortColumns,
      cellStyleOption,
      cellSelectionData,
    } = this

    return (
      <thead class={headerClass}>
        {groupColumns.map((groupColumn, rowIndex) => {
          const trProps = {
            key: rowIndex,
            columnsOptionResetTime: this.columnsOptionResetTime,
            groupColumn,
            headerRows,
            colgroups,
            fixedHeader,
            isGroupHeader: this.isGroupHeader,
            rowIndex,
            checkboxOption,
            sortOption,
            sortColumns,
            cellStyleOption,
            eventCustomOption: this.eventCustomOption,
            cellSelectionData,
            cellSelectionRangeData: this.cellSelectionRangeData,
            headerIndicatorColKeys: this.headerIndicatorColKeys,
          }
          return <HeaderTr {...trProps} />
        })}
      </thead>
    )
  },
}
