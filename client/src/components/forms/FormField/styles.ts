import styled from 'styled-components';

import { Label } from '../../atoms';

const FieldLabel = styled(Label)`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
`;

const Container = styled.div`
  margin: 0 0 0.5em 0;
`;

const Name = styled.span`
  font-size: larger;
  font-weight: bold;
`;

const Hint = styled.span`
  font-size: small;
`;

export { Container, FieldLabel, Hint, Name };
