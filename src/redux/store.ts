import { createStore, applyMiddleware} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import rootReducer from "./rootReducers";


const middleware = applyMiddleware(thunk, logger);

const persistConfig = {
    key: 'root',
    storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(
    persistedReducer, 
    composeWithDevTools(middleware));

export const persistor = persistStore(store);

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
