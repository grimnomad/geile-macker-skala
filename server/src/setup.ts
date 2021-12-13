import { NestInterceptor } from '@nestjs/common';

import {
  NotFoundExceptionInterceptor,
  UnauthorizedExceptionInterceptor
} from './utils';

function setupInterceptors(): NestInterceptor[] {
  const unauthorizedExceptionInterceptor = new UnauthorizedExceptionInterceptor();
  const notFoundExceptionInterceptor = new NotFoundExceptionInterceptor();

  const interceptors: NestInterceptor[] = [];

  interceptors.push(unauthorizedExceptionInterceptor);
  interceptors.push(notFoundExceptionInterceptor);

  return interceptors;
}

export { setupInterceptors };
