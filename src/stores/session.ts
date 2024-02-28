import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useSessionStore = defineStore('session', () => {
    const genre = ref('20')
    const currentGenre = computed(() => genre.value )

    function setGenre(id: string) {
        genre.value = id
        console.log(currentGenre.value, 'genre in store')
    }
  
    return { currentGenre, setGenre, genre }
  })