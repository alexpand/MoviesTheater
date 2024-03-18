import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

import type { Genre } from '@/types/types'

import { useMoviesService } from '@/composables/services'

export const useSessionStore = defineStore('session', () => {
    const autenthicated = ref<boolean>(false)

    const genres = ref<Array <Genre> | undefined>([])
    const { getGenres, genres: apiGenres } = useMoviesService()
    const genresList = computed(() => {
        return genres.value ?
        genres.value.filter((genre) => genre.isActive ).map( (genre) => genre.id ).toString() :
        ""
    })


    async function fetchGenres() {
        await getGenres()
        genres.value = apiGenres?.value?.genres.map( (genre) => ({
            ...genre, 
            isActive: false
        }))
    }

    function toggleGenre(id: number) {
        const matched = genres.value?.find( (genre) => genre.id === id )
        if(matched) {
            matched.isActive = !matched.isActive
        }

        // Enfoque funcional
        // genres.value = genres.value?.map( genre => {
        //     if(genre.id === id) {
        //         genre.isActive = !genre.isActive
        //     }
        //     return genre
        // })
    }

    function login() {
        autenthicated.value = true
    }

    function logout() {
        autenthicated.value = false
    }
    
    return { genres, genresList, fetchGenres, toggleGenre, login, logout, autenthicated }
  })