import { Route } from '@angular/router';
import { HomeComponent } from '../components/home.component';

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
    path: '',
    component: HomeComponent
  },
];
