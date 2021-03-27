import { lazy } from 'react';

import { RouteConfig } from '../../common';

const HomePage = lazy(async () => {
  const module = await import('../home');

  return { default: module.Home };
});

const routes: RouteConfig[] = [
  {
    path: '/',
    component: HomePage,
    exact: true
  }
];

export { routes };
