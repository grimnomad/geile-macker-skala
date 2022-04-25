import { ComponentType, ReactElement, useCallback } from 'react';

import { useBoolean } from '../hooks';
import { Dialog } from './Dialog';

type Toggle = ReturnType<typeof useBoolean>[1]['toggle'];

interface UseDialogInput<P> {
  readonly component: ComponentType<P>;
  readonly props?: (toggle: Toggle) => P;
}

type UseDialogReturn = [() => ReactElement | null, Toggle];

function useDialog<P>(input: UseDialogInput<P>): UseDialogReturn {
  const { component: Component, props = () => ({} as P) } = input;

  const [isOpen, { toggle }] = useBoolean();

  const renderDialog = useCallback(() => {
    return isOpen ? (
      <Dialog>
        <Component {...props(toggle)} />
      </Dialog>
    ) : null;
  }, [Component, isOpen, props, toggle]);

  return [renderDialog, toggle];
}

export { useDialog };
