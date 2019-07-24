import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { loadedReducer } from "../reducers/reducers";

export const store = createStore(loadedReducer, applyMiddleware(thunk));