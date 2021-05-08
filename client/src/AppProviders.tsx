import { ReactElement, ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { APIProvider } from './api';
import { AuthProvider } from './components';
import { SERVER_URL } from './config';
import { GlobalStyle, theme } from './theme';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
});

interface AppProvidersProps {
  readonly children: ReactNode;
}

function AppProviders(props: AppProvidersProps): ReactElement {
  const { children } = props;

  return (
    <BrowserRouter>
      <APIProvider url={SERVER_URL}>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <ThemeProvider theme={theme}>
              {children}
              <GlobalStyle />
            </ThemeProvider>
          </AuthProvider>
        </QueryClientProvider>
      </APIProvider>
    </BrowserRouter>
  );
}

export { AppProviders };
