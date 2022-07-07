import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { useHover, useMenu } from '@gms/components';
import { ReactElement, ReactNode } from 'react';
import { useTheme } from 'styled-components';

import { Icon, MenuEntry, Wrapper } from './SideBarEntry.styles';

interface SideBarEntryProps {
  readonly onDelete: () => void;
  readonly children: ReactNode;
}

function SideBarEntry(props: SideBarEntryProps): ReactElement {
  const { children, onDelete } = props;

  const theme = useTheme();
  const [isHovered, handlers] = useHover();
  const { renderMenu, bind, isDisplaying } = useMenu({
    entries: [{ name: 'Löschen', action: onDelete }],
    component: MenuEntry
  });

  const show = isHovered || isDisplaying;

  return (
    <Wrapper showBackground={show} {...handlers}>
      {children}
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
