import { mount } from '@vue/test-utils'
import veIcon from '@P/ve-icon/ve-icon'
import { later } from '../util'
import { vi, describe, it, expect, beforeEach, afterEach, beforeAll } from 'vitest'

beforeAll(() => {
  globalThis.ResizeObserver = class ResizeObserver {
    observe() {
      // do nothing
    }

    unobserve() {
      // do nothing
    }

    disconnect() {
      // do nothing
    }
  }
})
describe('veIcon', () => {

})
