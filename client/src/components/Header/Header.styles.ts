import { CenterMixin, ColorMixin, HighlightBackground } from '@gms/components';
import styled from 'styled-components';

const Wrapper = styled.nav`
  display: flex;
  margin: 0 1em;
  justify-content: space-between;
`;

const Logo = styled.a`
  ${CenterMixin};
  padding: 0;
  margin: 0;
  font-size: 2em;
  cursor: pointer;
`;

const HeaderButton = styled.button`
  ${ColorMixin};
  border: none;
  font-size: 1em;
  height: 100%;
  width: 5em;

  &:hover {
    ${HighlightBackground};
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
