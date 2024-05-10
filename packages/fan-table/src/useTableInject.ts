import { inject, provide } from 'vue'

const groupData = Symbol('groupData')

export function tableInject() {
  provide('groupData', 'groupData')
  provide('parentRendered', false)
  provide('cellSelectionData', false)
  provide('parentRendered', false)
}