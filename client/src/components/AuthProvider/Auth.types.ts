interface AuthState {
  token: string | null;
  handle: string | null;
}

interface LoginInput {
  readonly token: string;
  readonly handle: string;
  readonly onLogin?: () => void;
}

type LoginFunction = (input: LoginInput) => void;
type LogoutFunction = (onLogout?: () => void) => void;

interface Auth extends AuthState {
  login: LoginFunction;
  logout: LogoutFunction;
}

export type { Auth, AuthState, LoginFunction, LogoutFunction };
