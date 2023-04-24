import { Component, Input, OnInit } from '@angular/core';
import { MoviesService } from '@kalacsorg/movies';
import { Movie } from '@kalacsorg/movies';

@Component({
  selector: 'kalacsorg-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
})
export class CategoryListComponent implements OnInit{
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
