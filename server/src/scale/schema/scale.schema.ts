import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId } from 'mongoose';

import { createSchemaOptions, Entity } from '../../utils';
import { Scale } from './Scale';

type ScaleDocument = Scale & Document<ObjectId>;

@Schema(createSchemaOptions())
class ScaleEntity implements Entity<Scale> {
  @Prop({ required: true, index: true })
  name: string;

  @Prop({ required: true })
  creator: string;

  @Prop({ required: true })
  admins: string[];
}

const ScaleSchema = SchemaFactory.createForClass(ScaleEntity);

export type { ScaleDocument };
export { ScaleEntity, ScaleSchema };
