import { ref } from 'vue'
import type { MovieService, apiMovieType } from '@/types/types'
import { useUrlHandler } from '@/composables/utils'

const params = '?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc'

export default function useMoviesService(): MovieService {
    const { headers, buildUrl } = useUrlHandler()
    const movies = ref<apiMovieType>()
    // methods
    // async function getDetails(id: string) {
    //     const response = await fetch(buildUrl() + id, { headers: { Authorization: `Bearer ${api_token}`, accept: 'application/json'}} )
    //     const details = await response.json()
    //     console.log(details.title, ' movie')
    // }

    async function getMovies(): Promise<void> {
        const response = await fetch(buildUrl('/movie', '/discover') + params, headers )
        movies.value = await response.json()
    }

    return { 
        // getDetails,
        movies,
        getMovies
    }
}