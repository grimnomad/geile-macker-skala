import { ReactElement, ReactNode } from 'react';

import { SideBarEntry } from './SideBarEntry';
import { Bottom, Button, Container, Top } from './styles';

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

  return (
    <Container>
      <Top>{children}</Top>
      <Bottom>
        {action ? (
          <Button onClick={action.onClick}>{action.label}</Button>
        ) : null}
      </Bottom>
    </Container>
  );
}

SideBar.Entry = SideBarEntry;

export { SideBar };
