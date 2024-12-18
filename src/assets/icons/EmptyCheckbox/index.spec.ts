import { expect, describe, it } from 'vitest'
import { mount } from '@vue/test-utils'
import EmptyCheckbox from './index.vue'

// Describe the test suite for the EmptyCheckbox
describe('EmptyCheckbox', () => {
  // Define a test case to check if the EmptyCheckbox renders correctly
  it('EmptyCheckbox is rendered', () => {
    // Mount the EmptyCheckbox using Vue Test Utils
    const wrapper = mount(EmptyCheckbox)

    // Find the SVG element within the mounted component
    const svg = wrapper.find('svg')

    // Assert that the SVG element exists in the rendered output
    expect(svg.exists()).toBeTruthy()
  })
})
