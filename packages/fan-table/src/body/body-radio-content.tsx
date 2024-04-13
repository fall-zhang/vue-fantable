import VeRadio from '@P/ve-radio/ve-radio.js'
import { COMPS_NAME } from '../util/constant'
import { clsName } from '../util/index'
// import eventCenter from '@P/events/event-center'
import { GLOBAL_EVENT } from '@P/events/global-events'
export default {
  name: COMPS_NAME.FAN_TABLE_BODY_RADIO_CONTENT,
  inject: ['eventCenter'],
  props: {
    // checkbox option
    radioOption: {
      type: Object,
      default: function () {
        return null
      },
    },
    rowKey: {
      type: [String, Number],
      required: true,
    },
    internalRadioSelectedRowKey: {
      type: [String, Number],
      default: null,
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

      const { radioOption, rowKey } = this

      if (!radioOption) {
        return
      }
      let disableSelectedRowKeys = null
      if (!radioOption) {
        return
      }
      if (radioOption.disableSelectedRowKeys) {
        disableSelectedRowKeys = radioOption.disableSelectedRowKeys
      }

      if (
        Array.isArray(disableSelectedRowKeys) && disableSelectedRowKeys.includes(rowKey)
      ) {
        result = true
      }

      return result
    },

    // 是否是受控属性（取决于selectedRowKey）
    isControlledProp() {
      const { radioOption } = this

      return (
        radioOption && Object.keys(radioOption).includes('selectedRowKey')
      )
    },
  },
  watch: {
    // watch internal radio SelectedRowKey
    internalRadioSelectedRowKey: {
      handler: function () {
        this.initSelected()
      },
      immediate: true,
    },
  },
  methods: {
    // init selected
    initSelected() {
      this.isSelected = this.internalRadioSelectedRowKey === this.rowKey
    },

    // selected change
    selectedChange() {
      const { isControlledProp } = this

      // 非受控
      if (!isControlledProp) {
        this.isSelected = true
      }

      this.eventCenter.emit(GLOBAL_EVENT.RADIO_SELECTED_ROW_CHANGE,
        {
          rowKey: this.rowKey,
        },
      )
    },
  },
  render() {
    const { isSelected, selectedChange, disabled } = this

    const radioProps = {
      class: clsName('radio-wrapper'),
      isControlled: true,
      isSelected,
      disabled,
      onRadioChange: () => selectedChange(),
    }
    return <VeRadio {...radioProps} />
  },
}
