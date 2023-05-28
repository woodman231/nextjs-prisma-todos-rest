import { StatusCode } from "status-code-enum"
import { NextResponse } from "next/server"
import { RestApplicationResponseModel } from "../restResponseModels/restApplicationResponseModel"

export function okResponse<T>(data: T): NextResponse {
    const restResponse: RestApplicationResponseModel<T> = {
        data
    }

    return NextResponse.json(restResponse, { status: StatusCode.SuccessOK })
}
