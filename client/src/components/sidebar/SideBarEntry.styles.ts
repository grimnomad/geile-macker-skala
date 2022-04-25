import { HighlightBackground } from '@gms/components';
import styled from 'styled-components';

interface EntryContainerProps {
  readonly showBackground: boolean;
}

const EntryContainer = styled.div<EntryContainerProps>`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  height: 100%;
  width: 100%;

  ${(props) => (props.showBackground ? HighlightBackground : null)};
`;

const EntryName = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
`;

export type { EntryContainerProps };
export { EntryContainer, EntryName };
