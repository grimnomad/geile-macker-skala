import { HTMLAttributes, useMemo } from 'react';

import { useBoolean } from './useBoolean';

type MouseProps = Pick<
  HTMLAttributes<unknown>,
  'onMouseEnter' | 'onMouseLeave'
>;

type UseHoverReturn = [boolean, MouseProps];

function useHover(): UseHoverReturn {
  const [show, { on, off }] = useBoolean();

  const props = useMemo<MouseProps>(
    () => ({
      onMouseEnter: on,
      onMouseLeave: off
    }),
    [on, off]
  );

  return [show, props];
}

export { useHover };
