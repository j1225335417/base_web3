// src/modules/user/user.controller.ts

import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
  Query,
} from '@nestjs/common';
import { UserService } from '../service/user.service';
import { User } from '../models/user'; // 需要根据实际路径调整
import { CreateUserDto } from '../dto/create-user.dto';
import { SkipJwtAuth } from '@/common/auth/skip-jwt.decorator';
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // 创建用户
  // @Post()
  // async create(@Body() createUserDto: CreateUserDto): Promise<User> {
  //   return this.userService.createUser(createUserDto);
  // }

  // 获取所有用户
  @Get()
  async getAll(
    @Query('page') page = 1,
    @Query('pageSize') pageSize = 10,
  ): Promise<User[]> {
    return this.userService.getAllUsers(Number(page), Number(pageSize));
  }

  // 获取单个用户
  @Get(':id')
  @SkipJwtAuth()
  async getOne(@Param('id') id: number): Promise<User> {
    return this.userService.getUserById(id);
  }

  // 更新用户
  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updateUserDto: CreateUserDto,
  ): Promise<User> {
    return this.userService.updateUser(id, updateUserDto);
  }

  // 删除用户
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.userService.deleteUser(id);
  }
}
