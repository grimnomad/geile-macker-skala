import styled, { CSSProperties } from 'styled-components';

interface WrapperCSSProperties extends CSSProperties {
  '--reverse': Extract<
    CSSProperties['flexDirection'],
    'column' | 'column-reverse'
  >;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: var(--reverse, column);
`;

export type { WrapperCSSProperties };
export { Wrapper };
