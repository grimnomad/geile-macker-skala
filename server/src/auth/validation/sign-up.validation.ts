import * as Joi from 'joi';

const SignUpSchema = Joi.object({
  handle: Joi.string().min(1).max(20).required(),
  first_name: Joi.string().required(),
  last_name: Joi.string().required(),
  password: Joi.string().required()
});

export { SignUpSchema };
