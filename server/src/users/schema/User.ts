interface User {
  /** Unique identifier for the user */
  handle: string;
  /** An users forename/first name */
  first_name: string;
  /** An users surname/last name */
  last_name: string;
  /** The stored password */
  password: string;
  /** The stored salt */
  salt: string;
}

export { User };
