import { AuthSignInDTO, AuthSignUpDTO, createObject } from '@gms/shared';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';

import { User, UserDocument } from './schema';

@Injectable()
class AuthService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<UserDocument>
  ) {}

  async signUp(signUpDTO: AuthSignUpDTO): Promise<void> {
    const { handle, first_name, last_name, password } = signUpDTO;

    const salt = await bcrypt.genSalt();

    const hash = await this.hashPassword(password, salt);

    const user = createObject<User>({
      handle,
      password: hash,
      first_name,
      last_name,
      salt
    });

    const userDocument = new this.userModel(user);

    await userDocument.save();
  }

  async signIn(signInDTO: AuthSignInDTO): Promise<User | null> {
    const { handle, password } = signInDTO;

    const user = await this.userModel.findOne({ handle }).lean();

    if (user) {
      const isValid = await this.validatePassword(password, user);

      if (isValid) {
        return user;
      }
    }

    return null;
  }

  private async hashPassword(password: string, hash: string): Promise<string> {
    const hashedPassword = await bcrypt.hash(password, hash);

    return hashedPassword;
  }

  private async validatePassword(
    password: string,
    user: User
  ): Promise<boolean> {
    const hash = await this.hashPassword(password, user.salt);

    const isValid = user.password === hash;

    return isValid;
  }
}

export { AuthService };
