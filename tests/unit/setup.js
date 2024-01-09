import { createApp } from 'vue'

import { Wrapper } from '@vue/test-utils'
import vueFantable from '../../packages/index'
const app = createApp()
app.use(vueFantable)

// add Wrapper prototype
Object.assign(Wrapper.prototype, {
  findResizeObserver() {
    return this.findComponent({ name: 'vue-dom-resize-observer' })
  },
  triggerResizeObserver({ width = 0, height = 0 }) {
    const ob = this.findResizeObserver()
    ob.vm.resizeListener({ width, height })
  },
})
