import styled, { CSSProperties } from 'styled-components';

interface ContainerCSSProperties extends CSSProperties {
  readonly '--top': string;
  readonly '--left': string;
}

const Container = styled.div`
  position: absolute;
  padding: 5px;
  display: flex;
  flex-direction: column;
  background-color: var(--color-elements-highlight);
  color: var(--color-text-main);
  top: var(--top);
  left: var(--left);
`;

export type { ContainerCSSProperties };
export { Container };
