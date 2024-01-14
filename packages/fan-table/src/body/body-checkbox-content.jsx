import VeCheckbox from '@P/ve-checkbox/ve-checkbox.js'
import { COMPS_NAME, EMIT_EVENTS } from '../util/constant'
import { clsName } from '../util/index'
// import eventCenter from '@P/events/event-center'
import { GLOBAL_EVENT } from '@P/events/global-events'
export default {
  name: COMPS_NAME.FAN_TABLE_BODY_CHECKBOX_CONTENT,
  inject: ['eventCenter'],
  props: {
    // checkbox option
    checkboxOption: {
      type: Object,
      default: function () {
        return null
      },
    },
    rowKey: {
      type: [String, Number],
      required: true,
    },
    internalCheckboxSelectedRowKeys: {
      type: Array,
      default: function () {
        return null
      },
    },
  },
  data() {
    return {
      isSelected: false,
    }
  },
  computed: {
    // disabled
    disabled() {
      let result = false

      const { checkboxOption, rowKey } = this

      if (!checkboxOption) {
        return
      }

      const { disableSelectedRowKeys } = checkboxOption

      if (
        Array.isArray(disableSelectedRowKeys) &&
disableSelectedRowKeys.includes(rowKey)
      ) {
        result = true
      }

      return result
    },

    // 是否是受控属性（取决于selectedRowKeys）
    isControlledProp() {
      const { checkboxOption } = this

      return (
        checkboxOption && Array.isArray(checkboxOption.selectedRowKeys)
      )
    },
  },
  watch: {
    // watch internalCheckboxSelectedRowKeys
    internalCheckboxSelectedRowKeys: {
      handler: function () {
        this.initSelected()
      },
      immediate: true,
    },
  },
  methods: {
    // init selected
    initSelected() {
      let result = false

      const { rowKey, internalCheckboxSelectedRowKeys } = this

      if (
        Array.isArray(internalCheckboxSelectedRowKeys) &&
internalCheckboxSelectedRowKeys.includes(rowKey)
      ) {
        result = true
      }

      this.isSelected = result
    },

    // selected change
    selectedChange(isSelected) {
      const { isControlledProp } = this

      // 非受控
      if (!isControlledProp) {
        this.isSelected = isSelected
      }
      console.log(this)

      this.eventCenter.emit(GLOBAL_EVENT.CHECKBOX_SELECTED_ROW_CHANGE,
        {
          rowKey: this.rowKey,
          isSelected,
        },
      )
    },
  },
  render() {
    const { isSelected, selectedChange, disabled } = this

    const checkboxProps = {
      class: clsName('checkbox-wrapper'),
      isControlled: true,
      isSelected,
      disabled,
      onCheckedChange: (isSelected) => selectedChange(isSelected),
    }

    return <VeCheckbox {...checkboxProps} />
  },
}
