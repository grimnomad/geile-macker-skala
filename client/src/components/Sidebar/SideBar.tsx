import { ReactElement, ReactNode } from 'react';

import { Bottom, Button, Container, Top } from './SideBar.styles';
import { SideBarEntry } from './SideBarEntry';

interface Action {
  readonly label: string;
  readonly onClick?: () => void;
}

interface SideBarProps {
  readonly children: ReactNode;
  readonly action: Action;
}

function SideBar(props: SideBarProps): ReactElement {
  const { children, action } = props;

  const { label, onClick } = action;

  return (
    <Container>
      <Top>{children}</Top>
      <Bottom>
        {action ? <Button onClick={onClick}>{label}</Button> : null}
      </Bottom>
    </Container>
  );
}

SideBar.Entry = SideBarEntry;

export { SideBar };
