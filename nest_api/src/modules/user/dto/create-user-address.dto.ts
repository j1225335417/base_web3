// src/modules/user-addresses/dto/create-user-address.dto.ts
import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateUserAddressDto {
  @IsNotEmpty()
  @IsString()
  user_id: string;

  @IsNotEmpty()
  @IsString()
  address: string;

  @IsNotEmpty()
  @IsString()
  chain: string;

  @IsOptional()
  @IsString()
  label?: string;
}
