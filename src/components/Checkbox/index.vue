<script setup lang="ts">
import { computed } from 'vue'
import CheckBoxIcon from '@/assets/icons/Checkbox/index.vue'
import EmptyCheckboxIcon from '@/assets/icons/EmptyCheckbox/index.vue'

// Create a computed property to manage the checked state
const checked = computed({
    // Getter: returns the current value of modelValue
    get: () => props.modelValue,

    // Setter: emits an event to update the modelValue when the checked state changes
    set: (val) => {
        if (val !== props.modelValue) {
            emit('update:modelValue', val)
        }
    }
})

// Define emits for the component
const emit = defineEmits(['update:modelValue'])

// Define props for the component
const props = defineProps({
    modelValue: { type: Boolean, default: false }
})

// Method to toggle the checked state
const toggleChecked = () => {
    checked.value = !checked.value
}
</script>

<template>
    <div class="inline-flex cursor-pointer items-center justify-center group" role="checkbox" tabindex="0"
        @click="toggleChecked" @keydown.enter="toggleChecked" @keydown.space.prevent="toggleChecked">
        <!-- Render the appropriate checkbox icon based on the checked state -->
        <component :is="checked ? CheckBoxIcon : EmptyCheckboxIcon" class="w-6"
            :data-testid="checked ? 'checked' : 'unchecked'"
            :class="[checked ? 'text-primary' : 'group-hover:text-gray',]" />
        <div class="absolute bg-primary-light h-9 opacity-0 rounded-full transition-all w-9 group-hover:opacity-25">
        </div>
    </div>
</template>
