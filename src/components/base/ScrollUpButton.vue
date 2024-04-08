<script lang="ts" setup>

import { useGlobalHelper } from '@/composables/utils'

const { scrollUp } = useGlobalHelper()

</script>

<template>
  <button @click="scrollUp" class="h-12 w-12 p-3 rounded-full shadow-lg bg-gray-800 mt-4 sm:hidden block ml-auto">
    <img src="/chevron.svg">
  </button>
</template>