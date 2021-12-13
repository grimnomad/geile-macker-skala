import { Timestamps } from '../../utils';

interface Scale extends Timestamps {
  /** Name of the scale */
  name: string;
  /** Handle of the user, which created the scale */
  creator: string;
  /** List of users, which have elevated permissions */
  admins: string[];
}

export type { Scale };
