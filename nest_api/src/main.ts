import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ResponseInterceptor } from './common/interceptors/response.interceptor'; // 引入 ResponseInterceptor
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { ValidationPipe } from '@nestjs/common';
import * as dotenv from 'dotenv';
dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.enableCors({
    origin: 'http://localhost:3000', // 允许来自特定源的请求
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // 如果需要处理 cookies
  });
  // 应用全局拦截器
  app.useGlobalInterceptors(new ResponseInterceptor());

  // // 应用全局异常过滤器
  app.useGlobalFilters(new HttpExceptionFilter());

  // 启用全局验证管道（如果需要）
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
