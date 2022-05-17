import {
  ConsoleLogger,
  dark,
  GlobalStyle,
  LoggerProvider,
  useLocalStorage
} from '@gms/components';
import { ReactElement, ReactNode, useCallback } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import {
  AuthProvider,
  AxiosProvider,
  CheckLoginFunction,
  useAxiosToken
} from './components';
import { SERVER_URL } from './config';
import { parseJwt } from './utils';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
});

interface AuthWrapperProps {
  readonly children: ReactNode;
}

function AuthWrapper(props: AuthWrapperProps): ReactElement {
  const { children } = props;
  const { setToken } = useAxiosToken();
  const { get } = useLocalStorage('token');

  const checkLogin = useCallback<CheckLoginFunction<string>>(() => {
    const promise = new Promise<string | null>((resolve, reject) => {
      const token = get();

      if (token) {
        const parsedToken = parseJwt(token ?? '');

        if (parsedToken) {
          const { handle, exp } = parsedToken;

          const expDate = new Date(exp * 1000);
          const currentDate = new Date();

          if (expDate.getTime() < currentDate.getTime()) {
            reject(null);
          }

          setToken(token);
          resolve(handle);
        }
      } else {
        reject(null);
      }
    });

    return promise;
  }, [get, setToken]);

  return <AuthProvider checkLogin={checkLogin}>{children}</AuthProvider>;
}

interface AppProvidersProps {
  readonly children: ReactNode;
}

function AppProviders(props: AppProvidersProps): ReactElement {
  const { children } = props;

  return (
    <BrowserRouter>
      <AxiosProvider baseURL={SERVER_URL}>
        <QueryClientProvider client={queryClient}>
          <LoggerProvider logger={ConsoleLogger}>
            <ThemeProvider theme={dark}>
              <AuthWrapper>{children}</AuthWrapper>
              <GlobalStyle />
              <ReactQueryDevtools position="bottom-right" />
            </ThemeProvider>
          </LoggerProvider>
        </QueryClientProvider>
      </AxiosProvider>
    </BrowserRouter>
  );
}

export { AppProviders };
