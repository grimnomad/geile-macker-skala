import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UserSchema } from './schema';
import { MODEL_NAME } from './users.config';
import { UsersService } from './users.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: MODEL_NAME, schema: UserSchema }])
  ],
  providers: [UsersService],
  exports: [UsersService]
})
class UsersModule {}

export { UsersModule };
