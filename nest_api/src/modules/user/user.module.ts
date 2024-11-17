// src/modules/user-addresses/user-addresses.module.ts
import { Module } from '@nestjs/common';
import { UserController } from './controller/user.controller';
import { UserAddressesService } from './service/user-addresses.service';
import { UserService } from './service/user.service';
import { UserAddress } from './models/user-address';
import { User } from './models/user';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([UserAddress, User])],
  controllers: [UserController], // 注册 Controller
  providers: [UserAddressesService, UserService],
  exports: [UserService],
})
export class UserModule {}
