import VeDropdown from '@P/ve-dropdown/ve-dropdown.js'
import { COMPS_NAME } from '../util/constant'
import { clsName } from '../util/index'
import { isFunction, isBoolean } from '../../../src/utils/index'
import VeIcon from '@P/ve-icon/ve-icon.js'
import { ICON_NAMES } from '@P/ve-icon/src/util/constant'

export default {
  name: COMPS_NAME.FAN_TABLE_HEADER_FILTER_CUSTOM_CONTENT,
  props: {
    column: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      internalVisible: false,
    }
  },
  watch: {
    column: {
      handler(column) {
        if (column.filterCustom &&
                    isBoolean(column.filterCustom.defaultVisible)
        ) {
          this.internalVisible = column.filterCustom.defaultVisible
        }
      },
      immediate: true,
      deep: true,
    },
  },
  methods: {
    // visible change
    visibleChange(visible) {
      this.internalVisible = visible
    },
    // get custom content
    getCustomContent(h) {
      let result = null

      const { render } = this.column.filterCustom
      if (isFunction(render)) {
        const props = {
          slot: 'custom-content',
        }

        result = (
          <div {...props}>
            {render(
              {
                showFn: this.show,
                closeFn: this.close,
              },
              h,
            )}
          </div>
        )
      }
      return result
    },
    // getIcon
    getIcon(h) {
      let result
      const { filterIcon } = this.column.filterCustom
      if (isFunction(filterIcon)) {
        result = filterIcon(h)
      } else {
        result = <VeIcon name={ICON_NAMES.FILTER} />
      }
      return result
    },

    close() {
      this.internalVisible = false
    },
    show() {
      this.internalVisible = true
    },
  },
  render(h) {
    const compProps = {
      isCustomContent: true,
      isControlled: true,
      visible: this.internalVisible,
      beforeVisibleChange:
                    this.column.filterCustom.beforeVisibleChange,
      onDropdownVisibleChange: this.visibleChange,
    }

    return (
      <VeDropdown {...compProps}>
        {/* icon */}
        <span class={clsName('filter')}>
          <span class={clsName('filter-icon')}>
            {this.getIcon(h)}
          </span>
        </span>
        {/* custom content */}
        {this.getCustomContent(h)}
      </VeDropdown>
    )
  },
}
