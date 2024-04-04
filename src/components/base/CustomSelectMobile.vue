<script setup lang="ts">
import type { SelectItem } from '@/types/globals'

// const emit = defineEmits(['onToggleOption'])

defineProps<{
  options: Array<SelectItem>
}>()


</script>
<template>
  <ul class="flex justify-center flex-wrap">
    <li
      v-for="option in options"
      :key="option.id"
    >
      {{ option.name }}
    </li>
  </ul>
</template>