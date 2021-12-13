import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId } from 'mongoose';

import { createSchemaOptions, Entity } from '../../utils';
import { User } from './User';

@Schema(createSchemaOptions())
class UserEntity implements Entity<User> {
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

type UserDocument = User & Document<ObjectId>;

export type { UserDocument };
export { UserEntity, UserSchema };
