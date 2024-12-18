import { mount, VueWrapper } from '@vue/test-utils'
import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import Tooltip from './index.vue'

// Describe the Tooltip component test suite
describe('Tooltip Component', () => {
  let wrapper: VueWrapper

  // Set up a new wrapper for the Tooltip component before each test
  beforeEach(() => {
    wrapper = mount(Tooltip, {
      props: {
        text: 'Tooltip text' // Default prop value for the tooltip text
      },
      slots: {
        tooltip: 'Custom tooltip content' // Custom content for the tooltip slot
      }
    })
  })

  // Clean up after each test by unmounting the wrapper
  afterEach(() => {
    wrapper.unmount()
  })

  // Test to check if the tooltip displays the correct custom content
  it('should display the correct tooltip content', () => {
    // Assert that the text in the tooltip matches the custom content provided in the slot
    expect(wrapper.find('[data-testid="tooltip"]').text()).toBe('Custom tooltip content')
  })

  // Test to check if the default tooltip text is displayed when no slot is provided
  it('should display default tooltip text if no slot is provided', async () => {
    // Mount the Tooltip component without a custom slot
    const wrapperWithoutSlot = mount(Tooltip, {
      props: {
        text: 'Default tooltip text' // Default tooltip text to be displayed
      }
    })

    // Simulate a mouseover event to trigger the tooltip display
    await wrapperWithoutSlot.trigger('mouseover')

    // Assert that the tooltip displays the default text when no slot is provided
    expect(wrapperWithoutSlot.find('[data-testid="tooltip"]').text()).toBe('Default tooltip text')
  })
})
