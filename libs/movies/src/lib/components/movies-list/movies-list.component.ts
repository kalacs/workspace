import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../movie';
import { MoviesService } from '../../movies.service';

@Component({
  selector: 'kalacsorg-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],
})
export class MoviesListComponent implements OnInit{
  @Input() genreId = 28;
  movies: Movie[] = []

  constructor(private movieService: MoviesService){}

  ngOnInit(): void {
    this.getMovies()
  }

  getMovies() {
    return this.movieService.getMoviesByGenres([this.genreId]).subscribe((value) => {
      this.movies.push(value)
    });
  }
}
