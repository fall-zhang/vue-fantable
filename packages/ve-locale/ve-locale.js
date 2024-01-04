import { shallowRef } from 'vue'
import { cloneDeep } from '@P/utils/index.js'
import { merge } from 'lodash-es'
import LangEN from '../src/locale/lang/en-US'

const defaultLang = shallowRef(cloneDeep(LangEN))

export default {
  getMessage() {
    return defaultLang.value
  },
  use(lang) {
    this.update(lang)
  },
  update(lang = {}) {
    defaultLang.value = merge(defaultLang.value, lang)
  },
}
