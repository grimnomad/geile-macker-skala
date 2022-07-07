import { ReactElement, ReactNode } from 'react';

import { Wrapper, WrapperCSSProperties } from './VStack.styles';

interface VStackProps {
  readonly children: ReactNode;
  readonly reverse?: boolean;
}

function VStack(props: VStackProps): ReactElement {
  const { children, reverse } = props;

  const style: WrapperCSSProperties = {
    '--reverse': reverse ? 'column-reverse' : 'column'
  };

  return <Wrapper style={style}>{children}</Wrapper>;
}

export type { VStackProps };
export { VStack };
