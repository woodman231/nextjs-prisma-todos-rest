import { z } from 'zod';
import { TodoOrderByWithRelationInputObjectSchema } from './objects/TodoOrderByWithRelationInput.schema';
import { TodoWhereInputObjectSchema } from './objects/TodoWhereInput.schema';
import { TodoWhereUniqueInputObjectSchema } from './objects/TodoWhereUniqueInput.schema';
import { TodoScalarFieldEnumSchema } from './enums/TodoScalarFieldEnum.schema';

export const TodoFindManySchema = z.object({
  orderBy: z
    .union([
      TodoOrderByWithRelationInputObjectSchema,
      TodoOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: TodoWhereInputObjectSchema.optional(),
  cursor: TodoWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(TodoScalarFieldEnumSchema).optional(),
});
