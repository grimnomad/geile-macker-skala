import styled, { css } from 'styled-components';

import { ColorMixin } from '../../../theme';
import { InputProps } from './Input';

const StandardBorder = css`
  border: 1px solid var(--tertiary-color);
`;

const ErrorBorder = css`
  border: 1px solid red;
`;

const StyledInput = styled.input.attrs((props) => ({
  type: props.type ?? 'text'
}))<InputProps>`
  height: 3em;
  outline: none;
  padding: 0 10px;
  width: calc(100% - 20px);
  margin: 0 10px 5px 10px;
  ${ColorMixin};

  ${(props) => (props.hasError ? ErrorBorder : StandardBorder)}

  ::placeholder {
    color: whitesmoke;
    font-style: italic;
  }
`;

export { StyledInput };
