import { IsNotEmpty, Length, Min } from 'class-validator';
export class AuthValidatorDto {
  @IsNotEmpty()
  address: string;

  @IsNotEmpty()
  signature: string;

  @IsNotEmpty()
  @Length(32, 32)
  nonce: string;

  @IsNotEmpty()
  chainName: string;

  @IsNotEmpty()
  chainId: number;
}
