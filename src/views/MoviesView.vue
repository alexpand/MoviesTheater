<script setup lang="ts">
import { onMounted, watch } from 'vue'

import { useSessionStore } from '@/stores/session'
import { storeToRefs } from 'pinia'

import { useMoviesService } from '@/composables/services'
import { useUrlHandler } from '@/composables/utils'

import CustomSelect from '@/components/base/CustomSelect.vue'
import CustomSelectMobile from '@/components/base/CustomSelectMobile.vue'
import ScrollUpButton from '@/components/base/ScrollUpButton.vue'

const { getMovies, movies } = useMoviesService()
const { getPosterUrl } = useUrlHandler()

const sessionStore = useSessionStore()

const { startFetch, genres } = storeToRefs(sessionStore)

function onToggleOption(id: number, toggleFetch: boolean) {
  sessionStore.toggleGenre(id)
  if(toggleFetch) {
    sessionStore.toggleFetch()
  }
}

function onApplyFilter() {
  sessionStore.toggleFetch()
}

onMounted(async () => {
  sessionStore.fetchGenres()
  getMovies()
})

watch(startFetch, () => {
  if(startFetch.value) {
    getMovies()
    sessionStore.toggleFetch()
  }
})
</script>
<template>
  <section class="mb-4 hidden sm:block">
    <CustomSelect :options="genres" @onToggleOption="onToggleOption" />
  </section>

  <section class="mb-12 sm:hidden block">
    <CustomSelectMobile 
      :options="genres" 
      @onToggleOption="onToggleOption"
      @onApplyFilter="onApplyFilter"
    />
  </section>

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
  <ScrollUpButton />
</template>
