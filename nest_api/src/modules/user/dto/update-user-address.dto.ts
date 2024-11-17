// src/modules/user-addresses/dto/update-user-address.dto.ts
import { IsString, IsOptional } from 'class-validator';

export class UpdateUserAddressDto {
  @IsOptional()
  @IsString()
  address?: string;

  @IsOptional()
  @IsString()
  chain?: string;

  @IsOptional()
  @IsString()
  label?: string;
}
