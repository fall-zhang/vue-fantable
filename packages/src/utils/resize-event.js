/*
fork from:
https://github.com/ElemeFE/element
*/
import { debounce } from '@U/index.js'
// import ResizeObserver from 'resize-observer-polyfill'
class ResizeObserverPro extends ResizeObserver {
  constructor(callback) {
    super(debounce(callback, 40))
  }
}
/* istanbul ignore next */
const resizeHandler = function (entries) {
  // console.log("🚀 ~ file: resize-event.js:10 ~ resizeHandler ~ entries:", entries)
  for (const entry of entries) {
    const listeners = entry.target.__resizeListeners__ || []
    if (listeners.length) {
      listeners.forEach((fn) => {
        fn(entry.contentRect)
      })
    }
  }
}

/* istanbul ignore next */
export const addResizeListener = function (element, fn) {
  if (!element.__resizeListeners__) {
    element.__resizeListeners__ = []
    element.__ro__ = new ResizeObserverPro(resizeHandler)
    element.__ro__.observe(element)
  }
  element.__resizeListeners__.push(fn)
}

/* istanbul ignore next */
export const removeResizeListener = function (element, fn) {
  if (!element || !element.__resizeListeners__) return
  element.__resizeListeners__.splice(
    element.__resizeListeners__.indexOf(fn),
    1,
  )
  if (!element.__resizeListeners__.length) {
    element.__ro__.disconnect()
  }
}
