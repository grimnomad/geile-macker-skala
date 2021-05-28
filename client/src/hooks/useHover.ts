import { HTMLAttributes, useMemo } from 'react';

import { useToggle } from './useToggle';

type UseHoverReturn = [
  boolean,
  Pick<HTMLAttributes<unknown>, 'onMouseEnter' | 'onMouseLeave'>
];

function useHover(): UseHoverReturn {
  const [show, toggle] = useToggle();

  const props = useMemo(
    () => ({
      onMouseEnter: () => toggle(),
      onMouseLeave: () => toggle()
    }),
    [toggle]
  );

  return [show, props];
}

export { useHover };
