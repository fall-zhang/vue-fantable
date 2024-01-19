import { mount } from '@vue/test-utils'
import veIcon from '@P/ve-icon/ve-icon'
import { vi, describe, it, expect, beforeEach, afterEach, beforeAll } from 'vitest'

describe('veIcon', () => {
  it('render by different props', () => {
    const wrapper = mount({
      template: `
            <div>
            <ve-icon name="double-right-arrow" />
            <ve-icon name="double-right-arrow" color="blue" />
            <ve-icon name="double-right-arrow" :size="40" />
          </div>`,
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})

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
  it('font-size prop', () => {
    const wrapper = mount(veIcon, {
      props: {
        name: 'double-right-arrow',
        size: 50,
      },
    })
    expect(wrapper.attributes('style')).toBe('font-size: 50px;')
  })

  describe('warns', () => {
    let errorSpy
    beforeEach(() => {
      errorSpy = vi
        .spyOn(console, 'error')
        .mockImplementation()
    })

    afterEach(() => {
      errorSpy.mockRestore()
    })

    const errorIconName = 'double-right-arrow2'

    it('warning on error icon name', () => {
      const wrapper = mount(veIcon, {
        props: {
          name: errorIconName,
        },
      })
      expect(errorSpy).toBeCalledWith(
        `${errorIconName} is not found in VeIcon.`,
      )
    })
  })
})