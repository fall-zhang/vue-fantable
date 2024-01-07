/*
element focus
*/
export default {
  mounted: function (el, eee, vnode) {
    // console.log(el, eee)
    const value = eee.value
    if (value) {
      const { focus, select } = value

      vnode.context.$nextTick(() => {
        if (focus) {
          el.focus()
        }

        if (select) {
          el.select()
        }
      })
    }
  },
  unmounted: function (el, { value }) {
    if (value) {
      const { focus } = value
      if (focus) {
        el.focus()
      }
    }
  },
}
