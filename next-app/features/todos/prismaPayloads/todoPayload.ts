import { Prisma } from '@prisma/client';
import { todoSelector } from "../prismaSelectors/todoSelector";

export type TodoPayload = Prisma.TodoGetPayload<{ select: typeof todoSelector }>;
