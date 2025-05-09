import { useLocal, getLocal } from '@P/src/hooks/useLocal'
import type { LocalInfo } from './local'

export default {
  getMessage() {
    return getLocal()
  },
  use(lang: LocalInfo) {
    useLocal(lang)
  },
  update(lang: LocalInfo = {}) {
    useLocal(lang)
    // defaultLang.value = merge(defaultLang.value, lang)
  },
}
