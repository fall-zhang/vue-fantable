import VeRadio from '@P/ve-radio/ve-radio.js'
import { COMPS_NAME, EMIT_EVENTS } from '../util/constant'
import { clsName } from '../util/index'
import emitter from '@P/src/mixins/emitter'
export default {
  name: COMPS_NAME.VE_TABLE_BODY_RADIO_CONTENT,
  mixins: [emitter],
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

      this.dispatch(
        COMPS_NAME.VE_TABLE_BODY,
        EMIT_EVENTS.RADIO_SELECTED_ROW_CHANGE,
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
