import {
  applyDecorators,
  Get,
  UseGuards,
  UseInterceptors
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { ResponseInterceptor } from '../interceptors';

interface ReadInput {
  readonly message: ConstructorParameters<typeof ResponseInterceptor>[0];
  readonly path?: Parameters<typeof Get>[0];
  readonly withAuth?: boolean;
}

function Read(input: ReadInput): ReturnType<typeof applyDecorators> {
  const { message, path, withAuth = true } = input;

  const decorators: Parameters<typeof applyDecorators> = [];

  decorators.push(Get(path));
  decorators.push(UseInterceptors(new ResponseInterceptor(message)));

  if (withAuth) {
    decorators.push(UseGuards(AuthGuard('jwt')));
  }

  const appliedDecorators = applyDecorators(...decorators);

  return appliedDecorators;
}

export type { ReadInput };
export { Read };
