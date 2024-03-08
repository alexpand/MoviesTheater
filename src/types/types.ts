import type { Ref } from 'vue'

export interface apiMovieType {
    page: number
    results: [Movie]
    total_pages: number
    total_results: number
}

export interface Movie { 
    adult: boolean
    backdrop_path: string
    genre_ids: [number] 
    id: number
    original_language: string
    original_title: string
    overview: string 
    popularity: number
    poster_path: string
    release_date: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
}

export interface apiGenreType {
    genres: [Genre]
}

export interface Genre {
    id: number
    name: string
}

export interface SelectItem extends Genre {
    isActive: boolean
}

export interface MovieService { 
    movies: Ref<apiMovieType | undefined>
    genres: Ref<apiGenreType | undefined>
    getMovies: () => Promise<void>
    getGenres: () => Promise<void>
}