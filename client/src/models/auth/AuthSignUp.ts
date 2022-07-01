import { AuthSignIn } from './AuthSignIn';

interface AuthSignUp extends AuthSignIn {
  /** An users first name/forename */
  firstName: string;
  /** An users last name/surname */
  lastName: string;
}

export type { AuthSignUp };
