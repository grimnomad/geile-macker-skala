import { ScaleDTO, UserDTO } from '@gms/shared';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { ScaleEntity } from './ScaleEntity';
import { Scale, ScaleDocument } from './schema';

@Injectable()
class ScaleService {
  constructor(
    @InjectModel(Scale.name) private readonly scaleModel: Model<ScaleDocument>
  ) {}

  async create(scaleEntity: ScaleEntity): Promise<ScaleDTO> {
    const document = new this.scaleModel(scaleEntity);
    const saved = await document.save();

    const scaleDTO = saved.toObject<ScaleDTO>();

    return scaleDTO;
  }

  async getAll(user: UserDTO): Promise<ScaleDTO[]> {
    const documents = await this.scaleModel.find({ creator: user.handle });

    const scales = documents.map((document) => document.toObject<ScaleDTO>());

    return scales;
  }

  async getOne(name: string, user: UserDTO): Promise<ScaleDTO> {
    const document = await this.scaleModel.findOne({
      creator: user.handle,
      name
    });

    const scale = document.toObject<ScaleDTO>();

    return scale;
  }

  async delete(name: string): Promise<void> {
    await this.scaleModel.deleteOne({ name });
  }
}

export { ScaleService };
