import { ForwardedRef, forwardRef, ReactElement, ReactNode } from 'react';
import { createPortal } from 'react-dom';

import { Container, ContainerCSSProperties } from './Menu.styles';

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

  const style: ContainerCSSProperties = {
    '--left': `${y}px`,
    '--top': `${x}px`
  };

  return createPortal(
    <Container ref={ref} style={style}>
      {children}
    </Container>,
    document.body
  );
}

const Menu = forwardRef(MenuComponent);

export type { MenuProps };
export { Menu };
