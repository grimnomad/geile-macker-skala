import { ReactElement } from 'react';

import { Header, Layout } from './components';

function App(): ReactElement {
  return (
    <Layout>
      <Header />
      <div>Content</div>
    </Layout>
  );
}

export { App };
