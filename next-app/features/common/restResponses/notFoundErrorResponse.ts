import { StatusCode } from "status-code-enum"
import { restErrorResponseBuilder } from "./restErrorResponseBuilder";

export const notFoundErrorResponse = restErrorResponseBuilder("Not Found", StatusCode.ClientErrorNotFound)
