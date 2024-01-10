/*
fork from:
https://github.com/ElemeFE/element
*/
import eventCenter from '@P/events/event-center'
export default {
  methods: {
    dispatch(componentName, eventName, params) {
      eventCenter.emit(eventName, params)
    },
  },
}
