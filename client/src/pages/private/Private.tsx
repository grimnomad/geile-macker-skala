import { Fragment, ReactElement } from 'react';
import { Outlet } from 'react-router-dom';

import {
  Header,
  HeaderBar,
  HeaderButton,
  HeaderUsername,
  useAuth
} from '../../components';

function Private(): ReactElement {
  const { logout, handle } = useAuth();

  return (
    <Fragment>
      <Header>
        <HeaderBar>
          <HeaderUsername>{handle}</HeaderUsername>
          <HeaderButton onClick={() => logout()}>Logout</HeaderButton>
        </HeaderBar>
      </Header>
      <Outlet />
    </Fragment>
  );
}

export default Private;
