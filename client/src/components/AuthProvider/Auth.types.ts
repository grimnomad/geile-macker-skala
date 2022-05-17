type SignInFunction<T> = (user: T, onSignIn?: () => void) => void;
type SignOutFunction = (onSignOut?: () => void) => void;

type AuthStatus = 'pending' | 'signedIn' | 'signedOut';

interface Auth<T> {
  readonly user: T;
  readonly signIn: SignInFunction<T>;
  readonly signOut: SignOutFunction;
  readonly status: AuthStatus;
}

export type { Auth, AuthStatus, SignInFunction, SignOutFunction };
