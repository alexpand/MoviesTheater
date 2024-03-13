<script setup lang="ts">
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'

import { useMoviesService } from '@/composables/services'
import { useUrlHandler } from '@/composables/utils'
import CastsScroller from '@/components/base/CastsScroller.vue'

const id = useRoute().params.id

const { getDetails, movie_details } = useMoviesService()
const { getPosterUrl } = useUrlHandler()

onMounted( async () => {
    await getDetails(`${id}`)
})

</script>

<template>
    <section>
        <h1>{{ movie_details?.title }}</h1>
        <article>
            <img :src="getPosterUrl(`${movie_details?.poster_path}`)" :alt="`Movie: ${movie_details?.title}`">
            <div>
                {{ movie_details?.overview }}
            </div>
        </article>
        <article class="flex">
            <div
                class="movie-item rounded-xl border-2 p-4 flex items-center flex-col cursor-pointer" 
                v-for="cast in movie_details?.casts?.cast" 
                :key="`cast-${cast.id}`"
            >
                <router-link :to="`/casts/${cast.id}`">
                    <img
                        :src="getPosterUrl(cast.profile_path, 'w138_and_h175_face')" 
                        :alt="cast.name"
                        class="w-full"
                    >
                    <hr>
                    <p class="text-2xl text-center text-clip">{{ cast.name }}</p>
                    <p class="text-lg text-center text-clip">{{ cast.character }}</p>
                </router-link>
            </div>
        </article>
        <CastsScroller :casts="movie_details?.casts?.cast" />
    </section>
</template>