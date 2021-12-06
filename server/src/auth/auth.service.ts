import { AuthSignInDTO, AuthSignUpDTO, UserDTO } from '@gms/shared';
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

  async signUp(signUpDTO: AuthSignUpDTO): Promise<UserDTO> {
    const { handle, first_name, last_name, password } = signUpDTO;

    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(password, salt);

    const user: User = {
      handle,
      password: hash,
      first_name,
      last_name,
      salt
    };

    const userDocument = new this.userModel(user);

    await userDocument.save();

    const userDTO: UserDTO = {
      first_name,
      handle,
      last_name
    };

    return userDTO;
  }

  async signIn(signInDTO: AuthSignInDTO): Promise<string | null> {
    const { handle, password } = signInDTO;

    const user = await this.userModel.findOne({ handle }).lean();

    if (user) {
      const isValid = await bcrypt.compare(password, user.password);

      if (isValid) {
        const payload: JWTPayload = {
          handle: user.handle
        };
        const token = await this.jwtService.signAsync(payload);

        return token;
      }
    }

    return null;
  }
}

export { AuthService };
