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
  background-color: var(--color-elements-highlight);
  color: var(--color-text-main);
  top: ${(props) => props.x}px;
  left: ${(props) => props.y}px;
`;

export { Container };
