import { Controller, Post, Body, Get, Query, UseGuards } from '@nestjs/common';
import { AuthService } from '../service/auth.service';
import { NonceService } from '../service/nonce.service';
import ApiResponseUtil, { ApiResponse } from '@/common/dto/response.dto';
import { ValidationPipe } from '@nestjs/common';
import { AuthValidatorDto } from '@/modules/auth/dto/auth.validator.dto';

import { SkipJwtAuth } from '@/common/auth/skip-jwt.decorator';
@Controller('auth')
export class AuthController {
  private readonly nonceMap = new Map();
  constructor(
    private readonly authService: AuthService,
    private readonly nonceService: NonceService,
  ) {}

  @Get('nonce')
  @SkipJwtAuth()
  async getNonce(
    @Query('address') address: string,
  ): Promise<{ nonce: string; message: string }> {
    const nonce = this.nonceService.generateNonce();
    // const { address } = body;
    this.nonceMap[address] = nonce;
    const message = `欢迎来到 EZEK Club!\n\n钱包地址:\n${address}\n\nNonce:\n${nonce}`;
    return { nonce, message };
  }

  @Post('authenticate')
  @SkipJwtAuth()
  async authenticate(
    @Body(new ValidationPipe()) query: AuthValidatorDto,
  ): Promise<string> {
    const { address, signature, nonce } = query;
    const token = await this.authService.verifySignature(query);
    return token;
  }
}
