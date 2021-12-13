import { ResponseDTO } from '@gms/shared';
import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
  NotFoundException
} from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
class NotFoundExceptionInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
    const createError = catchError((err: unknown) => {
      if (err instanceof NotFoundException) {
        const message: ResponseDTO<unknown> = {
          message: err.message,
          status_code: err.getStatus(),
          data: null,
          send_at: new Date().toISOString()
        };

        return throwError(() => new NotFoundException(message));
      }

      return throwError(() => err);
    });

    return next.handle().pipe(createError);
  }
}

export { NotFoundExceptionInterceptor };
