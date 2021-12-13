import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { MODEL_NAME } from './scale.config';
import { ScaleController } from './scale.controller';
import { ScaleService } from './scale.service';
import { ScaleSchema } from './schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: MODEL_NAME, schema: ScaleSchema }])
  ],
  controllers: [ScaleController],
  providers: [ScaleService]
})
class ScaleModule {}

export { ScaleModule };
