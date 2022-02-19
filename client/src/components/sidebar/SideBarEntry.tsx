import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ReactElement } from 'react';
import { useTheme } from 'styled-components';

import { useHover } from '../../hooks';
import { useMenu } from '../menu';
import { EntryContainer, EntryName } from './styles';

interface SideBarEntryProps {
  readonly name: string;
  readonly onDelete: (id: string) => void;
}

function SideBarEntry(props: SideBarEntryProps): ReactElement {
  const { name, onDelete } = props;

  const theme = useTheme();
  const [isHovered, handlers] = useHover();
  const { renderMenu, bind, isDisplaying } = useMenu({
    entries: [{ name: 'Löschen', action: onDelete }]
  });

  const show = isHovered || isDisplaying;

  return (
    <EntryContainer showBackground={show} {...handlers}>
      <EntryName>{name}</EntryName>
      {show ? (
        <FontAwesomeIcon
          icon={faEllipsisV as IconProp}
          color={theme.secondary}
          forwardedRef={bind.ref}
          onClick={bind.onClick}
        />
      ) : null}
      {renderMenu()}
    </EntryContainer>
  );
}

export type { SideBarEntryProps };
export { SideBarEntry };
