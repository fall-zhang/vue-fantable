import { inject, provide } from 'vue'

const groupData = Symbol('groupData')

export function tableInject() {
  provide('fan-groupData', 'groupData')
  provide('fan-parentRendered', false)
  provide('fan-cellSelectionData', false)
  provide('fan-parentRendered', false)
  provide('fan-checkboxOption', false)
  provide('allRowKeys', false)
  provide('rowKeyFieldName', false)
  provide('cellStyleOption', false)
  provide('cellSpanOption', false)
  provide('eventCustomOption', false)
  provide('cellSelectionData', false)
  provide('hasFixedColumn', false)
  provide('colgroups', false)
}