import { useCallback, useState } from 'react';

type UseDimensionsReturn = [(node: Element | null) => void, DOMRect];

function useDimensions(): UseDimensionsReturn {
  const [rect, setRect] = useState<DOMRect>(new DOMRect());

  const ref = useCallback((node: Element | null) => {
    if (node) {
      const rect = node.getBoundingClientRect();

      setRect(rect);
    }
  }, []);

  return [ref, rect];
}

export type { UseDimensionsReturn };
export { useDimensions };
