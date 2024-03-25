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
    <article class="flex gap-4 p-4">
      <img
        :src="getPosterUrl(`${movie_details?.poster_path}`)"
        :alt="`Movie: ${movie_details?.title}`"
      />
      <div>
        <div class="flex">
          <h1>{{ movie_details?.title }}</h1>
          <h2>{{ movie_details?.release_date }}</h2>
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
    <CastsScroller :casts="movie_details?.casts?.cast" />
    <button @click="setCasts(movie_details.casts)">
      <router-link :to="`/movie/cast/${id}`">See full cast</router-link>
    </button>
  </section>
</template>
