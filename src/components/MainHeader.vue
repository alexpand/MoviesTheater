<script lang="ts" setup>

import { ref } from 'vue'

const showMenu = ref(false)

function toggle() {
  showMenu.value = !showMenu.value
}

</script>

<template>
  <header class="container mx-auto sticky top-0 sm:static shadow-md sm:shadow-none z-50">
    <nav class="w-full py-4 sm:bg-transparent bg-red-800">
      <div class="hidden justify-between w-full sm:flex px-4">
        <RouterLink to="/" class="text-red-800 hover:text-white font-bold text-lg">Home</RouterLink>
        <RouterLink to="/login" class="text-red-800 hover:text-white font-bold text-lg">Login</RouterLink>
      </div>
      <img 
        src="/menu.svg" 
        class="h-8 w-8 block sm:hidden mx-4"
        @click="toggle"
      >
      <ul v-if="showMenu" class="fixed top-16 w-full shadow-xl bg-red-800/80">
        <li class="py-2 pl-4">
          <RouterLink to="/" class="font-bold">Home</RouterLink>
        </li>
        <li class="py-2 pl-4">
          <RouterLink to="/login" class="font-bold">Login</RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
