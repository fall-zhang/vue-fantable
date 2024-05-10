import { inject, provide } from 'vue'

const groupData = Symbol('groupData')

export function tableInject() {
  provide('fan-groupData', 'groupData')
  provide('fan-parentRendered', false)
  provide('fan-cellSelectionData', false)
  provide('fan-parentRendered', false)
  provide('fan-checkboxOption', false)
  provide('allRowKeys', false)
}