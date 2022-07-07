import { ReactElement, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

import { RouteFactory } from '../../pages';
import { useAuth } from '../AuthProvider';
import { Logo, Wrapper } from './Header.styles';

interface HeaderProps {
  readonly children?: ReactNode;
}

function Header(props: HeaderProps): ReactElement {
  const { children } = props;

  const { status } = useAuth();
  const navigate = useNavigate();

  function onClick(): void {
    if (status === 'signedIn') {
      navigate(RouteFactory.DASHBOARD);
    } else {
      navigate(RouteFactory.HOME);
    }
  }

  return (
    <Wrapper as="nav">
      <Logo onClick={onClick}>Geile Macker Skala</Logo>
      {children}
    </Wrapper>
  );
}

export { Header };
