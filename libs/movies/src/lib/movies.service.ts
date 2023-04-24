import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable, switchMap } from 'rxjs';
import { Movie, MovieDataResult } from './movie';

const TMDB_BASE_URL = 'https://api.themoviedb.org/3'
const TMDB_API_KEY = '9f1ffd64abd4bde18614fd9087d87d71'

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  getMoviesByGenres(genreIds: number[]): Observable<Movie> {
    const url = `${TMDB_BASE_URL}/discover/movie/?api_key=${TMDB_API_KEY}&include_adult=false&include_video=false&page=1&genre_ids=${genreIds.join(',')}`
    return this.http.get<MovieDataResult>(url).pipe(
      switchMap(data => from(data.results))
    )
  }
}
