<template>
  <div class="ve-checkbox-group">
    <slot></slot>
  </div>
</template>
<script setup>
// import { getChildCompsByName } from '@P/src/utils/index'
import { GROUP_SYMBOL, COMPS_NAME, GROUP_MODEL_VALUE } from './util/constant'

import { provide } from 'vue'
const emit = defineEmits(['update:modelValue', 'change'])
const updateValueInject = (label, value) => {
  if (value) {
    if (!props.modelValue.includes(label)) {
      const newValue = props.modelValue.slice()
      newValue.push(label)
      emit('update:modelValue', newValue)
    }
  } else {
    if (props.modelValue.includes(label)) {
      const newValue = props.modelValue.filter(item => item !== label)
      emit('update:modelValue', newValue)
    }
  }
}
const props = defineProps({
  modelValue: {
    type: Array,
    default() {
      return []
    },
  },
  // 是否垂直排列显示（当时checkbox组时生效）
  isVerticalShow: {
    type: Boolean,
    default: false,
  },
})
provide(GROUP_SYMBOL, updateValueInject)
provide(GROUP_MODEL_VALUE, props)
// 更新子组件选中状态
// watch(() => props.modelValue, (newVal) => {
//   if (value) {
//     if (!props.modelValue.includes(label)) {
//       const newValue = props.modelValue.slice().push(label)
//       emit('update:modelValue', newValue)
//     }
//   } else {
//     if (props.modelValue.includes(label)) {
//       const newValue = props.modelValue.filter(item => item !== label)
//       emit('update:modelValue', newValue)
//     }
//   }
// })

</script>

<script>
export default {
  name: COMPS_NAME.VE_CHECKBOX_GROUP
}
</script>