import { expect, describe, it } from 'vitest'
import { mount } from '@vue/test-utils'
import Checkbox from './index.vue'

// Describe the test suite for the Checkbox
describe('Checkbox', () => {
  // Define a test case to check if the Checkbox is rendered correctly
  it('Checkbox is rendered', () => {
    // Mount the Checkbox using Vue Test Utils
    const wrapper = mount(Checkbox)

    // Find the SVG element within the mounted component
    const svg = wrapper.find('svg')

    // Assert that the SVG element exists in the rendered output
    expect(svg.exists()).toBeTruthy()
  })
})
