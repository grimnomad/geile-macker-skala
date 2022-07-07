import { HStack, useDialog, useTitle } from '@gms/components';
import { Fragment, ReactElement } from 'react';
import { Outlet } from 'react-router-dom';

import { useDeleteScale, useReadScales } from '../../../api';
import { SideBar } from '../../../components';
import { TitleFactory } from '../../../utils';
import { CreateScaleForm } from './CreateScaleForm';
import { Name } from './Dashboard.styles';

function Dashboard(): ReactElement {
  useTitle(TitleFactory.createTitle('Dashboard'));

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
    <HStack>
      <SideBar action={{ label: 'Skala erstellen', onClick: toggleDialog }}>
        {scales?.map((scale, index) => (
          <SideBar.Entry key={index} onDelete={() => remove(scale.name)}>
            <Name to={scale.name}>{scale.name}</Name>
          </SideBar.Entry>
        ))}
      </SideBar>
      <Outlet />
      {renderDialog()}
    </HStack>
  );
}

export { Dashboard };
