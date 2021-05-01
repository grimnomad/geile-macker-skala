import styled from 'styled-components';

import { ColorMixin } from '../../theme';

const Container = styled.div`
  width: 10rem;
  height: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const EntryContainer = styled.div`
  margin: 0.5rem;
`;

const Top = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  ${ColorMixin};
  border: none;
  font-size: 1em;
  width: 100%;
  padding: 1em 0;

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

export { Bottom, Button, Container, EntryContainer, Top };
