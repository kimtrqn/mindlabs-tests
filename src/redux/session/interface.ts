import { RECEIVED_USER, REMOVED_USER } from "./types";
import { loginUser, logoutUser } from "./action";


export interface IUser {
    readonly id: string,
    age: number,
    firstName: string,
    lastName: string,
    gender: string,
    email: string,
    password: string,
    phone: string,
    address: string,
    createdAt: string
}

export interface IAction {
    type: 'RECEIVED_USER' | 'REMOVED_USER'
    payload?: any
}

export type LoginUser = {
    type: typeof RECEIVED_USER,
    payload: IUser
};

export type LogoutUser = {
    type: typeof REMOVED_USER
}

export type ISessions = 
    | ReturnType<typeof loginUser>
    | ReturnType<typeof logoutUser>

