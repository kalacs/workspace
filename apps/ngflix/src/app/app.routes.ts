import { NxWelcomeComponent } from "./nx-welcome.component";
import { Route } from "@angular/router";

export const appRoutes: Route[] = [
  {
    path: "details",
    loadChildren: () =>
      import("details/Module").then((m) => m.RemoteEntryModule),
  },
  {
    path: "browse",
    loadChildren: () =>
      import("browse/Module").then((m) => m.RemoteEntryModule),
  },
  {
    path: "",
    component: NxWelcomeComponent,
  },
];
