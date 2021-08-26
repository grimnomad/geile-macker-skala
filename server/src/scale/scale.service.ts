import { createObject, ScaleDTO, UserDTO } from '@gms/shared';
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

  async getAll(user: UserDTO): Promise<ReadonlyArray<ScaleDTO>> {
    const documents = await this.scaleModel.find({ creator: user.handle });

    const scales = documents.map<ScaleDTO>((document) => ({
      name: document.name,
      creator: document.creator,
      admins: document.admins,
      created_at: document.get('created_at'),
      updated_at: document.get('updated_at')
    }));

    return scales;
  }

  async delete(name: string): Promise<void> {
    await this.scaleModel.deleteOne({ name });
  }
}

export { ScaleService };
