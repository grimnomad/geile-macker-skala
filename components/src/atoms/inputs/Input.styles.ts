import styled, { CSSProperties } from 'styled-components';

import { ColorMixin } from '../../mixins';
import { InputProps } from './Input';

interface InputCSSProperties extends CSSProperties {
  '--border-color': string | null;
}

const StyledInput = styled.input.attrs((props) => ({
  type: props.type ?? 'text'
}))<InputProps>`
  --padding-x: 10px;

  height: 3em;
  outline: none;
  padding: 0 var(--padding-x);
  width: calc(100% - var(--padding-x) * 2);
  margin: 0 10px 5px 10px;
  border: 1px solid var(--border-color, var(--color-elements-shadow));
  ${ColorMixin};
`;

export type { InputCSSProperties };
export { StyledInput };
