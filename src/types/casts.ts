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
}

export interface Employees {
  cast: [Employee]
  crew: [Employee]
}