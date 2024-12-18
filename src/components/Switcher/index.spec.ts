import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import Switcher from './index.vue'

// Describe the test suite for the Switcher component
describe('Switcher', () => {
  // Test case for rendering the Switcher with default props
  it('renders correctly with default props', () => {
    // Mount the Switcher component with modelValue set to false
    const wrapper = mount(Switcher, {
      props: {
        modelValue: false // Default state of the switch
      }
    })

    // Check if the component exists
    expect(wrapper.exists()).toBe(true)
    // Verify that the aria-pressed attribute is set to 'false' for the button role
    expect(wrapper.find('[role="button"]').attributes('aria-pressed')).toBe('false')
  })

  // Test case for rendering the Switcher when modelValue is true
  it('renders correctly when modelValue is true', () => {
    // Mount the Switcher component with modelValue set to true
    const wrapper = mount(Switcher, {
      props: {
        modelValue: true // Active state of the switch
      }
    })

    // Verify that the aria-pressed attribute is set to 'true' for the button role
    expect(wrapper.find('[role="button"]').attributes('aria-pressed')).toBe('true')
  })
})