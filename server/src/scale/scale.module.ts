import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ScaleController } from './scale.controller';
import { ScaleService } from './scale.service';
import { Scale, ScaleSchema } from './schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Scale.name, schema: ScaleSchema }])
  ],
  controllers: [ScaleController],
  providers: [ScaleService]
})
class ScaleModule {}

export { ScaleModule };
