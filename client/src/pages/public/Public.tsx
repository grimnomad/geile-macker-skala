import { Fragment, ReactElement, Suspense } from 'react';
import { Route, Switch, useHistory } from 'react-router';

import { Header, HeaderBar, HeaderButton } from '../../components';
import { routes } from './routes';

function Public(): ReactElement {
  const history = useHistory();

  function signin(): void {
    history.push('/signup');
  }

  function login(): void {
    history.push('/login');
  }

  return (
    <Fragment>
      <Header>
        <HeaderBar>
          <HeaderButton onClick={signin}>Sign in</HeaderButton>
          <HeaderButton onClick={login}>Log in</HeaderButton>
        </HeaderBar>
      </Header>
      <Switch>
        <Suspense fallback={'Loading'}>
          {routes.map((route, index) => (
            <Route {...route} key={index} />
          ))}
        </Suspense>
      </Switch>
    </Fragment>
  );
}

export default Public;
