import { AuthSignUpDTO } from '@gms/shared';
import { Body, Controller, Post, UsePipes } from '@nestjs/common';
import { JoiValidationPipe } from 'src/pipes';

import { AuthService } from './auth.service';
import { SignUpSchema } from './validation';

@Controller('auth')
class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/signup')
  @UsePipes(new JoiValidationPipe(SignUpSchema))
  async signUp(@Body() signUpDTO: AuthSignUpDTO): Promise<void> {
    await this.authService.signUp(signUpDTO);
  }
}

export { AuthController };
