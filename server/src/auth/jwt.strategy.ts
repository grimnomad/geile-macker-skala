import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

import { JWTConfigService } from '../config';
import { UserDTO, UsersService } from '../users';
import { JWTPayload } from './types';

@Injectable()
class JWTStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly usersService: UsersService,
    private readonly configService: JWTConfigService
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: configService.SECRET
    });
  }

  async validate(payload: JWTPayload): Promise<UserDTO | null> {
    const { handle } = payload;
    const user = await this.usersService.findOne(handle);

    if (!user) {
      return null;
    }

    const { first_name, last_name } = user;

    const userDTO: UserDTO = {
      first_name,
      last_name,
      handle
    };

    return userDTO;
  }
}

export { JWTStrategy };
