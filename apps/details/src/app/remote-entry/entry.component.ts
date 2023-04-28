import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Movie, MoviesService } from "@kalacsorg/movies";
import { Observable } from "rxjs";

@Component({
  selector: "kalacsorg-details-entry",
  template: `
    <kalacsorg-movie-detail [movieId]="movieId"></kalacsorg-movie-detail>
  `,
})
export class RemoteEntryComponent implements OnInit{
  movie$: Observable<Movie> = new Observable()
  movieId = ''

  constructor(private movieService: MoviesService, private route: ActivatedRoute){
  }

  ngOnInit(): void {
    this.route.params.subscribe(({ id }) => {
      this.movieId = id
    })
    this.movie$ = this.movieService.getMovie(this.movieId)
  }
}
