import { RECEIVED_USER, REMOVED_USER } from "./types";
import { IUser, IAction } from './interface';

export type InitialState = {
    isAuthenticated: boolean,
    user: IUser | null
}

const initialState:InitialState = {
    isAuthenticated: false,
    user: null
};

const sessionReducer = (state=initialState, action:IAction):any => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVED_USER:
            return {
                ...state, 
                user: action.payload,
                isAuthenticated: true
            }
        case REMOVED_USER:
            return {
                ...state,
                isAuthenticated: false,
                user: null
            }
        default:
            return state;
    }
}

export default sessionReducer;