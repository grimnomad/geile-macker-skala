import { Fragment, ReactElement } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import { Header, HeaderBar, HeaderButton } from '../../components';
import { RouteFactory } from '../routes';

function Public(): ReactElement {
  const navigate = useNavigate();

  function signin(): void {
    navigate(RouteFactory.SIGN_UP);
  }

  function login(): void {
    navigate(RouteFactory.LOG_IN);
  }

  return (
    <Fragment>
      <Header>
        <HeaderBar>
          <HeaderButton onClick={signin}>Sign in</HeaderButton>
          <HeaderButton onClick={login}>Log in</HeaderButton>
        </HeaderBar>
      </Header>
      <Outlet />
    </Fragment>
  );
}

export default Public;
