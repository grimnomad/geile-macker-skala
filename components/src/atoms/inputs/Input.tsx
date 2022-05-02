import {
  ForwardedRef,
  forwardRef,
  InputHTMLAttributes,
  ReactElement
} from 'react';
import { useTheme } from 'styled-components';

import { InputCSSProperties, StyledInput } from './Input.styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean;
}

function InputComponent(
  props: InputProps,
  ref: ForwardedRef<HTMLInputElement>
): ReactElement {
  const { hasError } = props;
  const theme = useTheme();

  const style: InputCSSProperties = {
    '--border-color': hasError ? theme.colors.helpers.danger : null
  };

  return <StyledInput ref={ref} style={style} {...props} />;
}

const Input = forwardRef(InputComponent);

export type { InputProps };
export { Input };
