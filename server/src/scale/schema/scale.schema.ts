import { Prop, SchemaFactory } from '@nestjs/mongoose';

import { CreateDocumentType, Schema } from '../../utils';

@Schema()
class Scale {
  @Prop({ required: true, index: true })
  name: string;

  @Prop({ required: true })
  creator: string;

  @Prop({ required: true })
  admins: string[];
}

type ScaleDocument = CreateDocumentType<Scale>;

const ScaleSchema = SchemaFactory.createForClass(Scale);

export type { ScaleDocument };
export { Scale, ScaleSchema };
