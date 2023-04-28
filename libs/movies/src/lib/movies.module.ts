import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesService } from './movies.service';
import { HttpClientModule } from '@angular/common/http';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [MoviesService],
  declarations: [
    MovieDetailComponent,
    MoviesListComponent
  ],
  exports: [
    MovieDetailComponent,
    MoviesListComponent
  ],
})
export class MoviesModule {}
