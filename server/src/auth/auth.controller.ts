import {
  AuthSignInDTO,
  AuthSignUpDTO,
  SignInResponse,
  UserDTO
} from '@gms/shared';
import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UnauthorizedException,
  UseFilters,
  UseInterceptors,
  UsePipes
} from '@nestjs/common';

import { MongoExceptionFilter } from '../filters';
import { ResponseInterceptor } from '../interceptors';
import { JoiValidationPipe } from '../pipes';
import { AuthService } from './auth.service';
import { SignInSchema, SignUpSchema } from './validation';

@Controller('auth')
class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  @UseFilters(
    new MongoExceptionFilter({ '11000': 'This handle is already taken' })
  )
  @UsePipes(new JoiValidationPipe(SignUpSchema))
  @UseInterceptors(
    new ResponseInterceptor<UserDTO>('User successfully created an account.')
  )
  async signUp(@Body() signUpDTO: AuthSignUpDTO): Promise<UserDTO> {
    const userDTO = await this.authService.signUp(signUpDTO);

    return userDTO;
  }

  @Post('signin')
  @HttpCode(HttpStatus.OK)
  @UsePipes(new JoiValidationPipe(SignInSchema))
  @UseInterceptors(
    new ResponseInterceptor<SignInResponse>('User successfully signed in.')
  )
  async signIn(@Body() signInDTO: AuthSignInDTO): Promise<string> {
    const token = await this.authService.signIn(signInDTO);

    if (!token) {
      throw new UnauthorizedException('Invalid credentials');
    }

    return token;
  }
}

export { AuthController };
