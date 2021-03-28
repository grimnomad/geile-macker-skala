import { createObject, ScaleDTO } from '@gms/shared';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Scale, ScaleDocument } from './schema';
import { ScaleEntity } from './types';

@Injectable()
class ScaleService {
  constructor(
    @InjectModel(Scale.name) private readonly scaleModel: Model<ScaleDocument>
  ) {}

  async create(createScaleDTO: ScaleEntity): Promise<Readonly<ScaleDTO>> {
    const document = new this.scaleModel(createScaleDTO);
    const saved = await document.save();

    const scaleDTO = createObject<ScaleDTO>({
      name: saved.name,
      created_at: saved.get('created_at'),
      updated_at: saved.get('updated_at'),
      admins: saved.admins,
      creator: saved.creator
    });

    return scaleDTO;
  }
}

export { ScaleService };
