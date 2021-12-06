import { ScaleDTO } from '@gms/shared';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

import { createSchemaOptions } from '../../utils';
import { ScaleEntity } from '../ScaleEntity';

type ScaleDocument = ScaleEntity & Document<ScaleEntity>;

@Schema(
  createSchemaOptions({
    toObject: {
      transform: (document: ScaleDocument): ScaleDTO => ({
        admins: document.admins,
        created_at: document.get('created_at'),
        creator: document.creator,
        name: document.name,
        updated_at: document.get('updated_at')
      })
    }
  })
)
class Scale implements ScaleEntity {
  @Prop({ required: true, index: true })
  name: string;

  @Prop({ required: true })
  creator: string;

  @Prop({ required: true })
  admins: string[];
}

const ScaleSchema = SchemaFactory.createForClass(Scale);

export type { ScaleDocument };
export { Scale, ScaleSchema };
