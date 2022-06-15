import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { useHover, useMenu } from '@gms/components';
import { ReactElement } from 'react';
import { useTheme } from 'styled-components';

import { Icon, Name, Wrapper } from './SideBarEntry.styles';

interface SideBarEntryProps {
  readonly name: string;
  readonly onDelete: () => void;
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
    <Wrapper showBackground={show} {...handlers}>
      <Name>{name}</Name>
      {show ? (
        <Icon
          icon={faEllipsisV}
          color={theme.colors.text.dimmed}
          forwardedRef={bind.ref}
          onClick={bind.onClick}
        />
      ) : null}
      {renderMenu()}
    </Wrapper>
  );
}

export type { SideBarEntryProps };
export { SideBarEntry };
