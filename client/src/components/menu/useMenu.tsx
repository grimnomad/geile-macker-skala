import {
  ElementType,
  ForwardedRef,
  HTMLAttributes,
  ReactElement,
  useCallback,
  useMemo
} from 'react';

import { useBoolean, useDimensions } from '../../hooks';
import { Menu } from './Menu';

interface MenuEntry {
  readonly name: string;
  action(...args: any[]): void;
}

interface UseMenuInput {
  readonly entries: MenuEntry[];
  readonly component?: ElementType;
}

interface Bind extends Pick<HTMLAttributes<unknown>, 'onClick'> {
  ref: ForwardedRef<Element>;
}

interface UseMenuReturn {
  renderMenu(): ReactElement | null;
  readonly bind: Bind;
  readonly isDisplaying: boolean;
  toggleMenu(): void;
  showMenu(): void;
  hideMenu(): void;
}

function useMenu(input: UseMenuInput): UseMenuReturn {
  const { entries, component: Component = 'div' } = input;

  const { value: isDisplaying, toggle, setFalse, setTrue } = useBoolean();

  const [ref, rect] = useDimensions();

  const renderMenu = useCallback(() => {
    return isDisplaying ? (
      <Menu x={rect.top + rect.height} y={rect.left}>
        {entries.map((entry, index) => {
          function onClick(): void {
            entry.action();
            toggle();
          }

          return (
            <Component key={index} onClick={onClick}>
              {entry.name}
            </Component>
          );
        })}
      </Menu>
    ) : null;
  }, [
    Component,
    entries,
    rect.height,
    rect.left,
    rect.top,
    isDisplaying,
    toggle
  ]);

  const bind = useMemo<Bind>(() => ({ ref, onClick: () => toggle() }), [
    ref,
    toggle
  ]);

  return {
    renderMenu,
    bind,
    isDisplaying,
    toggleMenu: toggle,
    hideMenu: setFalse,
    showMenu: setTrue
  };
}

export type { MenuEntry, UseMenuInput, UseMenuReturn };
export { useMenu };
