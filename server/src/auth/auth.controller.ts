import {
  AuthSignInDTO,
  AuthSignUpDTO,
  CommonResponseDTO,
  createObject,
  SignInResponse
} from '@gms/shared';
import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UnauthorizedException,
  UseFilters,
  UsePipes
} from '@nestjs/common';

import { MongoExceptionFilter } from '../filters';
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
  async signUp(@Body() signUpDTO: AuthSignUpDTO): Promise<void> {
    await this.authService.signUp(signUpDTO);
  }

  @Post('signin')
  @HttpCode(HttpStatus.OK)
  @UsePipes(new JoiValidationPipe(SignInSchema))
  async signIn(@Body() signInDTO: AuthSignInDTO): Promise<SignInResponse> {
    const token = await this.authService.signIn(signInDTO);

    if (!token) {
      const message = createObject<CommonResponseDTO>({
        message: 'Invalid credentials',
        status_code: HttpStatus.UNAUTHORIZED
      });

      throw new UnauthorizedException(message);
    }

    const message = createObject<SignInResponse>({
      message: 'User successfully signed in.',
      status_code: HttpStatus.OK,
      token
    });

    return message;
  }
}

export { AuthController };
