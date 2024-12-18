// Define the possible actions that a widget can perform
export type WidgetAction = 'collects' | 'offsets' | 'plants'

// Define the possible colors that a widget can have
export type WidgetColor = 'beige' | 'black' | 'blue' | 'green' | 'white'

// Define the types of widgets available
export type WidgetType = 'carbon' | 'trees' | 'plastic'

// Interface representing a product widget with various properties
export interface IProductWidget {
  id: number // Unique identifier for the widget
  type: WidgetType // The type of the widget (e.g., carbon, trees, plastic)
  amount: number // The amount associated with the widget (e.g., kgs)
  action: WidgetAction // The action that the widget performs (e.g., collects, offsets, plants)
  active: boolean // Indicates if the widget is currently active
  linked: boolean // Indicates if the widget is linked to Public Profile
  selectedColor: WidgetColor // The color selected for the widget
}

// Interface representing a color selection option for widgets
export interface IColorSelectOption {
  color: string // The name of the color (e.g., "blue")
  value: string // The value associated with the color
}
