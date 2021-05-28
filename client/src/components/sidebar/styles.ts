import styled from 'styled-components';

import { ColorMixin } from '../../theme';

const Container = styled.div`
  width: 12rem;
  height: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const EntryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  height: 100%;
  width: 100%;

  &:hover {
    background-color: ${(props) => props.theme.tertiary};
  }
`;

const EntryName = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
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

export { Bottom, Button, Container, EntryContainer, EntryName, Top };
