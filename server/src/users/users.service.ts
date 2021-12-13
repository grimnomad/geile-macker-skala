import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { User, UserDocument, UserEntity } from './schema';
import { MODEL_NAME } from './users.config';

@Injectable()
class UsersService {
  constructor(
    @InjectModel(MODEL_NAME)
    private readonly userModel: Model<UserDocument>
  ) {}

  async create(userEntity: UserEntity): Promise<User> {
    const document = new this.userModel(userEntity);

    const user = await document.save();

    return user;
  }

  async findOne(handle: string): Promise<User> {
    const user = await this.userModel.findOne({ handle }).lean();

    return user;
  }
}

export { UsersService };
