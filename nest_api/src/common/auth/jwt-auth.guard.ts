import { Injectable } from '@nestjs/common';
import { CanActivate, ExecutionContext } from '@nestjs/common';
import { AuthService } from '@/modules/auth/service/auth.service';
@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private readonly authService: AuthService) {}
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const jwt = request.headers['authorization'];

    if (!jwt) {
      return false;
    }

    const payload = this.authService.verifyToken(jwt);
    request.user = payload;
    console.log('payload', payload);
    return true;
  }
}
