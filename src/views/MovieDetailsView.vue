<script setup lang="ts">
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'

import { useMoviesService } from '@/composables/services'
import { useUrlHandler } from '@/composables/utils'
import { useDetailsHelper } from '@/composables/utils'

import { useSessionStore } from '@/stores/session'

import CastsScroller from '@/components/base/CastsScroller.vue'

const id = useRoute().params.id

const { setCasts } = useSessionStore()

const { getDetails, movie_details } = useMoviesService()
const { getPosterUrl } = useUrlHandler()

const { getTrailer } = useDetailsHelper()

onMounted(async () => {
  await getDetails(`${id}`)
})
</script>

<template>
  <section>
    <article class="block sm:flex sm:gap-4 sm:p-4 mb-4">
      <div class="sm:w-96 flex justify-center mb-4 sm:mb-0">
        <img
          :src="getPosterUrl(`${movie_details?.poster_path}`)"
          :alt="`Movie: ${movie_details?.title}`"
          :class="{'w-24': !movie_details?.poster_path}"
          onerror="this.src='/broken_img.svg'"
        />
      </div>
      <div class="flex flex-col gap-4">
        <div class="flex sm:items-center sm:flex-row flex-col gap-4">
          <h1 class="font-bold text-3xl">{{ movie_details?.title }}</h1>
          <h2 class="text-2xl">{{ movie_details?.release_date.substring(0,4) }}</h2>
        </div>
        <p>{{ movie_details?.overview }}</p>
        <div v-if="movie_details">
          <iframe
            width="100%"
            height="320"
            :src="`https://www.youtube.com/embed/${getTrailer(movie_details.videos.results)}`"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          >
          </iframe>
        </div>
      </div>
    </article>

    <CastsScroller :casts="movie_details?.casts?.cast">
      <router-link :to="`/movie/cast/${id}`" class="block w-full h-full">
        <button @click="setCasts(movie_details?.casts)" class="block w-full h-full">
          See full cast
          <img class="w-8 h-8 mx-auto" src="/arrow.svg">
        </button>
      </router-link>      
    </CastsScroller>
  </section>
</template>
