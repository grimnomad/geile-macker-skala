import { createObject, ResponseDTO } from '@gms/shared';
import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor
} from '@nestjs/common';
import { Response } from 'express';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
class ResponseInterceptor<T> implements NestInterceptor<T, ResponseDTO<T>> {
  constructor(private readonly message: string) {}

  intercept(
    context: ExecutionContext,
    next: CallHandler
  ): Observable<ResponseDTO<T>> {
    const mapDTO = map((data: T) => {
      const argumentsHost = context.switchToHttp();
      const response = argumentsHost.getResponse<Response>();

      const message = createObject<ResponseDTO<T>>({
        data: data ?? null,
        message: this.message,
        send_at: new Date().toISOString(),
        status_code: response.statusCode
      });

      return message;
    });

    return next.handle().pipe(mapDTO);
  }
}

export { ResponseInterceptor };
