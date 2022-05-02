import { ColorMixin, HighlightBackground } from '@gms/components';
import styled from 'styled-components';

const Container = styled.div`
  width: 12rem;
  height: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
    ${HighlightBackground}
  }

  &:active {
    outline: none;
    border: none;
  }

  &:focus {
    outline: 0;
  }
`;

export { Bottom, Button, Container, Top };
