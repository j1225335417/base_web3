// src/common/exceptions/business.exception.ts
import { HttpException, HttpStatus } from '@nestjs/common';

export class BusinessException extends HttpException {
  constructor(message: string, errorCode: number) {
    // 把错误信息和错误码封装成对象
    super(
      {
        message,
        code: errorCode,
      },
      HttpStatus.BAD_REQUEST, // 可以根据需要修改返回的 HTTP 状态码
    );
  }
}
