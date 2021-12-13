import { Timestamps } from './Timestamps';

type Entity<T extends Timestamps> = Omit<T, 'created_at' | 'updated_at'>;

export type { Entity };
