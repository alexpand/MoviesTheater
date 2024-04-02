<script setup lang="ts">
import type { SelectItem } from '@/types/globals'

const emit = defineEmits(['onToggleOption'])

defineProps<{
  options: Array<SelectItem>
}>()

function toggleOption(id: number) {
  emit('onToggleOption', id)
}
</script>
<template>
  <ul class="flex justify-center flex-wrap">
    <li
      v-for="option in options"
      :key="option.id"
      @click="toggleOption(option.id)"
      class="text-center mx-4 my-1 px-6 py-2 rounded-md cursor-pointer hover:bg-red-200 hover:text-black"
      :class="option.isActive ? 'bg-blue-500' : 'bg-red-800'"
    >
      {{ option.name }}
    </li>
  </ul>
</template>
