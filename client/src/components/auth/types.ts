import { AuthSignInDTO, AuthSignUpDTO } from '@gms/shared';

interface AuthState {
  token: string | null;
  handle: string | null;
}
interface Auth extends AuthState {
  login(signInDTO: AuthSignInDTO): void;
  signup(signUpDTO: AuthSignUpDTO): void;
  logout(): void;
}

export type { Auth, AuthState };
