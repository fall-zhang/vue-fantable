import VeDropdown from '@P/ve-dropdown/ve-dropdown.js'
import { COMPS_NAME, LOCALE_COMP_NAME } from '../util/constant'
import { clsName } from '../util/index'
import { isFunction } from '@P/src/utils/index'
import { createLocale } from '@P/src/locale/index'
import VeIcon from '@P/ve-icon/ve-icon.js'
import { ICON_NAMES } from '@P/ve-icon/src/util/constant'

const t = createLocale(LOCALE_COMP_NAME)

export default {
  name: COMPS_NAME.FAN_TABLE_HEADER_FILTER_CONTENT,
  components: {
    VeDropdown
  },
  props: {
    column: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      filterList: [],
    }
  },
  watch: {
    column: {
      handler(column) {
        if (column.filter && Array.isArray(column.filter.filterList)) {
          this.filterList = column.filter.filterList
        }
      },
      immediate: true,
      deep: true,
    },
  },
  methods: {
    /*
      * @filterConfirm
      * @desc  filter confirm
      * @param {Array} val - filter list
    */
    filterConfirm() {
      const { filterConfirm } = this.column.filter
      filterConfirm && filterConfirm(this.filterList)
    },
    // filter reset
    filterReset() {
      const { filterReset } = this.column.filter
      filterReset && filterReset(this.filterList)
    },
    // getIcon
    getIcon(h) {
      let result
      const { filterIcon } = this.column.filter
      if (isFunction(filterIcon)) {
        result = filterIcon(h)
      } else {
        result = <VeIcon name={ICON_NAMES.FILTER} />
      }
      return result
    },
  },
  render(h) {
    const { filterList, isMultiple, maxHeight, beforeVisibleChange } = this.column.filter
    const compProps = {
      modelValue: filterList,
      showOperation: true,
      isMultiple,
      showRadio: true, // when single selection
      confirmFilterText: t('confirmFilter'),
      resetFilterText: t('resetFilter'),
      beforeVisibleChange,
      // EMIT_EVENTS.HEADER_FILTER_CONFIRM
      onFilterConfirm: this.filterConfirm,
      // EMIT_EVENTS.HEADER_FILTER_RESET
      onFilterReset: this.filterReset,
      // v-model
      'onUpdate:modelValue': (val) => {
        this.filterList = val
      },
    }

    if (typeof maxHeight === 'number') {
      compProps.props.maxHeight = maxHeight
    }

    return (
      <VeDropdown {...compProps}>
        {/* icon */}
        <span class={clsName('filter')}>
          <span class={clsName('filter-icon')}>
            {this.getIcon(h)}
          </span>
        </span>
      </VeDropdown>
    )
  },
}
