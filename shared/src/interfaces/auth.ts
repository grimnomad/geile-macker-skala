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

interface AuthCredentialsDTO {
  handle: string;
  first_name: string;
  last_name: string;
  password: string;
}

type AuthSignUpDTO = AuthCredentialsDTO;

type AuthSignInDTO = Pick<AuthCredentialsDTO, 'handle' | 'password'>;

export type {
  AuthCredentialsDTO,
  AuthSignInDTO,
  AuthSignUpDTO,
  IAuthCredentials
};
