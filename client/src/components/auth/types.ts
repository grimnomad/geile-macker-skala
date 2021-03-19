import { AuthSignInDTO, AuthSignUpDTO } from '@gms/shared';

interface Auth {
  handle: string | null;
  login(signInDTO: AuthSignInDTO): void;
  signup(signUpDTO: AuthSignUpDTO): void;
  logout(): void;
}

export type { Auth };
