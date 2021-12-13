import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { MODEL_NAME } from './scale.config';
import { Scale, ScaleDocument, ScaleEntity } from './schema';

@Injectable()
class ScaleService {
  constructor(
    @InjectModel(MODEL_NAME)
    private readonly scaleModel: Model<ScaleDocument>
  ) {}

  async create(scaleEntity: ScaleEntity): Promise<Scale> {
    const document = new this.scaleModel(scaleEntity);
    const scale = await document.save();

    return scale;
  }

  async getAll(creator: string): Promise<Scale[]> {
    const scales = await this.scaleModel.find({ creator }).lean();

    return scales;
  }

  async getOne(name: string, creator: string): Promise<Scale | null> {
    const scale = await this.scaleModel.findOne({ creator, name }).lean();

    return scale;
  }

  async delete(name: string): Promise<void> {
    await this.scaleModel.deleteOne({ name });
  }
}

export { ScaleService };
