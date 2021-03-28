import * as Joi from 'joi';

import { JoiValidationPipe } from './joi-validation.pipe';

describe('JoiValidationPipe', () => {
  const schema = Joi.object({
    name: Joi.string().required()
  });

  test('should throw an error, if a given input cannot be validated', () => {
    const pipe = new JoiValidationPipe(schema);

    const obj = {};

    function act(): void {
      pipe.transform(obj, { type: 'body' });
    }

    expect(act).toThrowError();
  });

  test('should return value, if a given input is validated correctly', () => {
    const pipe = new JoiValidationPipe(schema);

    const obj = { name: 'test' };

    const result = pipe.transform(obj, { type: 'body' });

    expect(result).toEqual(obj);
  });
});
