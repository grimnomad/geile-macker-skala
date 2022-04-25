import React, { ForwardedRef, InputHTMLAttributes, ReactElement } from 'react';

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

const Input = React.forwardRef(InputComponent);

export type { InputProps };
export { Input };
