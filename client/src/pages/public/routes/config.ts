import { lazy } from 'react';

import { RouteConfig } from '../../common';

const HomePage = lazy(async () => {
  const module = await import('../home');

  return { default: module.Home };
});

const SignUpPage = lazy(async () => {
  const module = await import('../signup');

  return { default: module.SignUp };
});

const LogInPage = lazy(async () => {
  const module = await import('../login');

  return { default: module.Login };
});

const routes: RouteConfig[] = [
  {
    path: '/',
    component: HomePage,
    exact: true
  },
  {
    path: '/signup',
    component: SignUpPage
  },
  {
    path: '/login',
    component: LogInPage
  }
];

export { routes };
