import { ReactElement, ReactNode } from 'react';

import { AppLayout } from './styles';

interface LayoutProps {
  readonly children: ReactNode;
}

function Layout(props: LayoutProps): ReactElement {
  const { children } = props;

  return <AppLayout>{children}</AppLayout>;
}

export { Layout };
