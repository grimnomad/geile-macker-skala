import { StrictMode } from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { createRoot } from 'react-dom/client';

import { App } from './App';
import { AppProviders } from './AppProviders';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <StrictMode>
    <AppProviders>
      <App />
    </AppProviders>
  </StrictMode>
);
