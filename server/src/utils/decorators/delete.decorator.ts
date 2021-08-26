import {
  applyDecorators,
  Delete as Del,
  UseGuards,
  UseInterceptors
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { ResponseInterceptor } from '../interceptors';

interface DeleteInput {
  readonly message: ConstructorParameters<typeof ResponseInterceptor>[0];
  readonly path?: Parameters<typeof Del>[0];
  readonly withAuth?: boolean;
}

function Delete(input: DeleteInput): ReturnType<typeof applyDecorators> {
  const { message, path, withAuth = true } = input;

  const decorators: Parameters<typeof applyDecorators> = [];

  decorators.push(Del(path));
  decorators.push(UseInterceptors(new ResponseInterceptor(message)));

  if (withAuth) {
    decorators.push(UseGuards(AuthGuard('jwt')));
  }

  const appliedDecorators = applyDecorators(...decorators);

  return appliedDecorators;
}

export { Delete };
