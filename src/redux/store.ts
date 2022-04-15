import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import thunk from 'redux-thunk';
import rootReducers from "./rootReducers";

const middleware = applyMiddleware(thunk, logger);

export const store = createStore(rootReducers, composeWithDevTools(middleware));