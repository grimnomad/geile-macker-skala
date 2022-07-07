import { ReactElement } from 'react';
import { useParams } from 'react-router-dom';

import { useReadScale } from '../../../api';

function Scale(): ReactElement {
  const { scaleID } = useParams();
  const { data: scale, isLoading } = useReadScale(scaleID ?? '');

  if (isLoading) {
    return <div>Loading</div>;
  }

  return <div>{scale?.name}</div>;
}

export { Scale };
