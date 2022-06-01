import { Schema as MongooseSchema, SchemaOptions } from '@nestjs/mongoose';

type SchemaInput = Omit<SchemaOptions, 'versionKey' | 'timestamps'>;

function Schema(input: SchemaInput = {}): ClassDecorator {
  const options: SchemaOptions = {
    versionKey: false,
    timestamps: {
      createdAt: 'meta_data.created_at',
      updatedAt: 'meta_data.updated_at'
    },
    ...input
  };

  const schema = MongooseSchema(options);

  return (target) => {
    schema(target);
  };
}

export type { SchemaInput };
export { Schema };
