import {
  AuthSignInDTO,
  AuthSignUpDTO,
  CommonResponseDTO,
  createObject
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
import { MongoExceptionFilter } from 'src/filters';
import { JoiValidationPipe } from 'src/pipes';

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
  async signIn(@Body() signInDTO: AuthSignInDTO): Promise<void> {
    const user = await this.authService.signIn(signInDTO);

    if (!user) {
      const message = createObject<CommonResponseDTO>({
        message: 'Invalid credentials',
        status_code: HttpStatus.UNAUTHORIZED
      });

      throw new UnauthorizedException(message);
    }
  }
}

export { AuthController };
