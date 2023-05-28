import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TodoCreateInput> = z
  .object({
    title: z.string(),
    dueDate: z.coerce.date(),
    done: z.boolean().optional(),
  })
  .strict();

export const TodoCreateInputObjectSchema = Schema;
