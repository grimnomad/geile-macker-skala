import * as Joi from 'joi';

const CreateScaleSchema = Joi.object({
  name: Joi.string().required()
});

export { CreateScaleSchema };
