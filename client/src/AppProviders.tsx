import { ReactElement, ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'styled-components';

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
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        {children}
        <GlobalStyle />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export { AppProviders };
