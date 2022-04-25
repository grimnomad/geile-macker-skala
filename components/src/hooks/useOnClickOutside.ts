import { useCallback, useEffect, useRef } from 'react';

type AnyEvent = MouseEvent | TouchEvent;

/**
 * Inspired by: https://usehooks-typescript.com/react-hook/use-on-click-outside
 * @param ref RefObject
 * @param handler Function which will be executed
 */
function useOnClickOutside<T extends HTMLElement = HTMLElement>(
  handler: (event: AnyEvent) => void
): (node: T) => void {
  const ref = useRef<T>();

  const bind = useCallback((node: T) => {
    if (!node) return;

    ref.current = node;
  }, []);

  useEffect(() => {
    const listener = (event: AnyEvent): void => {
      const element = ref?.current;

      // Do nothing if clicking ref's element or descendent elements
      if (!element || element.contains(event.target as Node)) {
        return;
      }

      handler(event);
    };

    document.addEventListener(`mousedown`, listener);
    document.addEventListener(`touchstart`, listener);

    return () => {
      document.removeEventListener(`mousedown`, listener);
      document.removeEventListener(`touchstart`, listener);
    };

    // Reload if handler changes
  }, [handler]);

  return bind;
}

export { useOnClickOutside };
