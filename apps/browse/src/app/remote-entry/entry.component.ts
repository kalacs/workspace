import { Component } from "@angular/core";

@Component({
  selector: "kalacsorg-browse-entry",
  template: `
    <header>
      <h1>My Video Streaming Platform</h1>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Movies</a></li>
          <li><a href="#">TV Shows</a></li>
          <li><a href="#">Categories</a></li>
          <li><a href="#">Search</a></li>
          <li><a href="#">Account</a></li>
        </ul>
      </nav>
    </header>
    <main>
      <section id="categories">
        <h2>Categories</h2>
        <ul>
          <li><a href="#">Action</a></li>
          <li><a href="#">Comedy</a></li>
          <li><a href="#">Drama</a></li>
          <li><a href="#">Horror</a></li>
          <li><a href="#">Sci-Fi</a></li>
          <li><a href="#">Thriller</a></li>
        </ul>
      </section>
      
      <section id="movies">
        <h2>Action Movies</h2>
        <ul>
          <li><a href="#">Movie 1</a></li>
          <li><a href="#">Movie 2</a></li>
          <li><a href="#">Movie 3</a></li>
        </ul>
        <h2>Comedy Movies</h2>
        <ul>
          <li><a href="#">Movie 4</a></li>
          <li><a href="#">Movie 5</a></li>
          <li><a href="#">Movie 6</a></li>
        </ul>
        <!-- Add more categories and movies as needed -->
      </section>
    </main>
    
    <footer>
      <p>&copy; 2023 My Video Streaming Platform</p>
    </footer>
  
  `,
})
export class RemoteEntryComponent {}
