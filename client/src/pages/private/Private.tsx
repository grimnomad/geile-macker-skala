import { Fragment, ReactElement } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import {
  Header,
  HeaderBar,
  HeaderButton,
  HeaderUsername,
  useAuth
} from '../../components';

function Private(): ReactElement {
  const { logout, handle } = useAuth();
  const navigate = useNavigate();

  function logOut(): void {
    logout(() => navigate('/'));
  }

  return (
    <Fragment>
      <Header>
        <HeaderBar>
          <HeaderUsername>{handle}</HeaderUsername>
          <HeaderButton onClick={logOut}>Logout</HeaderButton>
        </HeaderBar>
      </Header>
      <Outlet />
    </Fragment>
  );
}

export default Private;
