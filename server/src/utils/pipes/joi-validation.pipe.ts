import { createObject, ErrorItem, ValidationErrorResponse } from '@gms/shared';
import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform
} from '@nestjs/common';
import { ObjectSchema } from 'joi';

@Injectable()
class JoiValidationPipe implements PipeTransform {
  constructor(private readonly schema: ObjectSchema) {}

  transform(value: unknown, metadata: ArgumentMetadata): unknown {
    if (metadata.type === 'body') {
      const { error } = this.schema.validate(value);

      if (error) {
        const errorItems = error.details.map((detail) => {
          const { message, context } = detail;

          const error = createObject<ErrorItem>({
            message: message,
            property: context.label
          });

          return error;
        });

        const message = createObject<ValidationErrorResponse>({
          data: errorItems,
          message: 'Validation failed',
          status_code: 400,
          send_at: new Date().toISOString()
        });

        throw new BadRequestException(message);
      }
    }

    return value;
  }
}

export { JoiValidationPipe };
