import { Injectable } from '@nestjs/common';
import { Credentials } from './credentials';
import { JwtService } from '@nestjs/jwt';
import { Payload } from './payload';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async login(user: Credentials): Promise<{ access_token: string }> {
    if (user.username === 'admin' && user.password === 'topSecret123!') {
      const payload: Payload = {
        username: user.username,
        sub: 42,
      };

      return {
        access_token: this.jwtService.sign(payload),
      };
    }
  }
}
