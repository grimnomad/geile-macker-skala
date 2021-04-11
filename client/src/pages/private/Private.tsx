import { Fragment, ReactElement, Suspense } from 'react';
import { Route, Switch } from 'react-router';

import {
  Header,
  HeaderBar,
  HeaderButton,
  HeaderUsername
} from '../../components';
import { useAuth } from '../../components/auth';
import { routes } from '../private/routes';

function Private(): ReactElement {
  const { logout, handle } = useAuth();

  return (
    <Fragment>
      <Header>
        <HeaderBar>
          <HeaderUsername>{handle}</HeaderUsername>
          <HeaderButton onClick={logout}>Logout</HeaderButton>
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

export default Private;
