import { ReactElement, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../AuthProvider';
import { Logo, Wrapper } from './Header.styles';

interface HeaderProps {
  readonly children?: ReactNode;
}

function Header(props: HeaderProps): ReactElement {
  const { children } = props;

  const { handle } = useAuth();
  const navigate = useNavigate();

  function onClick(): void {
    if (handle) {
      navigate('/dashboard');
    } else {
      navigate('/');
    }
  }

  return (
    <Wrapper>
      <Logo onClick={onClick}>Geile Macker Skala</Logo>
      {children}
    </Wrapper>
  );
}

export { Header };
