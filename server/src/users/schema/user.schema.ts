import { Prop, SchemaFactory } from '@nestjs/mongoose';

import { CreateDocumentType, Schema } from '../../utils';

@Schema()
class User {
  @Prop({ required: true, unique: true, index: true })
  handle: string;

  @Prop({ required: true })
  first_name: string;

  @Prop({ required: true })
  last_name: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  salt: string;
}

const UserSchema = SchemaFactory.createForClass(User);

type UserDocument = CreateDocumentType<User>;

export type { UserDocument };
export { User, UserSchema };
