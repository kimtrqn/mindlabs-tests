import { Reducer } from 'redux';

import { RECEIVED_USER } from "./types";
import { IUser, IAction } from './interface';


let token = false
if (localStorage.getItem('token')) {
  token = true
}

export type InitialState = {
    isAuthenticated: boolean,
    user: IUser | null
}

const initialState:InitialState = {
    isAuthenticated: token,
    user: null
};


const sessionReducer = (state=initialState, action:IAction):any => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVED_USER:
            return {
                ...state, 
                // user: {[action.payload.id]: action.payload},
                user: action.payload,
                isAuthenticated: true
            }
        default:
            return state;
    }
}

export default sessionReducer;