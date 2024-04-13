import { useLocal, getLocal } from '@P/hooks/useLocal'

export default {
  getMessage() {
    return getLocal()
  },
  use(lang) {
    useLocal(lang)
  },
  update(lang = {}) {
    useLocal(lang)
    // defaultLang.value = merge(defaultLang.value, lang)
  },
}
