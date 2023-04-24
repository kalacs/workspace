import { Component } from "@angular/core";

@Component({
  selector: "kalacsorg-home",
  template: `
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
        <kalacsorg-category-list></kalacsorg-category-list>
        <!-- Add more categories and movies as needed -->
      </section>
    </main>
    
    <footer>
      <p>&copy; 2023 My Video Streaming Platform</p>
    </footer>
  
  `,
})
export class HomeComponent {
  title = "ngflix";
}
