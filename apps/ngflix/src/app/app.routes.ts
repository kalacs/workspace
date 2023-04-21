import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'account',
    loadChildren: () =>
      import('account/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'details',
    loadChildren: () =>
      import('details/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'browse',
    loadChildren: () =>
      import('browse/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('browse/Module').then((m) => m.RemoteEntryModule),
  },
];
