<script setup lang="ts">
import ProductWidget from '@/components/ProductWidget/index.vue'
import { useProductWidgetStore } from '@/stores'

// Initialize the product widget store to manage the state of product widgets
const productWidgetStore = useProductWidgetStore()

// Load the product widgets when the component is set up
productWidgetStore.load()
</script>

<template>
  <div class="flex h-screen w-full items-center justify-center">
    <div class="w-83 rounded-lg bg-light p-9 shadow-card sm:w-144 lg:w-213">
      <h3 class="max-sm:text-center">Per product widgets</h3>
      <hr class="mb-5 mt-3 border-t-2 border-gray" />

      <!-- Display loading indicator while data is being fetched -->
      <div
        v-if="productWidgetStore.loading"
        class="flex items-center justify-center p-8 text-center"
      >
        Loading
      </div>

      <!-- Display message if no product widgets are found -->
      <div
        v-else-if="!productWidgetStore.productWidgets.length"
        class="flex items-center justify-center p-8 text-center"
      >
        No product widgets found
      </div>

      <!-- Render the product widgets if they are available -->
      <div v-else class="grid gap-x-14 gap-y-9 max-sm:px-4 sm:grid-cols-2 lg:grid-cols-3">
        <ProductWidget
          v-for="widget in productWidgetStore.productWidgets"
          :key="widget.id"
          :widget="widget"
          @update="productWidgetStore.update($event)"
        />
      </div>
    </div>
  </div>
</template>
