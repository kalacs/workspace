import { Route } from "@angular/router";

export const appRoutes: Route[] = [
  {
    path: "details/:id",
    loadChildren: () =>
      import("./remote-entry/entry.module").then((m) => m.RemoteEntryModule),
  },
];
