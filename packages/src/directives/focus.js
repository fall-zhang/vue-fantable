/*
  element focus
*/
import { nextTick } from 'vue'
export default {
  updated(el, binding, vnode) {
    const value = binding.value
    // 如果没有 focus
    if (value && document.activeElement !== el) {
      const { focus, select } = el
      nextTick(() => {
        if (focus) {
          el.focus()
        }

        if (select) {
          el.select()
        }
      })
    }
  },
  unmounted(el, { value }) {
    if (value) {
      const { focus } = value
      if (focus) {
        el.focus()
      }
    }
  },
}
