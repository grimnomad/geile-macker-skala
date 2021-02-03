import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AuthModule } from './auth';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/gms', { useCreateIndex: true }),
    AuthModule
  ],
  controllers: [],
  providers: []
})
class AppModule {}

export { AppModule };
