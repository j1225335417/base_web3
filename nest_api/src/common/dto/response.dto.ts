import { ResponseCode } from '@/common/constants/code.constant';

export interface ApiResponse<T> {
  code: number; // 状态码，成功为 0，失败为非 0
  message: string; // 提示信息
  data?: T; // 成功时返回数据
}

class ApiResponseUtil {
  static success<T>(data: T): ApiResponse<T> {
    return {
      code: ResponseCode.SUCCESS,
      message: '操作成功',
      data,
    };
  }

  static error(
    message: string,
    code: number = ResponseCode.BUSINESS_ERROR,
  ): ApiResponse<null> {
    return {
      code,
      message,
    };
  }

  static parameterError(): ApiResponse<null> {
    return this.error('参数错误', ResponseCode.PARAMETER_ERROR);
  }

  static unauthorized(): ApiResponse<null> {
    return this.error('无权限访问', ResponseCode.UNAUTHORIZED);
  }

  static tooManyRequests(): ApiResponse<null> {
    return this.error(
      '请求频率过高，请稍后再试',
      ResponseCode.TOO_MANY_REQUESTS,
    );
  }

  static serverError(): ApiResponse<null> {
    return this.error('服务器繁忙，请稍后重试', ResponseCode.SERVER_ERROR);
  }
}

export default ApiResponseUtil;
