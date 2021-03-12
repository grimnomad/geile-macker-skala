import {
  ForwardedRef,
  forwardRef,
  LabelHTMLAttributes,
  ReactElement
} from 'react';

import { StyledLabel } from './styles';

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {}

function LabelComponent(
  props: LabelProps,
  ref: ForwardedRef<HTMLLabelElement>
): ReactElement {
  return <StyledLabel ref={ref} {...props} />;
}

const Label = forwardRef(LabelComponent);

export type { LabelProps };
export { Label };
