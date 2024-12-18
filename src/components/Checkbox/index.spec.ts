import { mount } from '@vue/test-utils'
import { expect, describe, it } from 'vitest'
import Checkbox from './index.vue'

describe('Checkbox', () => {
  it('renders unchecked by default', () => {
    const wrapper = mount(Checkbox)
    const uncheckedIcon = wrapper.find('[data-testid="unchecked"]')
    const checkedIcon = wrapper.find('[data-testid="checked"]')

    // Check that the unchecked icon is rendered and checked icon is not
    expect(uncheckedIcon.exists()).toBe(true)
    expect(checkedIcon.exists()).toBe(false)
  })

  it('renders checked when modelValue is true', () => {
    const wrapper = mount(Checkbox, {
      props: {
        modelValue: true
      }
    })
    const uncheckedIcon = wrapper.find('[data-testid="unchecked"]')
    const checkedIcon = wrapper.find('[data-testid="checked"]')

    // Check that the checked icon is rendered and unchecked icon is not
    expect(uncheckedIcon.exists()).toBe(false)
    expect(checkedIcon.exists()).toBe(true)
  })

  it('toggles checked state on click', async () => {
    const wrapper = mount(Checkbox)

    // Initial state should be unchecked
    expect(wrapper.emitted()['update:modelValue']).toBeUndefined()

    // Click to check the checkbox
    await wrapper.trigger('click')
    expect(wrapper.emitted()['update:modelValue']).toBeTruthy()
    expect(wrapper.emitted()['update:modelValue'][0]).toEqual([true])

    // Update the modelValue to true to simulate the state change
    await wrapper.setProps({ modelValue: true })

    // Click to uncheck the checkbox
    await wrapper.trigger('click')
    expect(wrapper.emitted()['update:modelValue'][1]).toEqual([false])
  })

  it('toggles checked state on enter key press', async () => {
    const wrapper = mount(Checkbox)

    // Initial state should be unchecked
    expect(wrapper.emitted()['update:modelValue']).toBeUndefined()

    // Trigger the Enter key to check the checkbox
    await wrapper.trigger('keydown.enter')
    expect(wrapper.emitted()['update:modelValue']).toBeTruthy()
    expect(wrapper.emitted()['update:modelValue'][0]).toEqual([true])

    // Update the modelValue to true to simulate the state change
    await wrapper.setProps({ modelValue: true })

    // Trigger the Enter key to uncheck the checkbox
    await wrapper.trigger('keydown.enter')
    expect(wrapper.emitted()['update:modelValue'][1]).toEqual([false])
  })

  it('toggles checked state on space key press', async () => {
    const wrapper = mount(Checkbox)

    // Initial state should be unchecked
    expect(wrapper.emitted()['update:modelValue']).toBeUndefined()

    // Trigger the Space key to check the checkbox
    await wrapper.trigger('keydown.space')
    expect(wrapper.emitted()['update:modelValue']).toBeTruthy()
    expect(wrapper.emitted()['update:modelValue'][0]).toEqual([true])

    // Update the modelValue to true to simulate the state change
    await wrapper.setProps({ modelValue: true })

    // Trigger the Space key to uncheck the checkbox
    await wrapper.trigger('keydown.space')
    expect(wrapper.emitted()['update:modelValue'][1]).toEqual([false])
  })
})
