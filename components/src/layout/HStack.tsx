import { ReactElement, ReactNode } from 'react';

import { Wrapper, WrapperCSSProperties } from './HStack.styles';

interface HStackProps {
  readonly children: ReactNode;
  readonly reverse?: boolean;
  readonly className?: string;
}

function HStack(props: HStackProps): ReactElement {
  const { children, reverse, className } = props;

  const style: WrapperCSSProperties = {
    '--reverse': reverse ? 'row-reverse' : 'row'
  };

  return (
    <Wrapper style={style} className={className}>
      {children}
    </Wrapper>
  );
}

export type { HStackProps };
export { HStack };
