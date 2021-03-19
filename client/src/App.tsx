import { ReactElement, Suspense } from 'react';

import { Layout } from './components';
import { useAuth } from './components/auth';
import { Private, Public } from './pages';

function App(): ReactElement {
  const { handle } = useAuth();

  return (
    <Layout>
      <Suspense fallback="Loading">
        {handle ? <Private /> : <Public />}
      </Suspense>
    </Layout>
  );
}

export { App };
