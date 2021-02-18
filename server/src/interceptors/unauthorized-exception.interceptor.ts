import { createObject, ResponseDTO } from '@gms/shared';
import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
  UnauthorizedException
} from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
class UnauthorizedExceptionInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
    const createError = catchError((err: unknown) => {
      if (err instanceof UnauthorizedException) {
        const message = createObject<ResponseDTO<unknown>>({
          message: err.message,
          status_code: err.getStatus(),
          data: null,
          send_at: new Date().toISOString()
        });

        return throwError(new UnauthorizedException(message));
      }
    });

    return next.handle().pipe(createError);
  }
}

export { UnauthorizedExceptionInterceptor };
