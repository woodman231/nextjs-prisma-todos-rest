import { z } from 'zod';
import { TodoCreateInputObjectSchema } from './objects/TodoCreateInput.schema';
import { TodoUncheckedCreateInputObjectSchema } from './objects/TodoUncheckedCreateInput.schema';

export const TodoCreateOneSchema = z.object({
  data: z.union([
    TodoCreateInputObjectSchema,
    TodoUncheckedCreateInputObjectSchema,
  ]),
});
