import { CreateScaleDTO, ScaleDTO, UserDTO } from '@gms/shared';
import { Body, Controller, Param } from '@nestjs/common';

import { Create, Delete, GetUser, Read } from '../utils';
import { ScaleService } from './scale.service';
import { ScaleEntity } from './types';
import { CreateScaleSchema } from './validation';

@Controller('scales')
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
    const scaleEntity: ScaleEntity = {
      admins: [user.handle],
      creator: user.handle,
      ...createScaleDTO
    };

    const scaleDTO = await this.scaleService.create(scaleEntity);

    return scaleDTO;
  }

  @Read({
    message: 'All scales were successfully retrieved.'
  })
  async getAll(@GetUser() user: UserDTO): Promise<ReadonlyArray<ScaleDTO>> {
    const scales = await this.scaleService.getAll(user);

    return scales;
  }

  @Delete({ message: 'Scale was successfully deleted.', path: ':name' })
  async delete(@Param('name') name: string): Promise<void> {
    await this.scaleService.delete(name);
  }
}

export { ScaleController };
