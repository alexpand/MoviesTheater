<script setup lang="ts">
import { onMounted } from 'vue'

import { useSessionStore } from '@/stores/session'

import { useMoviesService } from '@/composables/services'

import CustomSelect from '@/components/base/CustomSelect.vue'

const { getMovies, movies, genres, getGenres } = useMoviesService()

const { currentGenre, genre } = useSessionStore()

onMounted( async () => {
    await getMovies()
    await getGenres()
})

</script>
<template>
    <section>
        <CustomSelect :options="genres?.genres" label="Genre list" /> <p>genero seleccionado {{ currentGenre }} || {{ genre }}</p>
    </section>
    <section class="container grid grid-cols-4 gap-6">
        <article
            class="movie-item rounded-xl border-2 p-4 flex items-center flex-col cursor-pointer" 
            v-for="movie in movies?.results" 
            :key="movie.id"
        >
            <img :src="`https://image.tmdb.org/t/p/w342/${movie.poster_path}`" :alt="movie.title">
            <hr>
            <p class="text-2xl text-center text-clip">{{ movie.title }}</p>
        </article>
    </section>
</template>