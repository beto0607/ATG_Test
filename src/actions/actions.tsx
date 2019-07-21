import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
// import * as constants from '../constants/action-types';

// Typescripts INTERFACES

// Union Action Types

// Action Creators

export const getGameSchedule = (text: string): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
    console.log("getGameSchedule");
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
        return fetch(`http://localhost:3001/api/products/${text}`)
            .then(response => response.json())
            .then(json => {
                console.log(json);
                dispatch({ type: "GAME_SCHEDULE_LOADED", payload: json });
            }).catch((err) => {
                console.log(err);
                dispatch({ type: "GAME_SCHEDULE_LOADED", payload: {} });
            });
    }
}