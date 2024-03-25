<script lang="ts" setup>
import { useRoute } from 'vue-router'
import usePeopleService from '@/composables/services/people'

const id = useRoute().params.id

const { getPerson, person } = usePeopleService()

getPerson(`${id}`)
</script>

<template>
  <section class="px-4 pt-20 pb-24 mx-auto max-w-7xl md:px-2">
    <div class="grid grid-cols-1 gap-24 md:grid-cols-2">
      <div class="flex flex-col">
        <img src="" alt="" />
        <div></div>
      </div>
      <div>
        <h1 class="mb-6 text-2xl font-light md:text-3xl">Advanced Questions</h1>
        <p class="mt-10 mb-3 font-semibold text-gray-900">Biografia</p>
        <p class="text-gray-600">
          Following on from the previous article, sometimes making complex UI controls that involve
          unsemantic HTML and dynamic JavaScript-updated content can be difficult. WAI-ARIA is a
          technology that can help with such problems by adding in further semantics that browsers
          and assistive technologies can recognize and use to let users know what is going on. Here
          we'll show how to use it at a basic level to improve accessibility.
        </p>
      </div>
    </div>
  </section>
</template>
