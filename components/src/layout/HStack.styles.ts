import styled, { CSSProperties } from 'styled-components';

interface WrapperCSSProperties extends CSSProperties {
  '--reverse': Extract<CSSProperties['flexDirection'], 'row' | 'row-reverse'>;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: var(--reverse, row);
`;

export type { WrapperCSSProperties };
export { Wrapper };
