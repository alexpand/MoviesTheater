import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useSessionStore = defineStore('session', () => {
    const genres = ref<Array<string>>([])
    // const currentGenre = computed(() => genre.value )

    function updateGenre(id: string) {
        if(!containsGenre(id)) {
            genres.value.push(id)
            return
        }
        removeGender(id)
    }

    function containsGenre(id: string) {
        return genres.value.includes(id)
    }

    function removeGender(id: string) {
        const genresCopy = [...genres.value]
        genresCopy.splice(genres.value.indexOf(id), 1)
        genres.value = [...genresCopy]
    }
  
    return { updateGenre, containsGenre, removeGender, genres }
  })