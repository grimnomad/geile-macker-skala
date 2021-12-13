import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

import { createSchemaOptions } from '../../utils';
import { User } from './User';

@Schema(createSchemaOptions())
class UserEntity implements User {
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

const UserSchema = SchemaFactory.createForClass(UserEntity);

type UserDocument = UserEntity & Document<UserEntity>;

export type { UserDocument };
export { UserEntity, UserSchema };
