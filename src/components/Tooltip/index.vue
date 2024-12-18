<script setup lang="ts">
import { ref, onBeforeUnmount } from 'vue'

// Reactive reference to control the visibility of the tooltip
const tooltipVisible = ref(false)

// Timer reference to manage the delay for hiding the tooltip
const timer = ref()

// Function to hide the tooltip after a specified delay
const onHide = () => {
  // Only set a timer if one isn't already set
  if (!timer.value) {
    timer.value = setTimeout(() => {
      tooltipVisible.value = false // Set the tooltip to hidden after the delay
    }, 300)
  }
}

// Function to show the tooltip immediately
const onShow = () => {
  tooltipVisible.value = true

  // Clear any existing timer to prevent premature hiding
  if (timer.value) {
    clearTimeout(timer.value)
    timer.value = undefined
  }
}

// Define component props with their types and default values
const props = defineProps({
  text: { type: String, default: '' } // Tooltip text
})

// Cleanup function to clear the timer when the component is unmounted
onBeforeUnmount(() => {
  if (timer.value) {
    clearTimeout(timer.value) // Clear the timer if it exists
    timer.value = undefined // Reset the timer reference
  }
})
</script>

<template>
  <div class="relative inline-flex cursor-pointer justify-center" @mouseover="onShow" @mouseout="onHide">
    <slot></slot>
    <!-- Slot for the content that triggers the tooltip -->
    <div
      class="absolute -top-2 -translate-y-full w-max max-w-62 cursor-default bg-white px-4 py-2 shadow-card transition-all typo-sm"
      :class="[
        tooltipVisible ? '' : 'pointer-events-none opacity-0' // Show or hide the tooltip based on 'open'
      ]" data-testid="tooltip">
      <slot name="tooltip">{{ text }}</slot>
      <!-- Slot for custom tooltip content, defaults to title -->
    </div>
  </div>
</template>
