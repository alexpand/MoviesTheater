import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useSessionStore = defineStore('session', () => {
    const genre = ref('')
    // const currentGenre = computed(() => genre.value )

    function setGenre(id: string) {
        genre.value = id
    }
  
    return { setGenre, genre }
  })