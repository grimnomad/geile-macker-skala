import { ScaleDTO, UserDTO } from '@gms/shared';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Scale } from './schema';
import { ScaleEntity } from './types';

@Injectable()
class ScaleService {
  constructor(
    @InjectModel(Scale.name) private readonly scaleModel: Model<Scale>
  ) {}

  async create(createScaleDTO: ScaleEntity): Promise<ScaleDTO> {
    const document = new this.scaleModel(createScaleDTO);
    const saved = await document.save();

    const scaleDTO = saved.toObject<ScaleDTO>();

    return scaleDTO;
  }

  async getAll(user: UserDTO): Promise<ScaleDTO[]> {
    const documents = await this.scaleModel.find({ creator: user.handle });

    const scales = documents.map((document) => document.toObject<ScaleDTO>());

    return scales;
  }

  async delete(name: string): Promise<void> {
    await this.scaleModel.deleteOne({ name });
  }
}

export { ScaleService };
