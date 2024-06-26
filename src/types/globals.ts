import type { Ref } from 'vue'

// Location types

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

// Genre types

export interface apiGenreType {
  genres: [Genre]
}

export interface Genre {
  id: number
  name: string
  isActive: boolean
}

export interface SelectItem extends Genre {
  isActive: boolean
}

export interface ConfigurationService {
  departments: Ref<[string] | undefined>
  getDepartments: () => Promise<void>
}
