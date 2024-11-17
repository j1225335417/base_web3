// src/modules/user/dto/create-user.dto.ts
import { IsString, IsNotEmpty, IsEmail, IsOptional } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  username: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  address?: string; // 可以存储用户的区块链地址，非必填

  @IsOptional()
  @IsString()
  avatar?: string; // 可以存储用户头像链接，非必填

  @IsOptional()
  @IsString()
  phone?: string; // 可以存储用户手机号码，非必填
}
