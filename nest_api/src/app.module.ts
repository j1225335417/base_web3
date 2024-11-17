import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './modules/auth/controller/auth.controller';
import { JwtService } from '@nestjs/jwt';
import { NonceService } from '@/modules/auth/service/nonce.service';
import { jwtConstants } from '@/common/constants/jwt';
import { JwtModule } from '@nestjs/jwt';
import { UserController } from './modules/user/controller/user.controller';
import { JwtAuthGuard } from '@/common/auth/jwt-auth.guard';
import { SkipJwtAuthGuard } from '@/common/auth/skip-jwt-auth.guard';
import { APP_GUARD } from '@nestjs/core';
import { AuthService } from '@/modules/auth/service/auth.service';
import { Reflector } from '@nestjs/core';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserModule } from '@/modules/user/user.module';
import { User } from './modules/user/models/user';
import { UserAddress } from './modules/user/models/user-address';

@Module({
  imports: [
    UserModule,
    SequelizeModule.forRoot({
      dialect: 'mysql', // 选择数据库类型
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadModels: true,
      synchronize: true,
      // models: [User, UserAddress],

      define: {
        underscored: true, // 所有模型表的字段会使用下划线命名
      },
    }),
    JwtModule.register({
      secret: jwtConstants.secret, // 确保这里有一个有效的密钥
      signOptions: { expiresIn: jwtConstants.expiresIn }, // 可选：设置 token 过期时间
    }),
  ],
  controllers: [AppController, AuthController, UserController],
  providers: [
    AuthService,
    SkipJwtAuthGuard, // 用于特定路径跳过 JWT 验证
    JwtAuthGuard,
    Reflector,
    {
      provide: APP_GUARD,
      useClass: SkipJwtAuthGuard, // 将 SkipJwtAuthGuard 设置为全局 Guard
    },

    AppService,
    JwtService,
    NonceService,
  ],
})
export class AppModule {}
