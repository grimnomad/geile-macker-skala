import { Fragment, ReactElement } from 'react';

import { Header, HeaderBar, HeaderButton } from '../../components';
import { useAuth } from '../../components/auth';

function Private(): ReactElement {
  const { logout } = useAuth();

  return (
    <Fragment>
      <Header>
        <HeaderBar>
          <HeaderButton onClick={logout}>Logout</HeaderButton>
        </HeaderBar>
      </Header>
    </Fragment>
  );
}

export default Private;
