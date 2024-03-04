<script setup lang="ts">
import { onMounted, watch } from 'vue'

import { useSessionStore } from '@/stores/session'

import { useMoviesService } from '@/composables/services'

import CustomSelect from '@/components/base/CustomSelect.vue'

const { getMovies, movies, genres, getGenres } = useMoviesService()

const sessionStore = useSessionStore()

function onToggleOption(id: string) {
    sessionStore.updateGenre(id)
}

onMounted( async () => {
    await getMovies()
    await getGenres()
})

watch(sessionStore, () => {
    getMovies()
})

</script>
<template>
    <section>
        <CustomSelect 
            :options="genres?.genres" 
            :selectedOptions="sessionStore.genres"
            @onToggleOption="onToggleOption"
        /> 
        <p>genero seleccionado {{ sessionStore.genres.toString() }}</p>
    </section>
    <section class="container grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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