import { Body, Controller, Post, UnauthorizedException } from '@nestjs/common';
import { Credentials } from './credentials';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() user: Credentials) {
    const token = await this.authService.login(user);

    if (token && token.access_token && token.access_token.length > 0) {
      return token.access_token;
    } else {
      throw new UnauthorizedException();
    }
  }
}
