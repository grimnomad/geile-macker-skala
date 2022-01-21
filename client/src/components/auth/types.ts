import { AuthSignInDTO, AuthSignUpDTO } from '@gms/shared';

interface AuthState {
  token: string | null;
  handle: string | null;
}
interface Auth extends AuthState {
  login(signInDTO: AuthSignInDTO, onLogin?: () => void): void;
  signup(signUpDTO: AuthSignUpDTO, onSignup?: () => void): void;
  logout(onLogout?: () => void): void;
}

export type { Auth, AuthState };
