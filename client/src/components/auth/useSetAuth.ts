import produce from 'immer';
import { useCallback, useReducer } from 'react';

import { AuthState } from './types';

type Actions =
  | { type: 'authorize'; handle: string; token: string }
  | { type: 'unauthorize' };

function init(input: AuthState): AuthState {
  return input;
}

function reducer(state: AuthState, action: Actions): AuthState {
  return produce(state, (draft) => {
    switch (action.type) {
      case 'authorize':
        draft.handle = action.handle;
        draft.token = action.token;
        break;
      case 'unauthorize':
        return init({ handle: null, token: null });
    }
  });
}

interface UseSetAuthReturn {
  state: AuthState;
  authorize: (handle: string, token: string) => void;
  unauthorize: () => void;
}

function useSetAuth(input: AuthState): UseSetAuthReturn {
  const [state, dispatch] = useReducer(reducer, input, init);

  const authorize = useCallback(
    (handle: string, token: string) =>
      dispatch({ type: 'authorize', handle, token }),
    []
  );

  const unauthorize = useCallback(() => dispatch({ type: 'unauthorize' }), []);

  return {
    state,
    authorize,
    unauthorize
  };
}

export type { UseSetAuthReturn };
export { useSetAuth };
