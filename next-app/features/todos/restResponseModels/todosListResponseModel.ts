import { TodoPayload } from "../prismaPayloads/todoPayload";
import { RestApplicationResponseModel } from "../../common/restResponseModels/restApplicationResponseModel";

export type TodosListResponseModel = RestApplicationResponseModel<TodoPayload[]>;
