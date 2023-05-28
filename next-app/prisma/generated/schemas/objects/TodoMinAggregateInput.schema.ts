import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TodoMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    title: z.literal(true).optional(),
    dueDate: z.literal(true).optional(),
    done: z.literal(true).optional(),
  })
  .strict();

export const TodoMinAggregateInputObjectSchema = Schema;
