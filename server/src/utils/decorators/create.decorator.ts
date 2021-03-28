import {
  applyDecorators,
  Post,
  UseGuards,
  UseInterceptors,
  UsePipes
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { ResponseInterceptor } from '../interceptors';
import { JoiValidationPipe } from '../pipes';

interface CreateInput {
  readonly schema: ConstructorParameters<typeof JoiValidationPipe>[0];
  readonly message: ConstructorParameters<typeof ResponseInterceptor>[0];
  readonly path?: Parameters<typeof Post>[0];
  readonly withAuth?: boolean;
}

function Create(input: CreateInput): ReturnType<typeof applyDecorators> {
  const { message, schema, path, withAuth = true } = input;

  const decorators: Parameters<typeof applyDecorators> = [];

  decorators.push(Post(path));
  decorators.push(UsePipes(new JoiValidationPipe(schema)));
  decorators.push(UseInterceptors(new ResponseInterceptor<unknown>(message)));

  if (withAuth) {
    decorators.push(UseGuards(AuthGuard('jwt')));
  }

  const appliedDecorators = applyDecorators(...decorators);

  return appliedDecorators;
}

export { Create };
