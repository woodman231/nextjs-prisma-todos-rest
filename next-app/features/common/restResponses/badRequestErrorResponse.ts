import { StatusCode } from "status-code-enum"
import { restErrorResponseBuilder } from "./restErrorResponseBuilder";

export const badRequestErrorResponse = restErrorResponseBuilder("Bad Request", StatusCode.ClientErrorBadRequest)
