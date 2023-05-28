import { z } from 'zod';
import { TodoUpdateInputObjectSchema } from './objects/TodoUpdateInput.schema';
import { TodoUncheckedUpdateInputObjectSchema } from './objects/TodoUncheckedUpdateInput.schema';
import { TodoWhereUniqueInputObjectSchema } from './objects/TodoWhereUniqueInput.schema';

export const TodoUpdateOneSchema = z.object({
  data: z.union([
    TodoUpdateInputObjectSchema,
    TodoUncheckedUpdateInputObjectSchema,
  ]),
  where: TodoWhereUniqueInputObjectSchema,
});
