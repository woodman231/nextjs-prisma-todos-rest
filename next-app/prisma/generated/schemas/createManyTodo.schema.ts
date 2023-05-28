import { z } from 'zod';
import { TodoCreateManyInputObjectSchema } from './objects/TodoCreateManyInput.schema';

export const TodoCreateManySchema = z.object({
  data: z.union([
    TodoCreateManyInputObjectSchema,
    z.array(TodoCreateManyInputObjectSchema),
  ]),
});
