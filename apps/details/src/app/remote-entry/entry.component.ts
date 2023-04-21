import { Component } from "@angular/core";

@Component({
  selector: "kalacsorg-details-entry",
  template: `
    <div class="container">
      <div class="header">
        <h1>Movie Title</h1>
        <div class="actions">
          <button>Watch Now</button>
          <button>Add to Watchlist</button>
        </div>
      </div>
      <div class="main">
        <div class="poster">
          <img src="movie-poster.jpg" alt="Movie Poster">
        </div>
        <div class="details">
          <div class="metadata">
            <p><strong>Release Date:</strong> YYYY-MM-DD</p>
            <p><strong>Director:</strong> Director Name</p>
            <p><strong>Starring:</strong> Actor 1, Actor 2, Actor 3</p>
            <p><strong>Genre:</strong> Genre 1, Genre 2, Genre 3</p>
            <p><strong>Duration:</strong> 1h 30min</p>
            <p><strong>Rating:</strong> 4.5/5</p>
          </div>
          <div class="description">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat ipsum eu semper consequat. Etiam et libero magna. Duis volutpat justo non mi porttitor, sed egestas nibh volutpat. Vivamus a dui eu lorem fringilla iaculis. Etiam commodo eleifend felis in bibendum. Donec nec luctus eros. Nulla non lacinia ex.</p>
          </div>
        </div>
      </div>
    </div>  
  `,
})
export class RemoteEntryComponent {}
