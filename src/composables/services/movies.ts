import { ref } from 'vue'
import { type MovieService, type apiMovieType, type apiMovieDetailsType } from '@/types/movies'
import { type apiGenreType } from '@/types/globals'
import { useUrlHandler } from '@/composables/utils'
import { useSessionStore } from '@/stores/session'

const params =
  '?include_adult=false&include_video=false&language=en-US&sort_by=popularity.desc'

export default function useMoviesService(): MovieService {
  const { headers, buildUrl } = useUrlHandler()
  const movies = ref<apiMovieType>()
  const genres = ref<apiGenreType>()
  const movie_details = ref<apiMovieDetailsType>()

  const sessionStore = useSessionStore()

  // methods

  async function getDetails(id: string): Promise<void> {
    const response = await fetch(
      buildUrl(`/movie/${id}`) + '?append_to_response=videos%2Ccasts',
      headers
    )
    movie_details.value = await response.json()
  }

  async function getGenres(): Promise<void> {
    const response = await fetch(buildUrl('/movie/list', '/genre') + params, headers)
    genres.value = await response.json()
  }

  async function getMovies(page: number | undefined = 1): Promise<void> {
    const response = await fetch(
      buildUrl('/movie', '/discover') + params + `&with_genres=${sessionStore.genresList}&page=${page}`,
      headers
    )
    movies.value = await response.json()
  }

  return {
    genres,
    movies,
    movie_details,
    getDetails,
    getMovies,
    getGenres
  }
}
