import { NextResponse } from "next/server";
import { okResponse } from "../../common/restResponses/okResponse";
import { TodoPayload } from "../prismaPayloads/todoPayload";

export const todoDetailsResponse = (todo: TodoPayload): NextResponse => {
    return okResponse(todo);
}
