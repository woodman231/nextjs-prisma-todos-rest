import { IDParams } from "../params/idParams";

export const idParamaterValidator = ({ params }: IDParams): { isValid: boolean, errorMessage?: string } => {
    const id = Number(params.id);
    if (Number.isNaN(id)) {
        return { isValid: false, errorMessage: `${params.id} is not a number` };
    }

    return { isValid: true };
}
