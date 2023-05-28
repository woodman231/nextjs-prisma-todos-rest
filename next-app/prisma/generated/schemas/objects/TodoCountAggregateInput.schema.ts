import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TodoCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    title: z.literal(true).optional(),
    dueDate: z.literal(true).optional(),
    done: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const TodoCountAggregateInputObjectSchema = Schema;
