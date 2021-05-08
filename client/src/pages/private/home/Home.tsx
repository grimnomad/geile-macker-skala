import { Fragment, ReactElement } from 'react';

import { useReadScales } from '../../../api';
import { SideBar, useDialog } from '../../../components';
import { CreateScaleForm } from './CreateScaleForm';

function Home(): ReactElement {
  const { data: scales, status } = useReadScales();

  const [renderDialog, toggleDialog] = useDialog({
    component: CreateScaleForm,
    props: (toggle) => ({
      onClose: () => toggle(),
      onOK: () => toggle()
    })
  });

  if (status === 'loading') {
    return <Fragment>Loading</Fragment>;
  }

  return (
    <Fragment>
      <SideBar action={{ label: 'Skala erstellen', onClick: toggleDialog }}>
        {scales?.map((scale, index) => (
          <SideBar.Entry key={index} name={scale.name} />
        ))}
      </SideBar>
      {renderDialog()}
    </Fragment>
  );
}

export { Home };
