import { ReactElement, ReactNode } from 'react';

import { Logo, Wrapper } from './Header.styles';

interface HeaderProps {
  readonly children?: ReactNode;
}

function Header(props: HeaderProps): ReactElement {
  const { children } = props;

  return (
    <Wrapper>
      <Logo>Geile Macker Skala</Logo>
      {children}
    </Wrapper>
  );
}

export { Header };
