interface IUser {
  /** Unique identifier for the user */
  handle: string;
  /** An users forename/first name */
  firstName: string;
  /** An users surname/last name */
  lastName: string;
  /** A password */
  password: string;
}

export type { IUser };
