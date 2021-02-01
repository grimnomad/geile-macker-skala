interface IUser {
  /** Unique identifier for the user */
  handle: string;
  /** An users forename/first name */
  forename: string;
  /** An users surname/last name */
  surname: string;
  /** A password */
  password: string;
}

export type { IUser };
