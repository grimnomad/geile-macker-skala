import { AuthSignInDTO, AuthSignUpDTO } from '@gms/shared';

interface AuthState {
  token: string | null;
  handle: string | null;
}

type LoginFunction = (signInDTO: AuthSignInDTO, onLogin?: () => void) => void;
type SignupFunction = (signUpDTO: AuthSignUpDTO, onSignup?: () => void) => void;
type LogoutFunction = (onLogout?: () => void) => void;

interface Auth extends AuthState {
  login: LoginFunction;
  signup: SignupFunction;
  logout: LogoutFunction;
}

export type { Auth, AuthState, LoginFunction, LogoutFunction, SignupFunction };
