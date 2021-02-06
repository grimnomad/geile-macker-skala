import { IUser } from '@gms/shared';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId } from 'mongoose';

@Schema({ versionKey: false })
class User implements IUser {
  @Prop({ required: true, unique: true, index: true })
  handle: string;

  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ required: true })
  password: string;
}

const UserSchema = SchemaFactory.createForClass(User);

type UserDocument = IUser & Document<ObjectId>;

export type { UserDocument };
export { User, UserSchema };
