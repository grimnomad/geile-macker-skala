import { HTMLAttributes, useMemo } from 'react';

import { useBoolean } from './useBoolean';

type UseHoverReturn = [
  boolean,
  Pick<HTMLAttributes<unknown>, 'onMouseEnter' | 'onMouseLeave'>
];

function useHover(): UseHoverReturn {
  const { value: show, setTrue, setFalse } = useBoolean();

  const props = useMemo(
    () => ({
      onMouseEnter: () => setTrue(),
      onMouseLeave: () => setFalse()
    }),
    [setFalse, setTrue]
  );

  return [show, props];
}

export { useHover };
