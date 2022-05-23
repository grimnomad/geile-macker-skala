import { useTitle } from '@gms/components';
import { ReactElement } from 'react';

import { TitleFactory } from '../../../utils';

function Home(): ReactElement {
  useTitle(TitleFactory.TITLE);

  return <div>Home</div>;
}

export { Home };
