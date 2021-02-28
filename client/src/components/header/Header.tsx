import { ReactElement } from 'react';
import { useHistory } from 'react-router-dom';

import { Button, ButtonBar, Logo, Wrapper } from './styles';

function Header(): ReactElement {
  const history = useHistory();

  function signIn(): void {
    history.push('/signup');
  }

  function logIn(): void {
    history.push('/login');
  }

  return (
    <Wrapper>
      <Logo>Geile Macker Skala</Logo>
      <ButtonBar>
        <Button onClick={signIn}>Sign in</Button>
        <Button onClick={logIn}>Log in</Button>
      </ButtonBar>
    </Wrapper>
  );
}

export { Header };
