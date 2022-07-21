import { useLayoutEffect, useMemo, useState } from 'react';

type UseMeasureRef<E extends Element = Element> = (element: E) => void;
type UseMeasureReturn<E extends Element = Element> = [
  UseMeasureRef<E>,
  DOMRect
];

const defaultRect = new DOMRect();

function useMeasure<E extends Element = Element>(): UseMeasureReturn<E> {
  const [rect, setRect] = useState(defaultRect);
  const [element, ref] = useState<E | null>(null);

  const observer = useMemo(() => {
    const observer = new ResizeObserver((entries) => {
      const [entry] = entries;
      if (entry) {
        setRect(entry.contentRect);
      }
    });

    return observer;
  }, []);

  useLayoutEffect(() => {
    if (!element) return;

    observer.observe(element);

    () => {
      observer.disconnect();
    };
  }, [element, observer]);

  return [ref, rect];
}

export type { UseMeasureRef, UseMeasureReturn };
export { useMeasure };
