import { NextRequest } from "next/server";
import { prismaClient } from "@/features/common/prisma/prismaClient";
import { noContentResponse } from "../../common/restResponses/noContentResponse";
import { restRequestHandlerBuilder, RestRequestHandlerBuilderOptions } from "@/features/common/restRequestHandlers/restRequestHandlerBuilder";
import { IDParams } from "@/features/common/params/idParams";
import { idParamaterValidator } from "@/features/common/paramValidators/idParamaterValidator";

const deleteTodoRequestHandlerBuilderOptions: RestRequestHandlerBuilderOptions<IDParams, undefined> = {
    onValidateParams: idParamaterValidator,

    onValidRequestAsync: async (req: NextRequest, details) => {
        if (details && details.params) {
            const { params } = details.params;
            const id = Number(params.id);
            await prismaClient.todo.delete({ where: { id: id } });

            return noContentResponse();
        } else {
            throw new Error("Params were not defined");
        }
    }
};

export const deleteTodoRequestHandler = restRequestHandlerBuilder(deleteTodoRequestHandlerBuilderOptions);
