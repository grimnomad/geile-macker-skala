import {
  ForwardedRef,
  forwardRef,
  InputHTMLAttributes,
  ReactElement
} from 'react';

import { StyledInput } from './Input.styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean;
}

function InputComponent(
  props: InputProps,
  ref: ForwardedRef<HTMLInputElement>
): ReactElement {
  return <StyledInput ref={ref} {...props} />;
}

const Input = forwardRef(InputComponent);

export type { InputProps };
export { Input };
