import { css } from 'styled-components';

const ColorMixin = css`
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.secondary};
`;

export { ColorMixin };
