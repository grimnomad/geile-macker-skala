import { CreateScaleDTO, ScaleDTO, UserDTO } from '@gms/shared';
import { Body, Controller, Param } from '@nestjs/common';

import { Create, Delete, GetUser, Read } from '../utils';
import { ScaleService } from './scale.service';
import { ScaleEntity } from './schema';
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
  ): Promise<ScaleDTO> {
    const scale: ScaleEntity = {
      admins: [user.handle],
      creator: user.handle,
      ...createScaleDTO
    };

    const scaleDTO = await this.scaleService.create(scale);

    return scaleDTO;
  }

  @Read({
    message: 'All scales were successfully retrieved.'
  })
  async getAll(@GetUser() user: UserDTO): Promise<ScaleDTO[]> {
    const scales = await this.scaleService.getAll(user.handle);

    return scales;
  }

  @Read({
    message: 'The scale was succesfully retrieved.',
    path: ':name'
  })
  async getOne(
    @Param('name') name: string,
    @GetUser() user: UserDTO
  ): Promise<ScaleDTO> {
    const scale = await this.scaleService.getOne(name, user);

    return scale;
  }

  @Delete({ message: 'Scale was successfully deleted.', path: ':name' })
  async delete(@Param('name') name: string): Promise<void> {
    await this.scaleService.delete(name);
  }
}

export { ScaleController };
