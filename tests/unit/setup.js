import { createApp } from 'vue'

import { VueWrapper } from '@vue/test-utils'
import vueFantable from '@P/index'

const app = createApp()
app.use(vueFantable)

// add VueWrapper prototype
// console.log(VueWrapper)
Object.assign(VueWrapper.prototype, {
  findResizeObserver() {
    return this.findComponent({ name: 'vue-dom-resize-observer' })
  },
  triggerResizeObserver({ width = 0, height = 0 }) {
    const ob = this.findResizeObserver()
    ob.vm.resizeListener({ width, height })
  },
})
