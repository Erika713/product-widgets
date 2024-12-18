import { describe, it, expect } from 'vitest'

// Import the types and interfaces used in the tests
import type {
  IProductWidget,
  IColorSelectOption,
  WidgetAction,
  WidgetColor,
  WidgetType
} from './index'

// Test suite for the IProductWidget interface
describe('IProductWidget Interface', () => {
  // Test case to validate the creation of a product widget
  it('should create a valid product widget', () => {
    // Create a sample widget object adhering to the IProductWidget interface
    const widget: IProductWidget = {
      id: 1,
      type: 'carbon' as WidgetType,
      amount: 100,
      action: 'collects' as WidgetAction,
      active: true,
      linked: false,
      selectedColor: 'green' as WidgetColor
    }

    // Assertions to verify that the widget properties are set correctly
    expect(widget.id).toBe(1)
    expect(widget.type).toBe('carbon')
    expect(widget.amount).toBe(100)
    expect(widget.action).toBe('collects')
    expect(widget.active).toBe(true)
    expect(widget.linked).toBe(false)
    expect(widget.selectedColor).toBe('green')
  })
})

// Test suite for the IColorSelectOption interface
describe('IColorSelectOption Interface', () => {
  // Test case to validate the creation of a color select option
  it('should create a valid color select option', () => {
    // Create a sample color option object adhering to the IColorSelectOption interface
    const colorOption: IColorSelectOption = {
      color: 'blue',
      value: 'blue'
    }

    // Assertions to verify that the color option properties are set correctly
    expect(colorOption.color).toBe('blue')
    expect(colorOption.value).toBe('blue')
  })
})
