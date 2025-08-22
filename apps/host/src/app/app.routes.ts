import { NxWelcome } from './nx-welcome';
import { Route } from '@angular/router';
import { loadRemote } from '@module-federation/enhanced/runtime';
import { ReactWrapper } from './react-wrapper/react-wrapper';

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
    path: 'remote3',
    component: ReactWrapper, // the Angular wrapper component which will load any React web component
    data: {
      elementName: 'wc-remote3', // the name of the custom element which is a React web component
      loadChildren: () => import('remote3/Module'), // the dynamic import of the React web component
    },
  },
  {
    path: '',
    component: NxWelcome,
  },
];
