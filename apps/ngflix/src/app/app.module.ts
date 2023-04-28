import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "../components/home.component";
import { AppComponent } from "./app.component";
import { appRoutes } from "./app.routes";
import { MoviesModule } from "@kalacsorg/movies";

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: "serverApp" }),
    RouterModule.forRoot(appRoutes, { initialNavigation: "enabledBlocking" }),
    MoviesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
