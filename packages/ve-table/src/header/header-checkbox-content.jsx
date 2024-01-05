import VeCheckbox from '@P/ve-checkbox/ve-checkbox.js'
import { COMPS_NAME, EMIT_EVENTS } from '../util/constant'
import { clsName } from '../util/index'
import emitter from '../../../src/mixins/emitter'
import eventCenter from '@P/events/event-center'
export default {
  name: COMPS_NAME.VE_TABLE_HEADER_CHECKBOX_CONTENT,
  mixins: [emitter],
  props: {
    // checkbox option
    checkboxOption: {
      type: Object,
      default: function () {
        return null
      },
    },
  },
  data() {
    return {
      // is selected
      isSelected: false,
      isIndeterminate: false,
    }
  },
  mounted() {
    // receive selected all info
    eventCenter.on(EMIT_EVENTS.CHECKBOX_SELECTED_ALL_INFO, (params) => {
      this.setSelectedAllInfo(params)
    })
  },

  methods: {
    // selected change
    selectedChange(isSelected) {
      this.isSelected = isSelected

      this.dispatch(
        COMPS_NAME.VE_TABLE,
        EMIT_EVENTS.CHECKBOX_SELECTED_ALL_CHANGE,
        {
          isSelected,
        },
      )
    },

    // set selected all info
    setSelectedAllInfo({ isSelected, isIndeterminate }) {
      this.isSelected = isSelected
      this.isIndeterminate = isIndeterminate
    },
  },
  render() {
    const { isSelected, isIndeterminate, selectedChange } = this

    const checkboxProps = {
      class: clsName('checkbox-wrapper'),
      isControlled: true,
      isSelected,
      indeterminate: isIndeterminate,
      on: {
        'on-checked-change': (isSelectedParam) =>
          selectedChange(isSelectedParam),
      },
    }

    return <VeCheckbox {...checkboxProps} />
  },
}
