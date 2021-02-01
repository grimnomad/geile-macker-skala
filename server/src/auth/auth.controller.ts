import { AuthSignUpDTO } from '@gms/shared';
import { Body, Controller, Post } from '@nestjs/common';

import { AuthService } from './auth.service';

@Controller('auth')
class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/signup')
  async signUp(@Body() signUpDTO: AuthSignUpDTO): Promise<void> {
    await this.authService.signUp(signUpDTO);
  }
}

export { AuthController };
