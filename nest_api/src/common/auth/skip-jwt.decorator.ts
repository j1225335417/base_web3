// src/common/auth/skip-jwt.decorator.ts
import { SetMetadata } from '@nestjs/common';

// 创建一个自定义装饰器，用来标记需要跳过 JWT 验证的路由
export const SkipJwtAuth = () => SetMetadata('skipJwt', true);
