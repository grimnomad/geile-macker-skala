import { ComponentType, ReactElement, useCallback } from 'react';

import { useBoolean } from '../../hooks';
import { Dialog } from './Dialog';

type Toggle = ReturnType<typeof useBoolean>['toggle'];

interface UseDialogInput<P> {
  component: ComponentType<P>;
  props?: (toggle: Toggle) => P;
}

type UseDialogReturn = [() => ReactElement | null, Toggle];

function useDialog<P>(input: UseDialogInput<P>): UseDialogReturn {
  const { component: Component, props = () => ({} as P) } = input;

  const { value: isOpen, toggle: toggleIsOpen } = useBoolean();

  const renderDialog = useCallback(() => {
    return isOpen ? (
      <Dialog>
        <Component {...props(toggleIsOpen)} />
      </Dialog>
    ) : null;
  }, [Component, isOpen, props, toggleIsOpen]);

  return [renderDialog, toggleIsOpen];
}

export { useDialog };
