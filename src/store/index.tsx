import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/reducers";
// import { ApplicationState } from '../types/index';

//This is for avoid Typescript warning
// declare global {
// 	interface Window {
// 		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
// 	}
// }
// const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;

const store = createStore(
	rootReducer,
	applyMiddleware(thunk)
);

export default store;