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

const HeaderButton = styled.button`
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

const HeaderUsername = styled.div`
  margin: 0 10px 0 0;
`;

const HeaderBar = styled.div`
  ${CenterMixin};
`;

export { HeaderBar, HeaderButton, HeaderUsername, Logo, Wrapper };
