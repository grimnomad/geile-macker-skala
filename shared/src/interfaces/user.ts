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

interface UserDTO {
  /** Unique identifier for the user */
  handle: string;
  /** An users forename/first name */
  first_name: string;
  /** An users surname/last name */
  last_name: string;
  /** A password */
  password: string;
}

export type { IUser, UserDTO };
