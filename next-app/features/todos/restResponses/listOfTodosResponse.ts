import { NextResponse } from "next/server";
import { okResponse } from "../../common/restResponses/okResponse";
import { TodoPayload } from "../prismaPayloads/todoPayload";

export const todosListResponse = (todos: TodoPayload[]): NextResponse => {
    return okResponse(todos);
}
