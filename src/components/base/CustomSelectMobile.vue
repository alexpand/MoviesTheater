<script setup lang="ts">

import { ref } from 'vue'
import type { SelectItem } from '@/types/globals'

const emit = defineEmits(['onToggleOption', 'onApplyFilter'])

defineProps<{
  options: Array<SelectItem>
}>()

const showMenu = ref(false)

function toggleMenu() {
  showMenu.value = !showMenu.value
}

function toggleOption(id: number) {
  emit('onToggleOption', id)
}

function onApplyFilter() {
  emit('onApplyFilter')
  toggleMenu()
}

</script>
<template>
  <div class="fixed bg-black/80 left-0 top-16 w-full py-4 flex flex-col gap-4 rounded-b-lg z-20">
    <button @click="toggleMenu" class="block mx-auto relative">
      <img class="h-8 w-8" src="/filter.svg">
    </button>
    <div v-if="showMenu" class="px-4">
      <ul class="grid grid-cols-2 gap-3 mb-4">
        <li
          v-for="option in options"
          :key="option.id"
          class="p-2 rounded-lg text-center"
          :class="!option.isActive ? 'bg-gray-800' : 'bg-red-800'"
          @click="toggleOption(option.id)"
        >
          {{ option.name }}
        </li>
      </ul>
      <button @click="onApplyFilter" class="block py-2 bg-red-800 rounded-lg mx-auto w-32">Apply filters</button>
    </div>
  </div>
  <div v-if="showMenu" class="fixed top-0 left-0 bg-black/80 h-lvh w-full z-10" @click="toggleMenu"></div>
</template>