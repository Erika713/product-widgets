// Import necessary functions and types from the testing library and Vue test utils
import { expect, describe, it } from 'vitest'
import { mount } from '@vue/test-utils'
import Info from './index.vue' // Import the Info component to be tested

// Describe the test suite for the Info component
describe('Info', () => {
  // Define a test case to check if the Info component is rendered correctly
  it('Info is rendered', () => {
    // Mount the Info component using Vue Test Utils
    const wrapper = mount(Info)
    
    // Find the SVG element within the mounted component
    const svg = wrapper.find('svg')
    
    // Assert that the SVG element exists in the rendered output
    expect(svg.exists()).toBeTruthy()
  })
})