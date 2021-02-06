interface IAuthCredentials {
  /** Unique identifier for the user */
  handle: string;
  /** An users first name/forename */
  firstName: string;
  /** An users last name/surname */
  lastName: string;
  /** A password */
  password: string;
}

type AuthSignUpDTO = IAuthCredentials;

type AuthSignInDTO = Pick<IAuthCredentials, 'handle' | 'password'>;

export type { AuthSignInDTO, AuthSignUpDTO, IAuthCredentials };
