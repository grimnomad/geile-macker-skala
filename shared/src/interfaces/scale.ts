interface ScaleDTO {
  /** Name of the scale */
  name: string;
  /** Creation date; formatted as ISO string */
  created_at: string;
  /** Update date; formatted as ISO string */
  updated_at: string;
  /** Handle of the user, which created the scale */
  creator: string;
  /** List of users, which have elevated permissions */
  admins: string[];
}

type CreateScaleDTO = Pick<ScaleDTO, 'name'>;

interface Scale {
  /** Name of the scale */
  name: string;
  /** Creation date; formatted as ISO string */
  createdAt: string;
  /** Update date; formatted as ISO string */
  updatedAt: string;
  /** Handle of the user, which created the scale */
  creator: string;
  /** List of users, which have elevated permissions */
  admins: string[];
}

export type { CreateScaleDTO, Scale, ScaleDTO };
