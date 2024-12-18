import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import ProductWidget from './index.vue'
import { WIDGET_COLOR } from '@/constants'
import type { IProductWidget } from '@/interfaces'

// Describe the test suite for the ProductWidget component
describe('ProductWidget', () => {
  // Mock data for the widget prop
  const mockWidget = {
    id: 1,
    type: 'carbon', // Type of the widget
    amount: 2, // Amount associated with the widget
    action: 'offsets', // Action description
    active: true, // Indicates if the widget is active
    linked: true, // Indicates if the widget is linked
    selectedColor: 'green' // Selected color for the widget
  } as IProductWidget

  // Test case to check if the component renders correctly with props
  it('renders correctly with props', () => {
    const wrapper = mount(ProductWidget, {
      props: {
        widget: mockWidget // Pass the mock widget as a prop
      }
    })

    // Check if the rendered text contains the expected action description
    expect(wrapper.text()).toContain('This product offsets')
  })

  // Test case to compute the correct amount label for carbon type
  it('computes the correct amount label for carbon type', () => {
    const wrapper = mount(ProductWidget, {
      props: {
        widget: { ...mockWidget, type: 'carbon' } // Set type to carbon
      }
    })

    // Cast the wrapper to access the computed properties
    const instance = wrapper.vm as unknown as { amountLabel: string }
    // Expect the amount label to be ' kgs of' for carbon type
    expect(instance.amountLabel).toBe(' kgs of')
  })

  // Test case to compute the correct amount label for plastic type
  it('computes the correct amount label for plastic type', () => {
    const wrapper = mount(ProductWidget, {
      props: {
        widget: { ...mockWidget, type: 'plastic' } // Set type to plastic
      }
    })

    // Cast the wrapper to access the computed properties
    const instance = wrapper.vm as unknown as { amountLabel: string }
    // Expect the amount label to be 'plastic bottles' for plastic type
    expect(instance.amountLabel).toBe('plastic bottles')
  })

  // Test case to compute the correct theme based on selected color
  it('computes the correct theme based on selected color', () => {
    const wrapper = mount(ProductWidget, {
      props: {
        widget: { ...mockWidget, selectedColor: 'green' } // Set selected color to green
      }
    })

    // Cast the wrapper to access the computed properties
    const instance = wrapper.vm as unknown as { theme: string }
    // Expect the theme to match the WIDGET_COLOR for green
    expect(instance.theme).toEqual(WIDGET_COLOR.green)
  })
})