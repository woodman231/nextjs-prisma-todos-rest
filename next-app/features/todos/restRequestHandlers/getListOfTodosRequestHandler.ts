import { NextRequest } from "next/server";
import { prismaClient } from "@/features/common/prisma/prismaClient";
import { todosListResponse } from "../restResponses/listOfTodosResponse";
import { todoSelector } from "../prismaSelectors/todoSelector";
import { restRequestHandlerBuilder, RestRequestHandlerBuilderOptions } from "@/features/common/restRequestHandlers/restRequestHandlerBuilder";

const getListOfTodosRequestHandlerBuilderOptions: RestRequestHandlerBuilderOptions<undefined, undefined> = {
    onValidRequestAsync: async (req: NextRequest) => {
        const todos = await prismaClient.todo.findMany({ select: todoSelector });

        return todosListResponse(todos);
    }
}

export const getListOfTodosRequestHandler = restRequestHandlerBuilder(getListOfTodosRequestHandlerBuilderOptions);
