import type { Ref } from 'vue'
import type { Movie } from './movies'

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

export interface Job {
  department: string
  jobs: [string] | null
}

export interface Employee {
  role: string
  name: string
  avatar: string
  department?: string
}

export interface Employees {
  cast: [Employee]
  crew: [Employee]
}

export interface Credits {
  cast: [CreditsCast]
  crew: [CreditsCrew]
}

export interface CreditsCast extends Movie {
  character: string
  credit_id: string
  order: number
}

export interface CreditsCrew extends Movie {
  credit_id: string
  department: string
  job: string
}

export interface apiPersonType {
  adult: boolean
  also_known_as: [string]
  biography: string
  birthday: string
  deathday: string | null
  gender: number
  homepage: string | null
  id: number
  imdb_id: string
  known_for_department: string
  name: string
  place_of_birth: string
  popularity: number
  profile_path: string
  credits: Credits
}

export interface PeopleService { 
  person: Ref<apiPersonType | undefined>
  getPerson: (id: string) => Promise<void>
}