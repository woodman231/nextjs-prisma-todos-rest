import { NextRequest } from "next/server";
import { prismaClient } from "@/features/common/prisma/prismaClient";
import { todoSelector } from "../prismaSelectors/todoSelector";
import { todoDetailsResponse } from "../restResponses/todoDetailsResponse";
import { notFoundErrorResponse } from "../../common/restResponses/notFoundErrorResponse";
import { restRequestHandlerBuilder, RestRequestHandlerBuilderOptions } from "@/features/common/restRequestHandlers/restRequestHandlerBuilder";
import { IDParams } from "@/features/common/params/idParams";
import { idParamaterValidator } from "@/features/common/paramValidators/idParamaterValidator";

const getTodoDetailsRequestHandlerBuilderOptions: RestRequestHandlerBuilderOptions<IDParams, undefined> = {    
    onValidateParams: idParamaterValidator,

    onValidRequestAsync: async (req: NextRequest, details) => {
        if (details && details.params) {
            const { params } = details.params;
            const id = Number(params.id);
            const todo = await prismaClient.todo.findUnique({ where: { id: id }, select: todoSelector });

            if (todo) {
                return todoDetailsResponse(todo);
            } else {
                return notFoundErrorResponse();
            }
        } else {
            throw new Error("Params were not defined");
        }
    },
};

export const getTodoDetailsRequestHandler = restRequestHandlerBuilder(getTodoDetailsRequestHandlerBuilderOptions);
