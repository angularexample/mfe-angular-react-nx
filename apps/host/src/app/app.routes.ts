import { NxWelcome } from './nx-welcome';
import { Route } from '@angular/router';
import { loadRemote } from '@module-federation/enhanced/runtime';

export const appRoutes: Route[] = [
  {
    path: 'remote2',
    loadChildren: () =>
      loadRemote<typeof import('remote2/Routes')>('remote2/Routes').then(
        (m) => m!.remoteRoutes
      ),
  },
  {
    path: 'remote1',
    loadChildren: () =>
      loadRemote<typeof import('remote1/Routes')>('remote1/Routes').then(
        (m) => m!.remoteRoutes
      ),
  },
  {
    path: '',
    component: NxWelcome,
  },
];
