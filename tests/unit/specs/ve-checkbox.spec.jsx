import { mount } from '@vue/test-utils'
// import { VeCheckboxGroup } from '@P/index'
import VeCheckboxGroup from '@P/ve-checkbox-group/src/index.vue'
import VeCheckbox from '@P/ve-checkbox/src/index.vue'
import { later } from '../util'
import { describe, it, expect } from 'vitest'
import { nextTick } from 'vue'

describe('VeCheckbox', () => {
  it('render normal', () => {
    const wrapper = mount(VeCheckbox, {
      template: `<ve-checkbox label="南瓜" />`,
      props: {
        modelValue: true,
        label: 'orange',
      },
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('render with checkbox group', async () => {
    const wrapper = mount({
      components: {
        VeCheckboxGroup, VeCheckbox
      },
      template: `
        <ve-checkbox-group v-model="checkboxValue">
          <ve-checkbox label="南瓜" />
          <ve-checkbox disabled label="西红柿" />
          <ve-checkbox label="哈密瓜" />
          <ve-checkbox label="水蜜桃" />
        </ve-checkbox-group>
      `,
      data() {
        return {
          checkboxValue: ['西红柿', '哈密瓜'],
        }
      },
    })

    // console.log("🚀 ~ it ~ wrapper.findComponent():", VueWrapper)
    // console.log("🚀 ~ it ~ wrapper.element():", wrapper.element)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('render with indeterminate', () => {
    const wrapper = mount(VeCheckbox, {
      props: {
        modelValue: true,
        label: 'orange',
        disabled: true,
      },
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('render with disabled', () => {
    const wrapper = mount(VeCheckbox, {
      props: {
        modelValue: true,
        label: 'orange',
        indeterminate: true,
      },
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('value prop', () => {
    const wrapper = mount(VeCheckbox, {
      props: {
        modelValue: true,
        label: 'orange',
      },
    })

    expect(wrapper.find('.ve-checkbox-checked').exists()).toBe(true)
  })

  it('label prop', () => {
    const wrapper = mount(VeCheckbox, {
      props: {
        modelValue: true,
        label: 'orange',
      },
    })

    expect(wrapper.find('.ve-checkbox-label').text()).toBe('orange')
  })

  it('label content slot', () => {
    const wrapper = mount(VeCheckbox, {
      slots: {
        default: 'orange',
      },
    })

    expect(wrapper.find('.ve-checkbox-label').text()).toBe('orange')
  })

  it('disbled prop', () => {
    const wrapper = mount(VeCheckbox, {
      props: {
        disabled: true,
        label: 'orange',
      },
    })

    expect(wrapper.find('.ve-checkbox-disabled').exists()).toBe(true)
  })

  it('disbled selected with checked statue', async () => {
    const wrapper = mount(VeCheckbox, {
      props: {
        modelValue: true,
        disabled: true,
        label: 'orange',
      },
    })
    expect(wrapper.find('.ve-checkbox-checked').exists()).toBe(true)

    wrapper.find('.ve-checkbox').trigger('click')
    await later()
    expect(wrapper.find('.ve-checkbox-checked').exists()).toBe(true)
  })

  it('disbled selected with unchecked statue', async () => {
    const wrapper = mount(VeCheckbox, {
      props: {
        modelValue: false,
        disabled: true,
        label: 'orange',
      },
    })
    expect(wrapper.find('.ve-checkbox-checked').exists()).toBe(false)

    wrapper.find('.ve-checkbox').trigger('click')
    await later()
    expect(wrapper.find('.ve-checkbox-checked').exists()).toBe(false)
  })

  it('indeterminate prop', () => {
    const wrapper = mount(VeCheckbox, {
      props: {
        indeterminate: true,
        label: 'orange',
      },
    })
    expect(wrapper.find('.ve-checkbox-indeterminate').exists()).toBe(true)
  })

  it('isControlled prop', async () => {
    const wrapper = mount(VeCheckbox, {
      props: {
        isControlled: true,
        label: 'orange',
      },
    })

    await wrapper.setProps({ isSelected: true })
    expect(wrapper.find('.ve-checkbox-checked').exists()).toBe(true)

    await wrapper.setProps({ isSelected: false })
    expect(wrapper.find('.ve-checkbox-checked').exists()).toBe(false)
  })

  it('isSelected prop', () => {
    const wrapper = mount(VeCheckbox, {
      props: {
        isControlled: true,
        isSelected: true,
        label: 'orange',
      },
    })

    expect(wrapper.find('.ve-checkbox-checked').exists()).toBe(true)
  })

  it('click event', async () => {
    const wrapper = mount({
      components: {
        VeCheckbox
      },
      template: `<ve-checkbox v-model="checkboxValue">orange</ve-checkbox>`,
      data() {
        return {
          checkboxValue: false,
        }
      },
    })

    // const wayofTag = wrapper.find('ve-checkbox')
    // console.log('🚀 ~ it ~ wayofClass:', wrapper.find('.ve-checkbox').html())
    wrapper.find('.ve-checkbox').trigger('change')
    await later()
    expect(wrapper.find('.ve-checkbox-checked').exists()).toBe(true)
  })

  it('checked change emit', async () => {
    const wrapper = mount(VeCheckbox, {
      props: {
        modelValue: false,
        label: 'orange',
      },
    })

    wrapper.find('.ve-checkbox').trigger('click')
    wrapper.find('.ve-checkbox').trigger('click')

    await later()

    // expect(wrapper.emitted('checked-change').length).toEqual(2)
    // expect(wrapper.emitted('checked-change').length).toEqual(2)
    console.log("🚀 ~ it ~ wrapper.emitted('checked-change'):", wrapper.emitted('checked-change'))
    expect(wrapper.emitted('checked-change')[0]).toEqual([true])
    expect(wrapper.emitted('checked-change')[1]).toEqual([false])
  })

  it('checkboxGroup data change', async () => {
    const wrapper = mount({
      components: {
        VeCheckboxGroup, VeCheckbox
      },
      template: `
        <ve-checkbox-group v-model="checkboxValue">
          <ve-checkbox label="南瓜" />
          <ve-checkbox disabled label="西红柿" />
          <ve-checkbox label="哈密瓜" />
          <ve-checkbox label="水蜜桃" />
        </ve-checkbox-group>
      `,
      data() {
        return {
          checkboxValue: ['西红柿', '哈密瓜'],
        }
      },
    })

    const checkeds1 = wrapper.findAll('.ve-checkbox-checked')
    expect(checkeds1.length).toBe(2)

    wrapper.setData({ checkboxValue: ['西红柿'] })

    await later()

    const checkeds2 = wrapper.findAll('.ve-checkbox-checked')

    expect(checkeds2.length).toBe(1)

    wrapper.setData({ checkboxValue: ['西红柿', '水蜜桃'] })

    await later()

    const checkeds3 = wrapper.findAll('.ve-checkbox-checked')

    expect(checkeds3.length).toBe(2)
  })

  it('checkbox data change width checkboxGroup', async () => {
    const wrapper = mount({
      components: {
        VeCheckbox,
        VeCheckboxGroup
      },
      template: `
        <ve-checkbox-group v-model="checkboxValue" >
          <ve-checkbox label="南瓜" />
          <ve-checkbox disabled label="西红柿" />
          <ve-checkbox label="哈密瓜" />
          <ve-checkbox label="水蜜桃" />
        </ve-checkbox-group>
            `,
      data() {
        return {
          checkboxValue: ['西红柿', '哈密瓜'],
        }
      },
    })
    const checkboxDOM = wrapper.find('.ve-checkbox-input')
    console.log('🚀 ~ it ~ checkboxDOM:', checkboxDOM)
    checkboxDOM.trigger('click')

    await nextTick()

    console.log('🚀 ~ it ~ checkboxDOM:', wrapper.find('input[type=checkbox]'))
    expect(wrapper.vm.checkboxValue).toEqual(['南瓜', '西红柿', '哈密瓜'])
  })
})
