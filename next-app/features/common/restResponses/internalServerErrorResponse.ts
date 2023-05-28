import { StatusCode } from "status-code-enum"
import { restErrorResponseBuilder } from "./restErrorResponseBuilder";

export const internalServerErrorResponse = restErrorResponseBuilder("Internal Server Error", StatusCode.ServerErrorInternal);
