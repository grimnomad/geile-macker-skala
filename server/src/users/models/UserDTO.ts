interface UserDTO {
  /** Unique identifier for the user */
  handle: string;
  /** An users forename/first name */
  first_name: string;
  /** An users surname/last name */
  last_name: string;
}

export type { UserDTO };
