import { RECEIVED_USER } from "./types";

interface IUser {
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

export const loginUser = (user: IUser) => {
    return {
        type: RECEIVED_USER,
        payload: user
    }
}