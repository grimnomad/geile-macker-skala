import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { MODEL_NAME } from './scale.config';
import { Scale, ScaleDocument } from './schema';

@Injectable()
class ScaleService {
  constructor(
    @InjectModel(MODEL_NAME)
    private readonly scaleModel: Model<ScaleDocument>
  ) {}

  async create(scale: Scale): Promise<Scale> {
    const newScale = new this.scaleModel(scale);
    const document = await newScale.save();

    return document.toObject();
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
