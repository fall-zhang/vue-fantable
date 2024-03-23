<template>
  <label class="ve-checkbox" :style="checkboxStyle">
    <span :class="checkboxClass">
      <input :checked="internalIsSelected" :class="clsName('input')" type="checkbox" :value="label"
        @change="onCheckboxChange" />

      <span :class="clsName('inner')"></span>
    </span>
    <span :class="clsName('label')">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>
<script setup>
import { hasValue } from '@P/src/utils/index'
import { clsName } from './util/index'
import { COMPS_NAME } from './util/constant'
import { GROUP_SYMBOL, GROUP_MODEL_VALUE } from '@P/ve-checkbox-group/src/util/constant'
import { computed, inject, watch, ref } from 'vue'
const fatherGroup = inject(GROUP_SYMBOL, 'default')
const fatherGroupValue = inject(GROUP_MODEL_VALUE, {})
const props = defineProps({
  // 当前 checkbox 选中状态,实现 v-model
  modelValue: {
    type: [String, Number, Boolean],
    default: null,
  },
  label: {
    type: [String],
    default: null,
  },
  // is disabled checked
  disabled: Boolean,
  // partial selection effect
  indeterminate: Boolean,
  // 是否是可控组件
  isControlled: {
    type: Boolean,
    default: false,
  },
  // isControlled 为true 时生效
  isSelected: {
    type: Boolean,
    default: false,
  },
})
const emit = defineEmits(['input', 'checkedChange', 'update:modelValue'])
const model = ref(false)

initModel()
// get label content
function initModel() {
  if (hasValue(props.modelValue)) {
    model.value = props.modelValue
  } else if (isCheckBoxGroup()) {
    model.value = fatherGroupValue.modelValue.includes(props.label)
  }
}
const checkboxClass = computed(() => {
  const checked = clsName('checked')
  const disabled = clsName('disabled')
  const indeterminate = clsName('indeterminate')
  const content = clsName('content')
  const result = {
    [content]: true,
    [checked]: internalIsSelected.value,
    [disabled]: props.disabled,
    [indeterminate]: props.indeterminate,
  }
  if (isCheckBoxGroup()) {
    result[checked] = fatherGroupValue.modelValue.includes(props.label)
  }

  return result
})
// 是否横向显示还是纵向显示
const checkboxStyle = computed(() => {
  const displayState = fatherGroupValue.isVerticalShow
  return {
    display: displayState ? 'block' : 'inline-block',
  }
})
// 是否选中
const internalIsSelected = computed(() => {
  return props.isControlled ? props.isSelected : model.value
})

watch(() => props.modelValue, () => {
  if (!props.disabled) {
    model.value = props.modelValue
  }
})
// is checkbox group
function isCheckBoxGroup() {
  return typeof fatherGroup === 'function'
}
// checkbox change
function onCheckboxChange(event) {
  if (props.disabled) {
    return false
  }
  const isChecked = event.target.checked

  if (!props.isControlled) {
    emit('input', isChecked)
  }
  // emit(EMIT_EVENTS.ON_CHECKED_CHANGE, isChecked)
  emit('checkedChange', isChecked)
  emit('update:modelValue', isChecked)

  if (isCheckBoxGroup()) {
    // update parent comp:checkbox-group
    fatherGroup(props.label, isChecked)
  }
}

// 通过单选更新 model
// function updateModelBySingle() {
//   if (!props.disabled) {
//     model.value = props.modelValue
//   }
// }

// 父组件调用更新 model
</script>
<script>
export default {
  name: COMPS_NAME.VE_CHECKBOX,
}
</script>