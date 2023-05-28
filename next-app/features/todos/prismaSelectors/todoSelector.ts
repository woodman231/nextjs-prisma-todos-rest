import { Prisma } from '@prisma/client';

export const todoSelector = {
    id: true,
    title: true,
    dueDate: true,
    done: true,
} satisfies Prisma.TodoSelect;
