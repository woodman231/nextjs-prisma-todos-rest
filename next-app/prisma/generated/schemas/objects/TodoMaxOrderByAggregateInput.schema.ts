import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TodoMaxOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    dueDate: z.lazy(() => SortOrderSchema).optional(),
    done: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const TodoMaxOrderByAggregateInputObjectSchema = Schema;
