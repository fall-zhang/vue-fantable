import { createApp } from 'vue'
import { mount, VueWrapper } from '@vue/test-utils'
import vueFantable from '@P/index'
import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest'

beforeEach(() => {
  mount({
    global: {
      plugins: [vueFantable]
    }
  })
})

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
