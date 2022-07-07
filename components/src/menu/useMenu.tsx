import {
  ElementType,
  HTMLAttributes,
  ReactElement,
  Ref,
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

interface Bind<E extends Element = Element>
  extends Pick<HTMLAttributes<E>, 'onClick'> {
  readonly ref: Ref<E>;
}

interface UseMenuReturn<E extends Element = Element> {
  readonly renderMenu: () => ReactElement | null;
  readonly bind: Bind<E>;
  readonly isDisplaying: boolean;
  readonly toggleMenu: () => void;
  readonly showMenu: () => void;
  readonly hideMenu: () => void;
}

function useMenu<E extends Element = Element>(
  input: UseMenuInput
): UseMenuReturn<E> {
  const { entries, component: Component = 'div' } = input;

  const [isDisplaying, { toggle, on, off }] = useBoolean();

  const [ref, rect] = useDimensions<E>();

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

  const bind = useMemo<Bind<E>>(
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
