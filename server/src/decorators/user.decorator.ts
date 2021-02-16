import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';

function GetUser(): ParameterDecorator {
  return createParamDecorator((_data: unknown, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest<Request>();

    return request.user;
  });
}

export { GetUser };
