import { ReactElement, Suspense } from 'react';

import { Layout } from './components';
import { useRouting } from './pages';

function App(): ReactElement {
  const element = useRouting();

  return (
    <Layout>
      <Suspense fallback="Loading">{element}</Suspense>
    </Layout>
  );
}

export { App };
