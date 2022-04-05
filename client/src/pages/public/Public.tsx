import { Fragment, ReactElement } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import { Header, HeaderBar, HeaderButton } from '../../components';

function Public(): ReactElement {
  const navigate = useNavigate();

  function signin(): void {
    navigate('/signup');
  }

  function login(): void {
    navigate('/login');
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
