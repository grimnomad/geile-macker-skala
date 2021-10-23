import { ReactElement, ReactNode } from 'react';
import { createPortal } from 'react-dom';

import { Container } from './styles';

interface MenuProps {
  readonly children: ReactNode;
  readonly x: number;
  readonly y: number;
}

function Menu(props: MenuProps): ReactElement {
  const { children, x, y } = props;

  return createPortal(
    <Container x={x} y={y}>
      {children}
    </Container>,
    document.body
  );
}

export type { MenuProps };
export { Menu };
