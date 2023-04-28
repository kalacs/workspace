import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../movie';
import { MoviesService } from '../../movies.service';

@Component({
  selector: 'kalacsorg-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
})
export class MovieDetailComponent implements OnInit {
  @Input() movieId = ''
  movie: Movie | null = null
  constructor(private movieService: MoviesService){
  }

  ngOnInit(): void {
    this.movieService.getMovie(this.movieId).subscribe(movie => {
      this.movie = movie
    })
  }
}
