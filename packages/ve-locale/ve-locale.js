import { shallowRef } from 'vue'
import { cloneDeep } from '@P/src/utils/index'
import LangEN from '@P/src/locale/lang/en-US'

const defaultLang = shallowRef(cloneDeep(LangEN))

export default {
  getMessage() {
    return defaultLang.value
  },
  use(lang) {
    this.update(lang)
  },
  update(lang = {}) {
    if (lang.pagination) {
      defaultLang.value.pagination = lang.pagination
    }
    if (lang.table) {
      defaultLang.value.table = lang.table
    }
    // defaultLang.value = merge(defaultLang.value, lang)
  },
}
