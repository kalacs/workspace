type StringOrNull = string | null

export interface Movie {
  poster_path: StringOrNull,
  adult: boolean,
  overview: string,
  release_date: string,
  genre_ids: number[],
  id: number,
  original_title: string,
  original_language: string,
  title:string,
  backdrop_path: StringOrNull,
  popularity: number,
  vote_count: number,
  video: boolean,
  vote_average: number
}

export interface MovieDataResult {
  page: number,
  results: Movie[],
  total_results: number,
  total_pages: number
}
