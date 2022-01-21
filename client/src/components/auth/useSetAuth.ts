import produce from 'immer';
import { useCallback, useReducer } from 'react';

import { useLocalStorage } from '../../hooks';
import { parseJwt } from '../../utils';
import { AuthState } from './types';

type Actions =
  | { type: 'authenticate'; handle: string; token: string }
  | { type: 'unauthenticate' };

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
  authenticate: (handle: string, token: string) => void;
  unauthenticate: () => void;
}

function useSetAuth(): UseSetAuthReturn {
  const { set, remove, get } = useLocalStorage('token');

  const token = get();

  const parsedToken = parseJwt(token ?? '');

  const [state, dispatch] = useReducer(
    reducer,
    { handle: parsedToken?.handle ?? null, token },
    init
  );

  const authenticate = useCallback(
    (handle: string, token: string) => {
      set(token);
      dispatch({ type: 'authenticate', handle, token });
    },
    [set]
  );

  const unauthenticate = useCallback(() => {
    remove();
    dispatch({ type: 'unauthenticate' });
  }, [remove]);

  return {
    state,
    authenticate,
    unauthenticate
  };
}

export type { UseSetAuthReturn };
export { useSetAuth };
