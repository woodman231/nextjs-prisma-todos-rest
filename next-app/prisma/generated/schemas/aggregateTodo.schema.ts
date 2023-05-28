import { z } from 'zod';
import { TodoOrderByWithRelationInputObjectSchema } from './objects/TodoOrderByWithRelationInput.schema';
import { TodoWhereInputObjectSchema } from './objects/TodoWhereInput.schema';
import { TodoWhereUniqueInputObjectSchema } from './objects/TodoWhereUniqueInput.schema';
import { TodoCountAggregateInputObjectSchema } from './objects/TodoCountAggregateInput.schema';
import { TodoMinAggregateInputObjectSchema } from './objects/TodoMinAggregateInput.schema';
import { TodoMaxAggregateInputObjectSchema } from './objects/TodoMaxAggregateInput.schema';
import { TodoAvgAggregateInputObjectSchema } from './objects/TodoAvgAggregateInput.schema';
import { TodoSumAggregateInputObjectSchema } from './objects/TodoSumAggregateInput.schema';

export const TodoAggregateSchema = z.object({
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
  _count: z
    .union([z.literal(true), TodoCountAggregateInputObjectSchema])
    .optional(),
  _min: TodoMinAggregateInputObjectSchema.optional(),
  _max: TodoMaxAggregateInputObjectSchema.optional(),
  _avg: TodoAvgAggregateInputObjectSchema.optional(),
  _sum: TodoSumAggregateInputObjectSchema.optional(),
});
