import { Injectable } from '@nestjs/common';
import { randomBytes } from 'crypto';

@Injectable()
export class NonceService {
  private nonce: string;

  generateNonce(): string {
    this.nonce = randomBytes(16).toString('hex'); // 生成随机 nonce
    return this.nonce;
  }

  getNonce(): string {
    return this.nonce;
  }
}
