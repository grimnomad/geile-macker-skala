interface CommonAuthCredentials {
  /** Unique identifier for the user */
  handle: string;
  /** A password */
  password: string;
}

interface AuthSignUpDTO extends CommonAuthCredentials {
  /** An users first name/forename */
  first_name: string;
  /** An users last name/surname */
  last_name: string;
}

type AuthSignInDTO = CommonAuthCredentials;

export type { AuthSignInDTO, AuthSignUpDTO };
