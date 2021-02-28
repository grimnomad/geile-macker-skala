import { ReactElement } from 'react';

import { Button, ButtonBar, Logo, Wrapper } from './styles';

function Header(): ReactElement {
  return (
    <Wrapper>
      <Logo>Geile Macker Skala</Logo>
      <ButtonBar>
        <Button>Sign in</Button>
        <Button>Log in</Button>
      </ButtonBar>
    </Wrapper>
  );
}

export { Header };
