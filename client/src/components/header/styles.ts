import styled from 'styled-components';

import { CenterMixin, ColorMixin } from '../../theme';

const Wrapper = styled.nav`
  display: flex;
  margin: 0 1em;
  justify-content: space-between;
`;

const Logo = styled.h1`
  ${CenterMixin};
  padding: 0;
  margin: 0;
  font-size: 2em;
`;

const Button = styled.button`
  ${ColorMixin};
  border: none;
  font-size: 1em;
  height: 100%;
  width: 5em;

  &:hover {
    background-color: ${(props) => props.theme.tertiary};
  }

  &:active {
    outline: none;
    border: none;
  }

  &:focus {
    outline: 0;
  }
`;

const ButtonBar = styled.div`
  ${CenterMixin};
`;

export { Button, ButtonBar, Logo, Wrapper };
