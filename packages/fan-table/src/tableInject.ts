import { provide } from 'vue'

export function tableInject() {
  provide('groupData', 'groupData')
  provide('fan-parentRendered', false)
  provide('fan-cellSelectionData', false)
  provide('fan-parentRendered', false)
  provide('fan-checkboxOption', false)
  provide('fan-allRowKeys', false)
  provide('fan-rowKeyFieldName', false)
  provide('fan-cellStyleOption', false)
  provide('fan-cellSpanOption', false)
  provide('fan-eventCustomOption', false)
  provide('fan-cellSelectionData', false)
  provide('fan-hasFixedColumn', false)
  // 高亮的行
  provide('fan-highlightRowKey', false)
  provide('fan-col-groups', false)
  // tableEl?
}