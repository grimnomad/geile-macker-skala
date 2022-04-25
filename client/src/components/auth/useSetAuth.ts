import { useLocalStorage } from '@gms/components';
import produce from 'immer';
import { useCallback, useReducer } from 'react';

import { useAxiosToken } from '../../api';
import { parseJwt } from '../../utils';
import { AuthState } from './types';

type Actions =
  | { type: 'authenticate'; handle: string; token: string }
  | { type: 'unauthenticate' };

type Authenticate = (handle: string, token: string) => void;

function init(input: AuthState): AuthState {
  return input;
}

function reducer(state: AuthState, action: Actions): AuthState {
  return produce(state, (draft) => {
    switch (action.type) {
      case 'authenticate':
        draft.handle = action.handle;
        draft.token = action.token;
        break;
      case 'unauthenticate':
        return init({ handle: null, token: null });
    }
  });
}

interface UseSetAuthReturn {
  state: AuthState;
  authenticate: Authenticate;
  unauthenticate: () => void;
}

function useSetAuth(): UseSetAuthReturn {
  const { set, remove, get } = useLocalStorage('token');
  const { setToken, resetToken } = useAxiosToken();

  const token = get();

  const parsedToken = parseJwt(token ?? '');

  const [state, dispatch] = useReducer(
    reducer,
    { handle: parsedToken?.handle ?? null, token },
    init
  );

  const authenticate = useCallback<Authenticate>(
    (handle, token) => {
      set(token);
      dispatch({ type: 'authenticate', handle, token });
      setToken(token);
    },
    [set, setToken]
  );

  const unauthenticate = useCallback(() => {
    remove();
    dispatch({ type: 'unauthenticate' });
    resetToken();
  }, [remove, resetToken]);

  return {
    state,
    authenticate,
    unauthenticate
  };
}

export type { UseSetAuthReturn };
export { useSetAuth };
