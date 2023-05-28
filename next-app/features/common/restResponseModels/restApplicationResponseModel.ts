import { RestApplicationErrorResponseModel } from "./restApplicationErrorResponseModel";

export interface RestApplicationResponseModel<T> {
    data?: T;
    error?: RestApplicationErrorResponseModel;
}
