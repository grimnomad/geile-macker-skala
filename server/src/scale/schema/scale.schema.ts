import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId } from 'mongoose';

import { ScaleEntity } from '../types';

@Schema({
  versionKey: false,
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
})
class Scale implements ScaleEntity {
  @Prop({ required: true, index: true })
  name: string;

  @Prop({ required: true })
  creator: string;

  @Prop({ required: true })
  admins: string[];
}

const ScaleSchema = SchemaFactory.createForClass(Scale);

type ScaleDocument = Scale & Document<ObjectId>;

export type { ScaleDocument };
export { Scale, ScaleSchema };
