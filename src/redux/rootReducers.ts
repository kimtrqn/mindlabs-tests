import { combineReducers } from "redux";
import sessionReducer from "./session/reducer";

const rootReducers = combineReducers({
    session: sessionReducer
});

export default rootReducers;