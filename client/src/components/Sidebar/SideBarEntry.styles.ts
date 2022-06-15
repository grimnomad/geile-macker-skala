import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HighlightBackground } from '@gms/components';
import styled from 'styled-components';

interface EntryContainerProps {
  readonly showBackground: boolean;
}

const Wrapper = styled.div<EntryContainerProps>`
  display: grid;
  grid-template-columns: 4fr 0.5fr;
  align-items: center;
  padding: 0.25rem 0.25rem 0.25rem 1rem;
  height: 2.5rem;
  width: 100%;
  cursor: pointer;

  ${(props) => (props.showBackground ? HighlightBackground : null)};
`;

const Name = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  padding-left: 0.25rem;
`;

const Icon = styled(FontAwesomeIcon)`
  width: 100%;
  height: 1.5em;
`;

const MenuEntry = styled.div`
  padding: 0.5em 0.75em;
  cursor: pointer;
`;

export type { EntryContainerProps };
export { Icon, MenuEntry, Name, Wrapper };
