import { ReactElement, ReactNode } from 'react';
import { createPortal } from 'react-dom';

import { Backdrop, DialogContainer } from './Dialog.styles';

interface DialogProps {
  children: ReactNode;
}

function Dialog(props: DialogProps): ReactElement {
  const { children } = props;

  return createPortal(
    <Backdrop>
      <DialogContainer>{children}</DialogContainer>
    </Backdrop>,
    document.body
  );
}

export type { DialogProps };
export { Dialog };
