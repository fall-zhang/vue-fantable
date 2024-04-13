import { shallowRef, triggerRef } from 'vue'
import { cloneDeep } from '@P/src/utils/index'
import LangEN from '@P/src/locale/lang/en-US'
const defaultLang = shallowRef(cloneDeep(LangEN))
type LocalInfo = {
  
}
export const useLocal = (local) => {
  console.log('🚀 ~ useLocal ~ local:', local)
  triggerRef(defaultLang)
  if (local.pagination) {
    defaultLang.value.pagination = local.pagination
  }
  if (local.table) {
    defaultLang.value.table = local.table
  }
  return defaultLang.value
}

export const getLocal = () => {
  return defaultLang.value
}