import { ReactElement, ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { AxiosProvider } from './api';
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
      <AxiosProvider baseURL={SERVER_URL}>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <ThemeProvider theme={theme}>
              {children}
              <GlobalStyle />
              <ReactQueryDevtools position="bottom-right" />
            </ThemeProvider>
          </AuthProvider>
        </QueryClientProvider>
      </AxiosProvider>
    </BrowserRouter>
  );
}

export { AppProviders };
