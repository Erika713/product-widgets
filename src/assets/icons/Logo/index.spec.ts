// Import necessary testing utilities from Vitest and Vue Test Utils
import { expect, describe, it } from 'vitest'
import { mount } from '@vue/test-utils'
import Logo from './index.vue' // Import the Logo component to be tested

// Describe the test suite for the Logo component
describe('Logo', () => {
  // Define a test case to check if the Logo component renders correctly
  it('Logo is rendered', () => {
    // Mount the Logo component using Vue Test Utils
    const wrapper = mount(Logo)
    
    // Find the SVG element within the mounted component
    const svg = wrapper.find('svg')
    
    // Assert that the SVG element exists in the rendered output
    expect(svg.exists()).toBeTruthy()
  })
})