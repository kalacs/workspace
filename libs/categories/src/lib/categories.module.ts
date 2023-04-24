import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { CategoriesService } from './categories.service';
import { CategoryListComponent } from './components/category-list/category-list.component';
import {MoviesModule} from '@kalacsorg/movies';

@NgModule({
  imports: [
    CommonModule, 
    MoviesModule
  ],
  declarations: [CategoryListComponent],
  exports: [CategoryListComponent]
})
export class CategoriesModule {}
