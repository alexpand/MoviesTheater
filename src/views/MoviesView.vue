<script setup lang="ts">
import { useMoviesService } from '@/services/movies'
import { ref } from 'vue'

const { getMovies } = useMoviesService()

const movies = ref <any>([])

async function dummy() {
    const result = await getMovies()

    if(result && result.results) {
        movies.value = result.results
    }
}

dummy()
</script>
<template>
    <section class="container grid grid-cols-4 gap-6">
        <article class="movie-item rounded-xl border-2 p-4 flex items-center flex-col cursor-pointer" v-for="movie in movies" :key="movie.id">
            <img :src="`https://image.tmdb.org/t/p/w342/${movie.poster_path}`" :alt="movie.title">
            <hr>
            <p class="text-2xl text-center text-clip">{{ movie.title }}</p>
        </article>
    </section>
</template>