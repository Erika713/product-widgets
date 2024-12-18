<script setup lang="ts">
import { computed } from 'vue'

// Create a computed property to manage the active state
const active = computed({
  get: () => props.modelValue,
  set: (val) => {
    if (val !== props.modelValue) {
      emit('update:modelValue', val)
    }
  }
})

// Define the emits for the component
const emit = defineEmits(['update:modelValue'])

// Define the props for the component
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
    required: true
  }
})

// Function to toggle the active state
const toggleActive = () => {
  const newValue = !props.modelValue
  emit('update:modelValue', newValue);
}
</script>

<template>
  <div class="inline-flex items-center h-5 w-10 cursor-pointer relative group" @click="toggleActive"
    @keydown.enter="toggleActive" @keydown.space.prevent="toggleActive" role="button" tabindex="0"
    :aria-pressed="active">
    <div class="rounded-full border shadow-switch transition-all h-full w-full" :class="[
      // Dynamic classes for the outer toggle switch
      active ? 'border-gray bg-primary' : 'border-primary-light bg-white'
    ]">

    </div>
    <div class="flex items-center justify-center absolute top-0 transition-all" :class="[
      // Dynamic classes for the inner toggle knob
      active ? 'left-full -translate-x-full' : 'left-0'
    ]">
      <div
        class="absolute h-8 w-8 rounded-full bg-primary transition-all opacity-0 pointer-events-none group-hover:opacity-25">
      </div>
      <div
      class="relative h-5 w-5 rounded-full border bg-white shadow-switch-thumb transition-all"
      :class="[
        // Dynamic classes for the knob's appearance
        active ? 'border-primary' : 'border-beige'
      ]"></div>
    </div>
  </div>
</template>
