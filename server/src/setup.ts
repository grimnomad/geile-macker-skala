import { NestInterceptor } from '@nestjs/common';

import { UnauthorizedExceptionInterceptor } from './utils';

function setupInterceptors(): NestInterceptor[] {
  const unauthorizedExceptionInterceptor = new UnauthorizedExceptionInterceptor();

  const interceptors: NestInterceptor[] = [];

  interceptors.push(unauthorizedExceptionInterceptor);

  return interceptors;
}

export { setupInterceptors };
