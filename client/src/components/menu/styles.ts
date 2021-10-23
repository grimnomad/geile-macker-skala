import styled from 'styled-components';

interface ContainerProps {
  readonly x: number;
  readonly y: number;
}

const Container = styled.div<ContainerProps>`
  position: absolute;
  padding: 5px;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.secondary};
  color: ${(props) => props.theme.tertiary};
  top: ${(props) => props.x}px;
  left: ${(props) => props.y}px;
`;

export { Container };
