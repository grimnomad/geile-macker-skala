import * as Joi from 'joi';

const SignUpSchema = Joi.object({
  handle: Joi.string().min(1).max(20).required(),
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  password: Joi.string().required()
});

export { SignUpSchema };
