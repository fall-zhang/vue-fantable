import VeDropdown from '@P/ve-dropdown/ve-dropdown'
import { COMPS_NAME } from './util/constant'
import { clsName } from './util/index'
import { VeIcon } from '@P/ve-icon/ve-icon'
import { ICON_NAMES } from '@P/ve-icon/src/util/constant'
import { hasValue } from '@P/src/utils/index'
import { selectProps } from './selectProps'
import { computed, ref, watch, EmitsOptions, AppContext, defineComponent } from 'vue'
import type { SelectProps } from './selectProps'
import deepClone from '@P/src/utils/cloneDeep'
export default defineComponent({
  name: COMPS_NAME.VE_SELECT,
  props: selectProps(),
  emits: ['selectChange', 'update:modelValue'],
  setup(props, { slots, attrs, emit, expose }) {
    const internalOptions = ref([])

    const inputValue = ref<string>('')
    initModel()
    const dropdownVisible = ref(false)
    const iconClass = computed<Record<string, boolean>>(() => {
      const toggleIcon = clsName('toggle-icon')
      return {
        [clsName('show')]: dropdownVisible.value,
        [toggleIcon]: true,
      }
    })
    watch(() => props.modelValue, () => {
      initModel()
    })
    // 初始化
    function initModel() {
      if (hasValue(props.modelValue)) {
        internalOptions.value = deepClone(props.modelValue)
      }
    }
    // 显示选中的信息
    function showSelectInfo():string {
      let result

      const labels = deepClone(props.items)
      if (Array.isArray(labels) && labels.length > 0) {
        result = labels.join()
      } else {
        result = props.placeholder
      }

      return result
    }

    // 当前选中项的 label
    // function selectedLabels():any[] {
    //   return internalOptions.value
    //     .filter((x:any) => x.selected)
    //     .map((x:any) => {
    //       if (x.selected) {
    //         return x.label
    //       }
    //       return ''
    //     })
    // }

    // dropdown change event
    function dropdownChange() {
      // 使用户传入的 v-model 生效
      emit('update:modelValue', internalOptions.value)
      emit('selectChange', internalOptions.value)
    }
    const dropdownProps = {
      class: 've-select',
      isSelect: true,
      width: props.width,
      maxWidth: props.maxWidth,
      isMultiple: props.multiple,
      textAlign: props.textAlign,
      isInput: props.isInput,
      // v-model
      modelValue: internalOptions.value,
      items: props.items,
      hideByItemClick: true,
      popperAppendTo: props.popperAppendTo,
      style: {
        width: props.width,
      },
      // v-model
      onInput: (val:any) => {
        internalOptions.value = val
        dropdownChange()
      },
      // dropdown visible change
      onDropdownVisibleChange: (visible:any) => {
        dropdownVisible.value = visible
      },
    }

    let content = <></>
    if (props.isInput) {
      content = (
        <input
          class={clsName('input')}
          placeholder='63416464'
          type="text"
          v-model={inputValue.value}
        />
      )
    } else {
      content = (
        <span class={clsName('selected-span')}>
          {showSelectInfo()}
        </span>
      )
    }

    return (
      <VeDropdown {...dropdownProps}>
        <span style={{ display: 'flex', alignItems: 'center' }}>
          {content}
          <VeIcon
            name={ICON_NAMES.BOTTOM_ARROW}
            class={iconClass}
          />
        </span>
      </VeDropdown>
    )
  },
}
)