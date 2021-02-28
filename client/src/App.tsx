import { ReactElement, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import { Header, Layout } from './components';
import { routes } from './routes';

function App(): ReactElement {
  return (
    <Layout>
      <Header />
      <Switch>
        <Suspense fallback={'Loading'}>
          {routes.map((route, index) => (
            <Route {...route} key={index} />
          ))}
        </Suspense>
      </Switch>
    </Layout>
  );
}

export { App };
