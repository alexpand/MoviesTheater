import type { Ref } from 'vue'

import type { Casts } from './casts'
import type { Company, Country, Language, Genre, apiGenreType } from './globals'

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

export interface apiMovieDetailsType {
    adult: boolean
    backdrop_path: string
    belongs_to_collection?: string
    budget: number
    genres: [Genre]
    homepage: string
    id: number
    imdb_id: string
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    production_companies: [Company]
    production_countries: [Country]
    release_date: string
    revenue: number
    runtime: number
    spoken_languages: [Language]
    status: string
    tagline: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
    casts: Casts
    videos: Videos
}

export interface Videos {
    results: [Video]
}

export interface Video {
    id: string
    iso_639_1: string
    iso_3166_1: string
    key: string
    name: string
    official: boolean
    published_at: string
    site: string
    size: number
    type: string
}

export interface MovieService { 
    movies: Ref<apiMovieType | undefined>
    genres: Ref<apiGenreType | undefined>
    movie_details: Ref<apiMovieDetailsType | undefined>
    getMovies: () => Promise<void>
    getGenres: () => Promise<void>
    getDetails: (id: string) => Promise<void>
}