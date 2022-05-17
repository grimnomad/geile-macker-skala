// Based on: https://xstate-catalogue.com/machines/authentication
import { assign } from '@xstate/immer';
import { createMachine, ExtractEvent } from 'xstate';

interface AuthenticationMachineContext<T> {
  user: T | null;
}

type AuthenticationMachineEvents<T> =
  | {
      type: 'REPORT_IS_LOGGED_IN';
      user: T;
    }
  | {
      type: 'REPORT_IS_LOGGED_OUT';
    }
  | {
      type: 'LOG_OUT';
    }
  | {
      type: 'LOG_IN';
      user: T;
    };

const authMachine = createMachine<
  AuthenticationMachineContext<unknown>,
  AuthenticationMachineEvents<unknown>
>(
  {
    id: 'authentication',
    initial: 'checkingIfLoggedIn',
    context: {
      user: null
    },
    states: {
      checkingIfLoggedIn: {
        invoke: {
          src: 'checkIfLoggedIn',
          onError: {
            target: 'loggedOut'
          }
        },
        on: {
          REPORT_IS_LOGGED_IN: {
            target: 'loggedIn',
            actions: 'setAuthState'
          },
          REPORT_IS_LOGGED_OUT: 'loggedOut'
        },
        meta: 'pending'
      },
      loggedIn: {
        on: {
          LOG_OUT: {
            target: 'loggedOut'
          }
        },
        meta: 'signedIn'
      },
      loggedOut: {
        entry: 'clearAuthState',
        on: {
          LOG_IN: {
            target: 'loggedIn',
            actions: 'setAuthState'
          }
        },
        meta: 'signedOut'
      }
    }
  },
  {
    actions: {
      setAuthState: assign((context, event) => {
        const { user } = event as ExtractEvent<
          AuthenticationMachineEvents<unknown>,
          'LOG_IN'
        >;

        context.user = user;
      }),
      clearAuthState: assign((context) => {
        context.user = null;
      })
    }
  }
);

export type { AuthenticationMachineContext, AuthenticationMachineEvents };
export { authMachine };
