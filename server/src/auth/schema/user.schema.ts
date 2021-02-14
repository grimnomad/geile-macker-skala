import { UserDTO } from '@gms/shared';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId } from 'mongoose';

@Schema({
  versionKey: false,
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
})
class User implements UserDTO {
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

type UserDocument = User & Document<ObjectId>;

export type { UserDocument };
export { User, UserSchema };
