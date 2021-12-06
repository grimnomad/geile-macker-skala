import { SchemaOptions } from '@nestjs/mongoose';

function createSchemaOptions(
  input: Omit<SchemaOptions, 'versionKey' | 'timestamps'> = {}
): SchemaOptions {
  const options: SchemaOptions = {
    versionKey: false,
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
    ...input
  };

  return options;
}

export { createSchemaOptions };
