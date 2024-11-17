// src/common/auth/skip-jwt-auth.guard.ts
import { Injectable } from '@nestjs/common';
import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtAuthGuard } from './jwt-auth.guard'; // 引入你的 JWT 验证 Guard

@Injectable()
export class SkipJwtAuthGuard implements CanActivate {
  constructor(
    private jwtAuthGuard: JwtAuthGuard, // 引入 JWT 验证 Guard
    private reflector: Reflector, // 用于获取元数据
  ) {}

  canActivate(context: ExecutionContext): boolean {
    const handler = context.getHandler();

    // 检查当前路由处理程序是否有 @SkipJwtAuth 装饰器
    const skipJwt = this.reflector.get<boolean>('skipJwt', handler);

    if (skipJwt) {
      return true; // 如果有 @SkipJwtAuth 装饰器，跳过 JWT 验证
    }

    // 否则，调用 JwtAuthGuard 验证
    return this.jwtAuthGuard.canActivate(context);
  }
}
