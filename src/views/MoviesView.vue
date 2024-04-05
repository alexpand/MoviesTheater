<script setup lang="ts">
import { onMounted, watch } from 'vue'

import { useSessionStore } from '@/stores/session'

import { useMoviesService } from '@/composables/services'
import { useUrlHandler } from '@/composables/utils'

import CustomSelect from '@/components/base/CustomSelect.vue'

const { getMovies, movies } = useMoviesService()
const { getPosterUrl } = useUrlHandler()

const sessionStore = useSessionStore()

function onToggleOption(id: number) {
  sessionStore.toggleGenre(id)
}

onMounted(async () => {
  sessionStore.fetchGenres()
})

watch(sessionStore, () => {
  getMovies()
})
</script>
<template>
  <section class="mb-4 hidden sm:block">
    <CustomSelect :options="sessionStore.genres" @onToggleOption="onToggleOption" />
  </section>

  <CustomSelectMobile :options="sessionStore.genres" />

  <section class="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
    <article 
      v-for="movie in movies?.results"
      :key="movie.id"
      class="w-full rounded-lg bg-red-800 cursor-pointer hover:bg-red-100 hover:text-black hover:contrast-50"
    >
    <router-link :to="`/movie/${movie.id}`">
      <img 
        :src="getPosterUrl(movie.poster_path)" 
        :alt="movie.title" 
        class="h-136 w-full object-cover rounded-t-lg"
      >
      <div class="p-3">
        <p class="text-lg font-semibold">{{ movie.title }}</p>
        <p class="text-md">{{ movie.release_date.substring(0,4) }}</p>
      </div>
    </router-link>
    </article>
  </section>
</template>
