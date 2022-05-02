import {
  ElementType,
  ForwardedRef,
  HTMLAttributes,
  ReactElement,
  useCallback,
  useMemo
} from 'react';

import { useBoolean, useDimensions, useOnClickOutside } from '../hooks';
import { Menu } from './Menu';

interface MenuEntry {
  readonly name: string;
  readonly action: () => void;
}

interface UseMenuInput {
  readonly entries: MenuEntry[];
  readonly component?: ElementType;
}

interface Bind extends Pick<HTMLAttributes<unknown>, 'onClick'> {
  ref: ForwardedRef<Element>;
}

interface UseMenuReturn {
  readonly renderMenu: () => ReactElement | null;
  readonly bind: Bind;
  readonly isDisplaying: boolean;
  readonly toggleMenu: () => void;
  readonly showMenu: () => void;
  readonly hideMenu: () => void;
}

function useMenu(input: UseMenuInput): UseMenuReturn {
  const { entries, component: Component = 'div' } = input;

  const [isDisplaying, { toggle, on, off }] = useBoolean();

  const [ref, rect] = useDimensions();

  const menuRef = useOnClickOutside<HTMLDivElement>(off);

  const renderMenu = useCallback(() => {
    const { top, height, left } = rect;

    return isDisplaying ? (
      <Menu ref={menuRef} x={top + height} y={left}>
        {entries.map((entry, index) => {
          const { action, name } = entry;

          function onClick(): void {
            action();
            toggle();
          }

          return (
            <Component key={index} onClick={onClick}>
              {name}
            </Component>
          );
        })}
      </Menu>
    ) : null;
  }, [rect, isDisplaying, menuRef, entries, Component, toggle]);

  const bind = useMemo<Bind>(
    () => ({ ref, onClick: () => toggle() }),
    [ref, toggle]
  );

  return {
    renderMenu,
    bind,
    isDisplaying,
    toggleMenu: toggle,
    hideMenu: off,
    showMenu: on
  };
}

export type { MenuEntry, UseMenuInput, UseMenuReturn };
export { useMenu };
