import { ScaleDTO } from '@gms/shared';

type ScaleEntity = Omit<ScaleDTO, 'created_at' | 'updated_at'>;

export type { ScaleEntity };
