import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ReactElement } from 'react';
import { useTheme } from 'styled-components';

import { useHover } from '../../hooks';
import { EntryContainer, EntryName } from './styles';

interface SideBarEntryProps {
  readonly name: string;
}

function SideBarEntry(props: SideBarEntryProps): ReactElement {
  const { name } = props;
  const theme = useTheme();
  const [show, handlers] = useHover();

  return (
    <EntryContainer {...handlers}>
      <EntryName>{name}</EntryName>
      {show ? (
        <FontAwesomeIcon icon={faEllipsisV} color={theme.secondary} />
      ) : null}
    </EntryContainer>
  );
}

export type { SideBarEntryProps };
export { SideBarEntry };
