import { ComponentType, ReactElement, useCallback } from 'react';

import { useToggle } from '../../hooks';
import { Dialog } from './Dialog';

type Toggle = ReturnType<typeof useToggle>[1];

interface UseDialogInput<P> {
  component: ComponentType<P>;
  props?: (toggle: Toggle) => P;
}

type UseDialogReturn = [() => ReactElement | null, Toggle];

function useDialog<P>(input: UseDialogInput<P>): UseDialogReturn {
  const { component: Component, props = () => ({} as P) } = input;

  const [isOpen, toggleIsOpen] = useToggle();

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
