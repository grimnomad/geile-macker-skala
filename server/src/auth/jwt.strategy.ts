import { createObject, UserDTO } from '@gms/shared';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PassportStrategy } from '@nestjs/passport';
import { Model } from 'mongoose';
import { ExtractJwt, Strategy } from 'passport-jwt';

import { User, UserDocument } from './schema';
import { JWTPayload } from './types';

@Injectable()
class JWTStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<UserDocument>
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'gms'
    });
  }

  async validate(payload: JWTPayload): Promise<UserDTO | null> {
    const { handle } = payload;
    const user = await this.userModel.findOne({ handle }).lean();

    if (!user) {
      return null;
    }

    const { first_name, last_name } = user;

    const userDTO = createObject<UserDTO>({
      first_name,
      last_name,
      handle
    });

    return userDTO;
  }
}

export { JWTStrategy };
