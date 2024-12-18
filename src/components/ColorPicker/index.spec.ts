import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import ColorPicker from './index.vue'
import type { IColorSelectOption } from '@/interfaces'

// Utility function to convert hex to RGB
function hexToRgb(hex: string) {
  // Remove the hash at the start if it's there
  hex = hex.replace(/^#/, '')

  // Parse r, g, b values
  const bigint = parseInt(hex, 16)
  const r = (bigint >> 16) & 255
  const g = (bigint >> 8) & 255
  const b = bigint & 255

  return `rgb(${r}, ${g}, ${b})` // Return the RGB string
}

describe('ColorPicker', () => {
  // Sample color options for testing
  const options: IColorSelectOption[] = [
    { value: 'red', color: '#ff0000' },
    { value: 'green', color: '#00ff00' },
    { value: 'blue', color: '#0000ff' }
  ]

  // Test case to verify that color options are rendered correctly
  it('renders color options correctly', () => {
    const wrapper = mount(ColorPicker, {
      props: {
        modelValue: 'red', // Initial selected color
        options // Color options
      }
    })

    // Find all color option elements
    const colorOptions = wrapper.findAll('[data-testid="color-option"]')
    expect(colorOptions).toHaveLength(options.length)

    // Verify that each option has the correct background color
    colorOptions.forEach((option, index) => {
      const element = option.element as HTMLElement
      // Convert expected hex color to RGB for comparison
      expect(element.style.background).toBe(hexToRgb(options[index].color))
    })
  })

  // Test case to check if the active class is applied to the selected color
  it('applies active class to the selected color', () => {
    const wrapper = mount(ColorPicker, {
      props: {
        modelValue: 'green', // Set green as the selected color
        options
      }
    })

    // Find the active color option
    const activeOption = wrapper.find('.border-2')
    expect(activeOption.exists()).toBe(true)
    const element = activeOption.element as HTMLElement
    // Convert expected hex color to RGB for comparison
    expect(element.style.background).toBe(hexToRgb(options[1].color)) // green
  })

  // Test case to verify that the correct event is emitted when a color is clicked
  it('emits update:modelValue when a color is clicked', async () => {
    const wrapper = mount(ColorPicker, {
      props: {
        modelValue: 'red', // Initial selected color
        options
      }
    })

    // Simulate a click on the green color option
    const greenOption = wrapper.get('[data-testid="color-option"]:nth-child(2)')
    await greenOption.trigger('click')

    // Check that the event was emitted with the correct value
    expect(wrapper.emitted()['update:modelValue']).toBeTruthy() // Check if the event was emitted
    expect(wrapper.emitted()['update:modelValue'][0]).toEqual(['green']) // Check the emitted value
  })

  // Test case to check if the active color updates when a new color is selected
  it('updates activeColor when a color is selected', async () => {
    const wrapper = mount(ColorPicker, {
      props: {
        modelValue: 'red', // Initial selected color
        options
      }
    })

    // Simulate a click on the blue color option
    const blueOption = wrapper.get('[data-testid="color-option"]:nth-child(3)')
    await blueOption.trigger('click')

    // Verify that the emitted value is correct
    expect(wrapper.emitted()['update:modelValue'][0]).toEqual(['blue'])
  })

  // Test case to check if the active color updates on keyboard enter
  it('updates activeColor on keyboard enter', async () => {
    const wrapper = mount(ColorPicker, {
      props: {
        modelValue: 'red', // Initial selected color
        options
      }
    })

    // Simulate pressing the Enter key on the green color option
    const greenOption = wrapper.get('[data-testid="color-option"]:nth-child(2)')
    await greenOption.trigger('keydown.enter')

    // Verify that the emitted value is correct
    expect(wrapper.emitted()['update:modelValue'][0]).toEqual(['green'])
  })
})
