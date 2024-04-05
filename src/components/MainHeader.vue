<script lang="ts" setup>

import { ref } from 'vue'

const showMenu = ref(false)

function toggle() {
  showMenu.value = !showMenu.value
}

</script>

<template>
  <header class="container mx-auto sticky top-0 sm:static sm:bg-transparent bg-red-800 shadow-md sm:shadow-none">
    <nav class="w-full py-4">
      <div class="hidden justify-between w-full sm:flex px-4">
        <RouterLink to="/" class="text-red-800 hover:text-white font-bold text-lg">Home</RouterLink>
        <RouterLink to="/login" class="text-red-800 hover:text-white font-bold text-lg">Login</RouterLink>
      </div>
      <div>
        <img 
          src="/menu.svg" 
          class="h-8 w-8 block sm:hidden mx-4"
          @click="toggle"
        >
        <ul v-if="showMenu" class="fixed w-full bg-red-800/80 p-4">
          <li class="my-2">
            <RouterLink to="/" class="font-bold">Home</RouterLink>
          </li>
          <li class="my-2">
            <RouterLink to="/login" class="font-bold">Login</RouterLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>
