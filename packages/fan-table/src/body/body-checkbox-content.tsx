import VeCheckbox from '@P/ve-checkbox/ve-checkbox.js'
import { COMPS_NAME } from '../util/constant'
import { clsName } from '../util/index'
// import eventCenter from '@P/events/event-center'
import { GLOBAL_EVENT } from '@P/events/global-events'
import { computed, defineComponent, inject, reactive, ref, watch } from 'vue'
import { EventType } from 'mitt'
export default defineComponent({
  name: COMPS_NAME.FAN_TABLE_BODY_CHECKBOX_CONTENT,
  props: {
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

  setup(props,) {
    const isSelected = ref(false)
    const eventCenter = inject<Record<EventType, any>>('eventCenter')!

    const disabled = computed(() => {
      let result = false
      if (!props.checkboxOption) {
        return
      }
      const { disableSelectedRowKeys } = props.checkboxOption

      if (Array.isArray(disableSelectedRowKeys) && disableSelectedRowKeys.includes(props.rowKey)) {
        result = true
      }

      return result
    })
    // 是否是受控属性（取决于selectedRowKeys）
    const isControlledProp = computed(() => {
      const checkboxOption = props.checkboxOption
      return checkboxOption && Array.isArray(checkboxOption.selectedRowKeys)
    },)
    watch(() => props.internalCheckboxSelectedRowKeys, () => {
      // init selected
      let result = false
      const selectKeys = props.internalCheckboxSelectedRowKeys
      if (Array.isArray(selectKeys) && selectKeys.includes(props.rowKey)) {
        result = true
      }
      isSelected.value = result
    }, {
      immediate: true,
    },)

    // selected change
    function selectedChange(isRecSelected:boolean) {
      // 非受控
      if (!isControlledProp.value) {
        isSelected.value = isRecSelected
      }
      eventCenter.emit(GLOBAL_EVENT.CHECKBOX_SELECTED_ROW_CHANGE, {
        rowKey: props.rowKey,
        isSelected: isRecSelected,
      })
    }

    const checkboxProps = reactive({
      class: clsName('checkbox-wrapper'),
      isControlled: true,
      isSelected,
      disabled,
      onCheckedChange: (isSelected:boolean) => selectedChange(isSelected),
    })

    return () => <VeCheckbox {...checkboxProps} />
  },
})
// 118