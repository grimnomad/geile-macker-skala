import { Fragment, ReactElement } from 'react';

import { SideBar, useDialog } from '../../../components';
import { CreateScaleForm } from './CreateScaleForm';

function Home(): ReactElement {
  const [renderDialog, toggleDialog] = useDialog({
    component: CreateScaleForm,
    props: (toggle) => ({
      onClose: () => toggle(),
      onOK: () => toggle()
    })
  });

  return (
    <Fragment>
      <SideBar action={{ label: 'Skala erstellen', onClick: toggleDialog }}>
        <SideBar.Entry name="Test" />
        <SideBar.Entry name="Test2" />
      </SideBar>
      {renderDialog()}
    </Fragment>
  );
}

export { Home };
