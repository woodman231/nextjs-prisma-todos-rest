import { StatusCode } from "status-code-enum"
import { NextResponse } from "next/server"
import { RestApplicationErrorResponseModel } from "../restResponseModels/restApplicationErrorResponseModel"
import { RestApplicationResponseModel } from "../restResponseModels/restApplicationResponseModel"

export function restErrorResponseBuilder(initialMessage: string, statusCode: StatusCode): (additionalDetails?: string) => NextResponse {
    return function <T>(additionalDetails?: string): NextResponse {
        let finalMessage = initialMessage;

        if (additionalDetails) {
            finalMessage += `: ${additionalDetails}`
        }

        const errorMessage: RestApplicationErrorResponseModel = {
            message: finalMessage,
        }

        const restResponse: RestApplicationResponseModel<T> = {
            error: errorMessage
        }

        return NextResponse.json(restResponse, { status: statusCode })
    }
}