import { useCallback, useState } from 'react';

type UseDimensionsRef<E extends Element = Element> = (element: E) => void;
type UseDimensionsReturn<E extends Element = Element> = [
  UseDimensionsRef<E>,
  DOMRect
];

const defaultRect = new DOMRect();

function useDimensions<E extends Element = Element>(): UseDimensionsReturn<E> {
  const [rect, setRect] = useState(defaultRect);

  const ref = useCallback<UseDimensionsRef<E>>((node) => {
    if (node) {
      const rect = node.getBoundingClientRect();

      setRect(rect);
    }
  }, []);

  return [ref, rect];
}

export type { UseDimensionsRef, UseDimensionsReturn };
export { useDimensions };
