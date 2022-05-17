import { Fragment, ReactElement } from 'react';
import { Outlet } from 'react-router-dom';

import {
  Header,
  HeaderBar,
  HeaderButton,
  HeaderUsername,
  useAuth,
  useLogout
} from '../../components';

function Private(): ReactElement {
  const { user } = useAuth<string>();
  const logout = useLogout();

  return (
    <Fragment>
      <Header>
        <HeaderBar>
          <HeaderUsername>{user}</HeaderUsername>
          <HeaderButton onClick={logout}>Logout</HeaderButton>
        </HeaderBar>
      </Header>
      <Outlet />
    </Fragment>
  );
}

export default Private;
