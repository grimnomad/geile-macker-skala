import { lazy } from 'react';
import { useRoutes } from 'react-router-dom';

const PublicLayout = lazy(async () => {
  const module = await import('../public/Public');

  return module;
});

const Home = lazy(async () => {
  const module = await import('../public/home');

  return { default: module.Home };
});

const SignUp = lazy(async () => {
  const module = await import('../public/signup');

  return { default: module.SignUp };
});

const Login = lazy(async () => {
  const module = await import('../public/login');

  return { default: module.Login };
});

const PrivateLayout = lazy(async () => {
  const module = await import('../private/Private');

  return module;
});

const Dashboard = lazy(async () => {
  const module = await import('../private/home');

  return { default: module.Dashboard };
});

function useRouting(): ReturnType<typeof useRoutes> {
  const element = useRoutes([
    {
      element: <PublicLayout />,
      path: '/',
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: 'signup',
          element: <SignUp />
        },
        {
          path: 'login',
          element: <Login />
        }
      ]
    },
    {
      element: <PrivateLayout />,
      path: '/dashboard',
      children: [
        {
          index: true,
          element: <Dashboard />
        }
      ]
    }
  ]);

  return element;
}

export { useRouting };
