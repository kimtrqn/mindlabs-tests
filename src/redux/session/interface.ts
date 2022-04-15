import { RECEIVED_USER } from "./types";
import { loginUser } from "./action";


export interface IUser {
    readonly id: string,
    picture: string,
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

export type LoginUser = {
    type: typeof RECEIVED_USER,
    payload: IUser
};

export type ISessions = 
    ReturnType<typeof loginUser>

