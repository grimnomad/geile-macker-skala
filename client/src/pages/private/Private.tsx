import { Fragment, ReactElement } from 'react';

import {
  Header,
  HeaderBar,
  HeaderButton,
  HeaderUsername
} from '../../components';
import { useAuth } from '../../components/auth';

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
    </Fragment>
  );
}

export default Private;
