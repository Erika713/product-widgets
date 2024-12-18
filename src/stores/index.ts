import { defineStore } from 'pinia'
import type { IProductWidget } from '@/interfaces'
import { ProductWidgetService } from '@/services/index'

// Define a Pinia store for managing product widgets
export const useProductWidgetStore = defineStore('product-widget', {
  // State of the store
  state: () => ({
    loading: false, // Indicates if data is currently being loaded
    productWidgets: [] as IProductWidget[] // Array to hold product widgets
  }),

  // Actions that can be performed on the store
  actions: {
    // Load product widgets from the service
    async load() {
      // Prevent loading if already in progress
      if (this.loading) {
        return
      }

      this.loading = true // Set loading to true while fetching data

      try {
        // Fetch product widgets from the service
        const data = await ProductWidgetService.getAll()
        this.productWidgets = data // Update state with fetched data
      } catch (error) {
        // Log any errors that occur during the fetch
        console.error('Error loading product widgets:', error)
        this.productWidgets = [] // Reset productWidgets on error
      } finally {
        this.loading = false // Ensure loading is set to false after operation
      }
    },

    // Update a specific product widget in the state
    update(widget: IProductWidget) {
      // Validate the widget object and its ID
      if (!widget || !widget.id) {
        console.error('Invalid widget provided for update:', widget)
        return // Early return if the widget is invalid
      }

      // Map through the existing productWidgets and update the matching widget
      this.productWidgets = this.productWidgets.map((item) => {
        if (item.id === widget.id) {
          return widget // Return the updated widget
        }

        // If the widget is active, deactivate other widgets
        if (widget.active) {
          return { ...item, active: false }
        }

        return item // Return the original item if no match or no update needed
      })
    }
  }
})
