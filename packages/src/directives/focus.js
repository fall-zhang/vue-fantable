/*
  element focus
*/
import { nextTick } from 'vue'
export default {
  mounted(el, binding, vnode) {
  },
  updated(el, binding, vnode) {
    const value = binding.value
    console.log(value)
    if (value) {
      const { focus, select } = value

      console.log('🚀 ~ vnode.context.$nextTick ~ vnode:', vnode, focus, select)
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
