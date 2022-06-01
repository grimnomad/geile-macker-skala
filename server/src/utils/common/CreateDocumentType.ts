import { Document, ObjectId } from 'mongoose';

import { MetaData } from './MetaData';

type CreateDocumentType<T> = T & { meta_data: MetaData } & Document<ObjectId>;

export type { CreateDocumentType };
