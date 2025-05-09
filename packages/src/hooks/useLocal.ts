import { ref } from 'vue'

import { shallowRef, triggerRef } from 'vue'
import { cloneDeep } from '@P/src/utils/index'
import LangEN from '@P/src/locale/lang/en-US'
import type { LocalInfo } from '@P/ve-locale/local'

const defaultLang = shallowRef(cloneDeep(LangEN))

// export const useLocal = (local: LocalInfo) => {
//   triggerRef(defaultLang)
//   if (local.pagination) {
//     defaultLang.value.pagination = local.pagination
//   }
//   if (local.table) {
//     defaultLang.value.table = local.table
//   }
//   return defaultLang.value
// }
export const useLocal = () => {
  if (localStorage.getItem('VUE_FANTBALE_LOCAL') === undefined) {
    localStorage.setItem('VUE_FANTBALE_LOCAL', 'ZH-CN')
  }
}

export const getLocal = () => {
  return defaultLang.value
}