import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus
} from '@nestjs/common';
import { Response } from 'express';
import { MongoError } from 'mongodb';

type ErrorCodes = 11000;

type MongoErrorOptions = Partial<Record<ErrorCodes, string>>;

@Catch(MongoError)
class MongoExceptionFilter implements ExceptionFilter {
  constructor(readonly errorOptions: MongoErrorOptions) {}

  catch(exception: MongoError, host: ArgumentsHost): void {
    const context = host.switchToHttp();
    const response = context.getResponse<Response>();

    switch (exception.code) {
      case 11000: {
        const statusCode = HttpStatus.CONFLICT;

        response.status(statusCode).json({
          statusCode,
          message: this.errorOptions[exception.code]
        });
      }
    }
  }
}

export { MongoExceptionFilter };
