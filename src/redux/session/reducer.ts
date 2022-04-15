import { RECEIVED_USER } from "./types";

const initialState = {

    isAuthenticated: false,
    users: {}
};

const sessionReducer: any = (state=initialState, action: any):any => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVED_USER:
            return {
                ...state, 
                users: {[action.payload.id]: action.payload},
                isAuthenticated: true
            }
        default:
            return state;
    }
}

export default sessionReducer;