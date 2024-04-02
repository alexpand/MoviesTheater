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
  <section class="px-4 pt-20 pb-24 mx-auto max-w-7xl md:px-2">
    <div v-if="person" class="grid grid-cols-1 gap-24 md:grid-cols-2">
      <div class="flex flex-col">
        <img 
          class="w-72" 
          :src="getPosterUrl(person.profile_path)" 
          :alt="`${person.name} photo`" 
        />
        <p>{{ (new Date()).getFullYear() - +person.birthday.substring(0,4) }} years old</p>
      </div>
      <div>
      <article>
        <h1 class="mb-6 text-2xl font-light md:text-3xl">{{ person.name }}</h1>
        <p class="mt-10 mb-3 font-semibold text-gray-900">Biografia</p>
        <p class="text-gray-600">{{ person.biography }}</p>
        <div class="mt-4 text-lg flex flex-col gap-4">
          <router-link
            v-for="character in person.credits.cast" 
            :key="character.credit_id" 
            :to="`/movie/${character.id}`"
            class="flex gap-6 items-center rounded-lg bg-gray-800 p-2 cursor-pointer hover:text-red-500"
          >
            <img
              
              :src="getPosterUrl(character.poster_path)" 
              :alt="`${character.title} poster`"
              class="w-12"
              onerror="this.src='/broken_img.svg'"
            >
            <p class="w-14">{{ character.release_date.substring(0, 4) }}</p>
            <div>
              <p>{{ character.title }}</p>
              <p>{{ character.character }}</p>
            </div>
          </router-link>
        </div>
      </article>
      </div>
    </div>
  </section>
</template>
