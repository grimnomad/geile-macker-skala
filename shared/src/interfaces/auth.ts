interface IAuthCredentials {
  /** Unique identifier for the user */
  handle: string;
  /** An users first name/forename */
  forename: string;
  /** An users last name/surname */
  surname: string;
  /** A password */
  password: string;
}

type AuthSignUpDTO = IAuthCredentials;

type AuthSignInDTO = Pick<IAuthCredentials, 'handle' | 'password'>;

export type { AuthSignInDTO, AuthSignUpDTO, IAuthCredentials };
