import {
  applyDecorators,
  Post,
  UseInterceptors,
  UsePipes
} from '@nestjs/common';

import { ResponseInterceptor } from '../interceptors';
import { JoiValidationPipe } from '../pipes';

interface CreateInput {
  readonly schema: ConstructorParameters<typeof JoiValidationPipe>[0];
  readonly message: ConstructorParameters<typeof ResponseInterceptor>[0];
  readonly path?: Parameters<typeof Post>[0];
}

function Create(input: CreateInput): ReturnType<typeof applyDecorators> {
  const { message, schema, path } = input;

  const decorators = applyDecorators(
    Post(path),
    UsePipes(new JoiValidationPipe(schema)),
    UseInterceptors(new ResponseInterceptor<unknown>(message))
  );

  return decorators;
}

export { Create };
