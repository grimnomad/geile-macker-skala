import { AuthSignInDTO, AuthSignUpDTO, createObject } from '@gms/shared';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';

import { User, UserDocument } from './schema';
import { JWTPayload } from './types';

@Injectable()
class AuthService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<UserDocument>,
    private readonly jwtService: JwtService
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

  async signIn(signInDTO: AuthSignInDTO): Promise<string | null> {
    const { handle, password } = signInDTO;

    const user = await this.userModel.findOne({ handle }).lean();

    if (user) {
      const isValid = await this.validatePassword(password, user);

      if (isValid) {
        const payload = createObject<JWTPayload>({
          handle: user.handle
        });
        const token = await this.jwtService.signAsync(payload);

        return token;
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
