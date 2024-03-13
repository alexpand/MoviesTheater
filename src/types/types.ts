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
    casts: [Casts]
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

export interface Company {
    id: number
    logo_path: string
    name: string
    origin_country: string
}

export interface Country {
    iso_3166_1: string
    name: string
}

export interface Language {
    english_name: string
    iso_639_1: string
    name: string
}

export interface Casts {
    cast: [Cast]
    crew: [Crew]
}

export interface Cast {
    adult: boolean
    gender: number
    id: number
    known_for_department: string
    name: string
    original_name: string
    popularity: number
    profile_path: string
    cast_id: number
    character: string
    credit_id: string
    order: number
}

export interface Crew {
    adult: boolean
    gender: number
    id: number
    known_for_department: string
    name: string
    original_name: string
    popularity: number
    profile_path: string
    credit_id: string
    department: string
    job: string
}

export interface MovieService { 
    movies: Ref<apiMovieType | undefined>
    genres: Ref<apiGenreType | undefined>
    movie_details: Ref<apiMovieDetailsType | undefined>
    getMovies: () => Promise<void>
    getGenres: () => Promise<void>
    getDetails: (id: string) => Promise<void>
}