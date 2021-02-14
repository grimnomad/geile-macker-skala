import * as Joi from 'joi';

const SignInSchema = Joi.object({
  handle: Joi.string().required(),
  password: Joi.string().required()
});

export { SignInSchema };
