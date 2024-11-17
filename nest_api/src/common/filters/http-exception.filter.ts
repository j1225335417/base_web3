import {
  Catch,
  ArgumentsHost,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { ApiResponse } from '@/common/dto/response.dto'; // 引入统一格式的 ApiResponse
import { ResponseCode } from '@/common/constants/code.constant'; // 引入响应代码常量

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost): void {
    console.log(exception);
    const response = host.switchToHttp().getResponse();
    const status = exception.getStatus();

    // 访问 exception.message.code 和 exception.message.message
    const exceptionMessage = exception.getResponse();
    const message = exceptionMessage['message'] || '系统异常'; // 获取异常信息
    const code = exceptionMessage['code'] || ResponseCode.BUSINESS_ERROR; // 获取异常的code（默认是 1）

    // 构造统一格式的响应
    const errorResponse: ApiResponse<null> = {
      code: code,
      message,
    };

    // 设置响应状态码和返回格式
    response.status(status).json(errorResponse);
  }
}
