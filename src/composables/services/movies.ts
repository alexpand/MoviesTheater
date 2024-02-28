import type { apiMovieType } from '@/types/types'
import { useUrlHandler } from '@/composables/utils'

const params = '?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc'

export default function useMoviesService() {
    const { headers, buildUrl } = useUrlHandler()

    // methods
    // async function getDetails(id: string) {
    //     const response = await fetch(buildUrl() + id, { headers: { Authorization: `Bearer ${api_token}`, accept: 'application/json'}} )
    //     const details = await response.json()
    //     console.log(details.title, ' movie')
    // }

    async function getMovies(): Promise<apiMovieType> {
        const response = await fetch(buildUrl('/movie', '/discover') + params, headers )
        const movies = await response.json()
        return movies
    }

    return { 
        // getDetails, 
        getMovies
    }
}