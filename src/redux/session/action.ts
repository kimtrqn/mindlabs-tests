import { RECEIVED_USER } from "./types";
import { IUser } from "./interface";
import { LoginUser } from "./interface";




export const loginUser = (user: IUser):LoginUser => {
    return {
        type: RECEIVED_USER,
        payload: user
    }
}