import { Fragment, ReactElement } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import {
  Header,
  HeaderBar,
  HeaderButton,
  HeaderUsername,
  useAuth,
  useLogger
} from '../../components';

function Private(): ReactElement {
  const { logout, handle } = useAuth();
  const navigate = useNavigate();
  const logger = useLogger(Private.name);

  function logOut(): void {
    logout(() => {
      logger.info('User has successfully logged out.');
      navigate('/');
    });
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
