import React, { ForwardedRef, LabelHTMLAttributes, ReactElement } from 'react';

import { StyledLabel } from './styles';

type LabelProps = LabelHTMLAttributes<HTMLLabelElement>;

function LabelComponent(
  props: LabelProps,
  ref: ForwardedRef<HTMLLabelElement>
): ReactElement {
  return <StyledLabel ref={ref} {...props} />;
}

const Label = React.forwardRef(LabelComponent);

export type { LabelProps };
export { Label };
