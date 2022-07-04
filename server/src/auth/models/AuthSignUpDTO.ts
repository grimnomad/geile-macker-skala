import { AuthSignInDTO } from './AuthSignInDTO';

interface AuthSignUpDTO extends AuthSignInDTO {
  /** An users first name/forename */
  first_name: string;
  /** An users last name/surname */
  last_name: string;
}

export type { AuthSignUpDTO };
