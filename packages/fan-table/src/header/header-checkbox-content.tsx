import VeCheckbox from '@P/ve-checkbox/ve-checkbox.js'
import { COMPS_NAME, EMIT_EVENTS } from '../util/constant'
import { clsName } from '../util/index'
// import eventCenter from '@P/events/event-center'
import { GLOBAL_EVENT } from '@P/events/global-events'
import { defineComponent, inject, onMounted, onUnmounted, ref } from 'vue'
export default defineComponent({
  name: COMPS_NAME.FAN_TABLE_HEADER_CHECKBOX_CONTENT,
  components: {
    VeCheckbox
  },
  inject: ['eventCenter'],
  props: {
    // checkbox option
    checkboxOption: {
      type: Object,
      default: function () {
        return null
      },
    },
  },
  setup() {
    const isSelected = ref(false)
    const isIndeterminate = ref(false)

    const eventCenter:any = inject('eventCenter')

    function selectedChange(state:boolean) {
      isSelected.value = state

      eventCenter.emit(GLOBAL_EVENT.CHECKBOX_SELECTED_ALL_CHANGE_TABLE, {
        isSelected: state,
      },
      )
    }
    // set selected all info
    function setSelectedAllInfo({ isSelected: newState, isIndeterminate }:any) {
      isSelected.value = newState
      isIndeterminate.value = isIndeterminate
    }
    const checkboxProps = {
      class: clsName('checkbox-wrapper'),
      isControlled: true,
      isSelected,
      indeterminate: isIndeterminate,
      onCheckedChange: (isSelectedParam:boolean) => selectedChange(isSelectedParam),
    }
    onMounted(() => {
      // receive selected all info
      eventCenter.on(GLOBAL_EVENT.CHECKBOX_SELECTED_ALL_INFO, (params:boolean) => {
        setSelectedAllInfo(params)
      })
    })
    onUnmounted(() => {
      eventCenter.off(GLOBAL_EVENT.CHECKBOX_SELECTED_ALL_INFO, (params:boolean) => {
        setSelectedAllInfo(params)
      })
    })

    return () => <VeCheckbox {...checkboxProps} />
  },
})
