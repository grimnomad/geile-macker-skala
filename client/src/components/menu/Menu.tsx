import { ForwardedRef, forwardRef, ReactElement, ReactNode } from 'react';
import { createPortal } from 'react-dom';

import { Container } from './styles';

interface MenuProps {
  readonly children: ReactNode;
  readonly x: number;
  readonly y: number;
}

function MenuComponent(
  props: MenuProps,
  ref: ForwardedRef<HTMLDivElement>
): ReactElement {
  const { children, x, y } = props;

  return createPortal(
    <Container ref={ref} x={x} y={y}>
      {children}
    </Container>,
    document.body
  );
}

const Menu = forwardRef(MenuComponent);

export type { MenuProps };
export { Menu };
