import { createObject, CreateScaleDTO, ScaleDTO, UserDTO } from '@gms/shared';
import { Body, Controller } from '@nestjs/common';

import { Create, GetUser } from '../utils';
import { ScaleService } from './scale.service';
import { ScaleEntity } from './types';
import { CreateScaleSchema } from './validation';

@Controller('scale')
class ScaleController {
  constructor(private readonly scaleService: ScaleService) {}

  @Create({
    schema: CreateScaleSchema,
    message: 'The scale was successfully created.'
  })
  async create(
    @Body() createScaleDTO: CreateScaleDTO,
    @GetUser() user: UserDTO
  ): Promise<Readonly<ScaleDTO>> {
    const scaleEntity = createObject<ScaleEntity>({
      admins: [user.handle],
      creator: user.handle,
      ...createScaleDTO
    });

    const scaleDTO = await this.scaleService.create(scaleEntity);

    return scaleDTO;
  }
}

export { ScaleController };
