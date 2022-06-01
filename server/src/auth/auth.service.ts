import { AuthSignInDTO, AuthSignUpDTO, UserDTO } from '@gms/shared';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

import { User, UsersService } from '../users';
import { JWTPayload } from './types';

@Injectable()
class AuthService {
  constructor(
    private readonly usersService: UsersService,
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

    await this.usersService.create(user);

    const userDTO: UserDTO = {
      first_name,
      handle,
      last_name
    };

    return userDTO;
  }

  async signIn(signInDTO: AuthSignInDTO): Promise<string | null> {
    const { handle, password } = signInDTO;

    const user = await this.usersService.findOne(handle);

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
