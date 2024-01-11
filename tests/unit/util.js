import { nextTick } from 'vue'
import vi from 'vite'

export function later(delay = 0) {
  return new Promise((resolve) => {
    if (typeof delay === 'number') {
      setTimeout(() => {
        resolve()
      }, delay)
    } else {
      nextTick(() => {
        resolve()
      })
    }
  })
}

/*
 * @mockScrollTo
 * @desc mock scrollTo function
 */
export function mockScrollTo() {
  const fn = vi.fn()
  Element.prototype.scrollTo = fn
  return fn
}

/*
 * @mockElementMeasurement
 * @desc mock element measurement
 */
export function mockElementMeasurement(key, value) {
  Object.defineProperty(HTMLElement.prototype, key, {
    configurable: true,
    value,
  })
}

/*
 * @clearMockElementMeasurement
 * @desc clear mock element measurement
 */
export function clearMockElementMeasurement(key) {
  // const originalValue = Object.getOwnPropertyDescriptor(
  //     HTMLElement.prototype,
  //     key,
  // );

  const originalValue = {
    value: 1200,
    writable: false,
    enumerable: false,
    configurable: true,
  }

  Object.defineProperty(HTMLElement.prototype, key, originalValue)
}
