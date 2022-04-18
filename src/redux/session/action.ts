import { RECEIVED_USER, REMOVED_USER } from "./types";
import { IUser } from "./interface";
import { LoginUser, LogoutUser } from "./interface";

export const loginUser = (user: IUser):LoginUser => {
    return {
        type: RECEIVED_USER,
        payload: user
    }
}


export const logoutUser = ():LogoutUser => {
    // debugger
    return {
        type: REMOVED_USER
    }
}

