import { AuthSignUpDTO, createObject, IUser } from '@gms/shared';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { User, UserDocument } from './schema';

@Injectable()
class AuthService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<UserDocument>
  ) {}

  async signUp(signUpDTO: AuthSignUpDTO): Promise<void> {
    const { handle, firstName, lastName, password } = signUpDTO;

    const user = createObject<IUser>({
      handle,
      password,
      firstName,
      lastName
    });

    const userDocument = new this.userModel(user);

    await userDocument.save();
  }
}

export { AuthService };
