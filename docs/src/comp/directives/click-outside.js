/*
  click outside
  desc: 绑定元素触发的事件不在指定事件中，将会触发。此指令可替代 clickoutside
*/

export default {
  mounted (el, binding, vNode) {
    const { events, callback } = binding.value

    if (
      Array.isArray(events) &&
      events.length &&
      typeof callback === 'function'
    ) {
      const handler = (e) => {
        if (!el.contains(e.target) && el !== e.target) {
          callback(e)
        } else {
          return false
        }
      }

      el.__eventsOutside__ = handler

      events.forEach((eventName) => {
        document.addEventListener(eventName, handler, true)
      })
    } else {
      console.log('🚀 ~ mounted ~ vNode.context:', vNode)
      console.error(`[events-outside] Please provided 'events' and 'callback' in `, vNode)
    }
  },

  unmounted (el, binding, vNode) {
    const { events } = binding.value
    events.forEach((eventName) => {
      document.removeEventListener(eventName, el.__eventsOutside__, true)
    })
    el.__eventsOutside__ = null
  },
}
