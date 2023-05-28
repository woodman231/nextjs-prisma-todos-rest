import { z } from 'zod';

export const TodoScalarFieldEnumSchema = z.enum([
  'id',
  'title',
  'dueDate',
  'done',
]);
