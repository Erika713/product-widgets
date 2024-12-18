<script setup lang="ts">
import { computed, type PropType } from 'vue'
import Logo from '@/assets/icons/Logo/index.vue'
import Checkbox from '@/components/Checkbox/index.vue'
import ColorPicker from '@/components/ColorPicker/index.vue'
import Switcher from '@/components/Switcher/index.vue'
import Tooltip from '@/components/Tooltip/index.vue'
import Info from '@/assets/icons/Info/index.vue'
import type { IProductWidget } from '@/interfaces'
import { WIDGET_COLOR } from '@/constants'

// Computed property to determine the label for the amount based on the widget type
const amountLabel = computed(() => {
  // If the product is carbon, add 'kgs of' to the amount.
  return props.widget.type === 'carbon'
    ? ' kgs of'
    : props.widget.type === 'plastic'
      ? 'plastic bottles'
      : ''
})

// Prepare color options for the color picker from the WIDGET_COLOR constant
const colorOptions = Object.entries(WIDGET_COLOR).map(([key, colors]) => ({
  color: colors.color,
  value: key
}))

// Define emits for the component to communicate updates
const emit = defineEmits(['update'])

// Function to handle updates to the widget fields
const onFieldUpdate = (field: keyof IProductWidget, value: string | number | boolean) => {
  emit('update', {
    ...props.widget,
    [field]: value
  })
}

// Computed property to get the theme based on the selected color of the widget
const theme = computed(() => WIDGET_COLOR[props.widget?.selectedColor] || WIDGET_COLOR.green)

// Define props for the component, requiring a widget object of type IProductWidget
const props = defineProps({
  widget: {
    type: Object as PropType<IProductWidget>,
    required: true
  }
})
</script>

<template>
  <div class="typo-sm flex flex-col gap-2.5">
    <!-- Widget display with logo and product information -->
    <div class="flex items-center gap-3 rounded-md p-3 transition-all"
      :style="{ background: theme.color, color: theme.text }">
      <Logo />
      <div>
        <div class="text-xs">This product {{ widget.action }}</div>
        <div class="mt-1 text-lg font-bold">
          {{ widget.amount }} {{ amountLabel }} {{ widget.type !== 'plastic' ? widget.type : '' }}
        </div>
      </div>
    </div>

    <!-- Section for linking to public profile with tooltip -->
    <div class="flex items-center justify-between gap-4">
      <div class="flex items-start gap-0.5">
        <div class="text-primary">Link to Public Profile</div>
        <Tooltip>
          <Info class="-mt-0.5 w-3 transition-all text-primary" />
          <template #tooltip>
            <div class="flex flex-col items-center text-center gap-3 py-4">
              <div>
                This widget links directly to your public profile so that you can easily share your
                impact with your customers. Turn it off here if you do not want the badge to link to
                it.
              </div>
              <a class="typo-link text-primary" href="https://www.getgreenspark.com/" target="_blank">
                View Public Profile
              </a>
            </div>
          </template>
        </Tooltip>
      </div>

      <!-- Checkbox to toggle linking to the public profile -->
      <Checkbox :model-value="widget.linked" @update:model-value="onFieldUpdate('linked', $event)" />
    </div>

    <!-- Section for selecting badge color -->
    <div class="flex items-center justify-between gap-4">
      <div class="text-primary">Badge colour</div>
      <ColorPicker :model-value="widget.selectedColor" :options="colorOptions"
        @update:model-value="onFieldUpdate('selectedColor', $event)" />
    </div>

    <!-- Section for activating the badge -->
    <div class="flex items-center justify-between gap-4">
      <div class="text-primary">Activate badge</div>
      <Switcher :model-value="widget.active" @update:model-value="onFieldUpdate('active', $event)" />
    </div>
  </div>
</template>
