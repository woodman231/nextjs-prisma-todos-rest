import { Prisma } from "@prisma/client";
import { prismaClient } from "@/features/common/prisma/prismaClient";
import { NextRequest } from "next/server";
import { todoSelector } from "../prismaSelectors/todoSelector";
import { todoDetailsResponse } from "../restResponses/todoDetailsResponse";
import { IDParams } from "@/features/common/params/idParams";
import { idParamaterValidator } from "@/features/common/paramValidators/idParamaterValidator";
import { TodoUpdateInputObjectSchema } from "@/prisma/generated/schemas/objects/TodoUpdateInput.schema";
import { restRequestHandlerBuilder, RestRequestHandlerBuilderOptions } from "@/features/common/restRequestHandlers/restRequestHandlerBuilder";

const updateTodoRequestHandlerBuilderOptions: RestRequestHandlerBuilderOptions<IDParams, Prisma.TodoUpdateInput> = {
    onValidateParams: idParamaterValidator,

    onValidateRequestAsync: async (req: NextRequest) => {
        const requestBody = await req.json();
        const validation = TodoUpdateInputObjectSchema.safeParse(requestBody);

        if (!validation.success) {
            const { errors } = validation.error;
            return { success: false, issues: errors };
        } else {
            return { success: true, validatedRequestBody: validation.data };
        }
    },

    onValidRequestAsync: async (req: NextRequest, details) => {
        if (details && details.params && details.validatedRequestBody) {
            const id = Number(details.params.params.id);

            const updateArgs: Prisma.TodoUpdateArgs = {
                where: { id: id },
                data: details.validatedRequestBody,
                select: todoSelector
            };

            const todo = await prismaClient.todo.update(updateArgs);

            return todoDetailsResponse(todo);
        } else {
            throw new Error("Validated request body is undefined, or params are undefined.");
        }
    }
}

export const updateTodoRequestHandler = restRequestHandlerBuilder(updateTodoRequestHandlerBuilderOptions);
