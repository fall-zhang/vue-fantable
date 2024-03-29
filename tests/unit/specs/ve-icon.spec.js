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

describe('veIcon', () => {
  it('font-size prop', () => {
    const wrapper = mount(veIcon, {
      props: {
        name: 'sort-bottom-arrow',
      },
    })
    expect(wrapper.props('name')).toBe('sort-bottom-arrow')
  })

  // describe('warns', () => {
  //   let errorSpy
  //   beforeEach(() => {
  //     errorSpy = vi
  //       .spyOn(console, 'error')
  //       .mockImplementation()
  //   })

  //   afterEach(() => {
  //     errorSpy.mockRestore()
  //   })

  //   const errorIconName = 'double-right-arrow2'

  //   it('warning on error icon name', () => {
  //     const wrapper = mount(veIcon, {
  //       props: {
  //         name: errorIconName,
  //       },
  //     })
  //     expect(errorSpy).toBeCalledWith(
  //       `${errorIconName} is not found in VeIcon.`,
  //     )
  //   })
  // })
})