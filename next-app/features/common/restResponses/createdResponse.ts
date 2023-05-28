import { StatusCode } from "status-code-enum"
import { NextResponse } from "next/server"
import { RestApplicationResponseModel } from "../restResponseModels/restApplicationResponseModel"

export function createdResponse<T>(data: T): NextResponse {
    const restResponse: RestApplicationResponseModel<T> = {
        data: data
    }

    return NextResponse.json(restResponse, { status: StatusCode.SuccessCreated })
}
