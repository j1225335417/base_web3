import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ethers } from 'ethers';
import { NonceService } from './nonce.service';
import { JwtPayload } from 'jsonwebtoken';
import * as jwt from 'jsonwebtoken';
import { jwtConstants } from '@/common/constants/jwt';
import { AuthValidatorDto } from '../dto/auth.validator.dto';

import { UserService } from '@/modules/user/service/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly nonceService: NonceService,
    private readonly userService: UserService,
  ) {}

  async verifySignature(dto: AuthValidatorDto): Promise<string> {
    const { nonce, address, signature } = dto;
    // 检查 nonce 是否有效
    const validNonce = this.nonceService.getNonce();
    if (nonce !== validNonce) {
      throw new UnauthorizedException('Invalid nonce');
    }

    // const message = `Sign in with your wallet. Nonce: ${nonce}`;
    const message = `欢迎来到 EZEK Club!\n\n钱包地址:\n${address}\n\nNonce:\n${nonce}`;
    const recoveredAddress = ethers.verifyMessage(message, signature);
    console.log('recoveredAddress', recoveredAddress);
    // 验证签名是否匹配
    if (recoveredAddress.toLowerCase() !== address.toLowerCase()) {
      throw new UnauthorizedException('Invalid signature');
    }

    await this.userService.createUser(dto);

    // 签名验证通过，生成 JWT
    const payload = { address };
    const token = this.jwtService.sign(payload, {
      expiresIn: jwtConstants.expiresIn, // 设置过期时间为 1 小时
      secret: jwtConstants.secret, // 指定自定义密钥
    });

    return token;
  }

  //验证 url 权限
  verifyToken(jwtToken: string): JwtPayload | string {
    // // 在此可以添加 JWT 验证逻辑

    if (!jwtToken) {
      throw new UnauthorizedException('Missing JWT token');
    }

    try {
      // 去除 token 中的 "Bearer " 前缀
      const token = jwtToken.split(' ')[1];

      // 解密并验证 JWT
      const decoded = jwt.verify(token, jwtConstants.secret); // 使用你的密钥验证

      return decoded;
    } catch (error) {
      throw new UnauthorizedException('Invalid or expired JWT token');
    }
  }
}
