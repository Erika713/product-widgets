import type { WidgetColor } from '@/interfaces/index'

/**
 * WIDGET_COLOR is a record that maps each WidgetColor to its corresponding
 * color properties. Each entry contains a background color and a text color.
 *
 * @type {Record<WidgetColor, { color: string; text: string }>}
 *
 * The keys of this record are of type WidgetColor, which is expected to be
 * a union of string literals representing different color options.
 *
 * Each value is an object containing:
 * - color: A string representing the background color in hexadecimal format.
 * - text: A string representing the text color in hexadecimal format.
 */
export const WIDGET_COLOR: Record<WidgetColor, { color: string; text: string }> = {
  beige: { color: '#F2EBDB', text: '#3B755F' }, // Light beige background with dark green text
  black: { color: '#000', text: '#FFF' }, // Black background with white text
  blue: { color: '#2E3A8C', text: '#FFF' }, // Dark blue background with white text
  green: { color: '#3B755F', text: '#FFF' }, // Dark green background with white text
  white: { color: '#FFF', text: '#3B755F' } // White background with dark green text
}
