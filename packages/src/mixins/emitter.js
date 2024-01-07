/*
fork from:
https://github.com/ElemeFE/element
*/
import eventCenter from '@P/events/event-center'
function broadcast(componentName, eventName, params) {
  if (!this.$children) return
  this.$children.forEach((child) => {
    const name = child.$options.name

    if (name === componentName) {
      child.$emit.apply(child, [eventName].concat(params))
    } else {
      broadcast.apply(child, [componentName, eventName].concat([params]))
    }
  })
}
export default {
  methods: {
    dispatch(componentName, eventName, params) {
      // console.log(eventName.slice(3))
      eventCenter.emit(eventName, params)
      // const handledName = eventName.slice(3)

      // let parent = this.$parent || this.$root
      // let name = parent.$options.name

      // while (parent && (!name || name !== componentName)) {
      //   parent = parent.$parent

      //   if (parent) {
      //     name = parent.$options.name
      //   }
      // }
      // if (parent) {
      //   parent.$emit.apply(parent, [handledName].concat(params))
      // } else {
      //   console.error(`${componentName} was not found.`)
      // }
    },
    broadcast(componentName, eventName, params) {
      const handledName = eventName.slice(3)
      // eventCenter.emit(eventName, params)
      broadcast.call(this, componentName, handledName, params)
    },
  },
}
