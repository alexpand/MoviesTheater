<script lang="ts" setup>
import { useRoute } from 'vue-router'

import usePeopleService from '@/composables/services/people'
import { useUrlHandler } from '@/composables/utils'

const id = useRoute().params.id

const { getPerson, person } = usePeopleService()
const { getPosterUrl } = useUrlHandler()

getPerson(`${id}`)
</script>

<template>
  <section class="mx-auto max-w-7xl md:px-2">
    <template v-if="person">
      <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
        <article class="flex flex-col">
          <img 
            class="w-full rounded-md mb-2" 
            :src="getPosterUrl(person.profile_path)" 
            :alt="`${person.name} photo`" 
          />
          <p>{{ (new Date()).getFullYear() - +person.birthday.substring(0,4) }} years old</p>
        </article>
        <article>
          <h1 class="mb-6 text-2xl font-light md:text-3xl font-semibold">{{ person.name }}</h1>
          <p class="text-gray-600">{{ person.biography }}</p>
        </article>
      </div>
      <article class="mt-4 text-lg flex flex-col gap-4">
        <router-link
          v-for="character in person.credits.cast" 
          :key="character.credit_id" 
          :to="`/movie/${character.id}`"
          class="flex gap-6 items-center rounded-lg bg-gray-800 p-3 cursor-pointer hover:text-red-500"
        >
          <img
            
            :src="getPosterUrl(character.poster_path)" 
            :alt="`${character.title} poster`"
            class="w-20 h-28 rounded-md"
            onerror="this.src='/broken_img.svg'"
          >
          <p class="w-14">{{ character.release_date.substring(0, 4) }}</p>
          <div>
            <p class="text-xl font-semibold">{{ character.title }}</p>
            <p class="text-md">{{ character.character }}</p>
          </div>
        </router-link>
      </article>
    </template>
  </section>
</template>
