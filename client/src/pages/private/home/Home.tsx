import { Fragment, ReactElement } from 'react';

import { useDeleteScale, useReadScales } from '../../../api';
import { SideBar, useDialog } from '../../../components';
import { CreateScaleForm } from './CreateScaleForm';

function Home(): ReactElement {
  const { data: scales, isLoading } = useReadScales();
  const { mutate: remove } = useDeleteScale();

  const [renderDialog, toggleDialog] = useDialog({
    component: CreateScaleForm,
    props: (toggle) => ({
      onClose: () => toggle(),
      onOK: () => toggle()
    })
  });

  if (isLoading) {
    return <Fragment>Loading</Fragment>;
  }

  return (
    <Fragment>
      <SideBar action={{ label: 'Skala erstellen', onClick: toggleDialog }}>
        {scales?.map((scale, index) => (
          <SideBar.Entry
            key={index}
            name={scale.name}
            onDelete={() => remove(scale.name)}
          />
        ))}
      </SideBar>
      {renderDialog()}
    </Fragment>
  );
}

export { Home };
