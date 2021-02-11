import { createObject, ErrorItem, ValidationErrorResponse } from '@gms/shared';
import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { ObjectSchema } from 'joi';

@Injectable()
class JoiValidationPipe implements PipeTransform {
  constructor(private readonly schema: ObjectSchema) {}

  transform(value: unknown): unknown {
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
        errors: errorItems,
        message: 'Validation failed',
        status_code: 400
      });

      throw new BadRequestException(message);
    }

    return value;
  }
}

export { JoiValidationPipe };
