import thunk from "redux-thunk";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { loadedReducer } from "../reducers/reducers";

export const rootReducer = combineReducers({
	loadedReducer: loadedReducer
});

export type AppState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(thunk));