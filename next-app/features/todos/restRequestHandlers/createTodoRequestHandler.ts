import { Prisma } from "@prisma/client";
import { prismaClient } from "@/features/common/prisma/prismaClient";
import { NextRequest } from "next/server";
import { todoSelector } from "../prismaSelectors/todoSelector";
import { todoDetailsResponse } from "../restResponses/todoDetailsResponse";
import { TodoCreateInputObjectSchema } from "../../../prisma/generated/schemas/objects/TodoCreateInput.schema";
import { restRequestHandlerBuilder, RestRequestHandlerBuilderOptions } from "@/features/common/restRequestHandlers/restRequestHandlerBuilder";

const createTodoRequestHandlerBuilderOptions: RestRequestHandlerBuilderOptions<undefined, Prisma.TodoCreateInput> = {
    onValidateRequestAsync: async (req: NextRequest) => {
        const requestBody = await req.json();
        const validation = TodoCreateInputObjectSchema.safeParse(requestBody);

        if (!validation.success) {
            const { errors } = validation.error;
            return { success: false, issues: errors };
        } else {            
            return { success: true, validatedRequestBody: validation.data };
        }
    },

    onValidRequestAsync: async (req: NextRequest, details) => {                
        if(details && details.validatedRequestBody) {
            const createArgs: Prisma.TodoCreateArgs = {
                data: details.validatedRequestBody,
                select: todoSelector
            };
    
            const todo = await prismaClient.todo.create(createArgs);
    
            return todoDetailsResponse(todo);
        } else {
            throw new Error("Validated request body is undefined");
        }
    },
};

export const createTodoRequestHandler = restRequestHandlerBuilder(createTodoRequestHandlerBuilderOptions);
