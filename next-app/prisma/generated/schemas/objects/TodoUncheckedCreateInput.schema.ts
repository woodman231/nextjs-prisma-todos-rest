import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TodoUncheckedCreateInput> = z
  .object({
    id: z.number().optional(),
    title: z.string(),
    dueDate: z.coerce.date(),
    done: z.boolean().optional(),
  })
  .strict();

export const TodoUncheckedCreateInputObjectSchema = Schema;
