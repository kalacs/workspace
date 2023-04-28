import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { MoviesModule } from "@kalacsorg/movies";
import { RemoteEntryComponent } from "./entry.component";
import { remoteRoutes } from "./entry.routes";

@NgModule({
  declarations: [RemoteEntryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(remoteRoutes),
    MoviesModule
  ],
  providers: [],
})
export class RemoteEntryModule {
}
