import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { User, UserDocument } from './schema';
import { MODEL_NAME } from './users.config';

@Injectable()
class UsersService {
  constructor(
    @InjectModel(MODEL_NAME)
    private readonly userModel: Model<UserDocument>
  ) {}

  async create(user: User): Promise<User> {
    const newUser = new this.userModel(user);

    const document = await newUser.save();

    return document.toObject();
  }

  async findOne(handle: string): Promise<User> {
    const user = await this.userModel.findOne({ handle }).lean();

    return user;
  }
}

export { UsersService };
