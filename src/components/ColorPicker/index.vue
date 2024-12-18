<script setup lang="ts">
import { computed, type PropType } from 'vue'
import type { IColorSelectOption } from '@/interfaces'

// Computed property to manage the active color
const activeColor = computed({
  // Getter: returns the current model value
  get: () => props.modelValue,
  // Setter: updates the model value if it has changed
  set: (val) => {
    if (val !== props.modelValue) {
      emit('update:modelValue', val)
    }
  }
})

// Emit event to update the model value
const emit = defineEmits(['update:modelValue'])

// Define props for the component
const props = defineProps({
  // The currently selected color value
  modelValue: { type: String, default: undefined },
  // An array of color options to choose from
  options: { type: Array as PropType<IColorSelectOption[]>, required: true }
})
</script>

<template>
  <div class="flex flex-wrap items-center gap-1">
    <template v-for="option in options" :key="option.value">
      <div class="color-option h-4 w-4 cursor-pointer" :class="{ 'border-2 border-gray': option.value === activeColor }"
        :style="{ backgroundColor: option.color }" data-testid="color-option" @click="activeColor = option.value"
        role="button" tabindex="0" @keydown.enter="activeColor = option.value">
      </div>
    </template>
  </div>
</template>