import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable, switchMap } from 'rxjs';
import { Category, CategoryDataResult } from './category';

const TMDB_BASE_URL = 'https://api.themoviedb.org/3'
const TMDB_API_KEY = '9f1ffd64abd4bde18614fd9087d87d71'

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  constructor(private http: HttpClient) { }

  getMoviesByGenres(): Observable<Category> {
    const url = `${TMDB_BASE_URL}/genre/movie/list?api_key=${TMDB_API_KEY}`
    return this.http.get<CategoryDataResult>(url, {   headers: new HttpHeaders({
      "Host": "api.themoviedb.org",
    })
  }).pipe(
      switchMap(data => from(data.results))
    )
  }
}