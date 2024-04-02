import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

import type { Genre } from '@/types/globals'
import type { Employees, Employee, Crew, Cast, Casts } from '@/types/casts'

import { useMoviesService } from '@/composables/services'

export const useSessionStore = defineStore('session', () => {
  //Casts
  const castsList = ref<Employees | undefined>()

  function setCasts(casts: Casts | undefined) {
    if(casts) {
      const cast: [Employee] = casts.cast.map((cast: Cast) => {
        return {
          name: cast.name,
          avatar: cast.profile_path,
          role: cast.character
        }
      }) as [Employee]
  
      const crew = casts.crew.map((crew: Crew) => {
        return {
          name: crew.name,
          avatar: crew.profile_path,
          role: crew.job,
          department: crew.department
        }
      }) as [Employee]
  
      castsList.value = {
        cast,
        crew
      }
    }
  }

  //Genre
  const genres = ref<Array<Genre>>([])
  const { getGenres, genres: apiGenres } = useMoviesService()
  const genresList = computed(() => {
    return genres.value
      ? genres.value
          .filter((genre) => genre.isActive)
          .map((genre) => genre.id)
          .toString()
      : ''
  })

  async function fetchGenres() {
    await getGenres()
    genres.value = apiGenres?.value?.genres.map((genre) => ({
      ...genre,
      isActive: false
    })) as [Genre]
  }

  function toggleGenre(id: number) {
    const matched = genres.value?.find((genre) => genre.id === id)
    if (matched) {
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

  //Login
  const authenticated = ref<boolean>(false)

  function login() {
    authenticated.value = true
  }

  function logout() {
    authenticated.value = false
  }

  return {
    castsList,
    setCasts,
    genres,
    genresList,
    fetchGenres,
    toggleGenre,
    login,
    logout,
    authenticated
  }
})
