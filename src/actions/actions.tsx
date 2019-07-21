import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
// import * as constants from '../constants/action-types';

// Typescripts INTERFACES

// Union Action Types

// Action Creators

export const getGameSchedule = (text: string): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
        return fetch(`http://localhost:3001/api/products/${text}`)
            .then(response => response.json())
            .then(json => {
                dispatch({ type: "GAME_SCHEDULE_LOADED", payload: { text: text, game_schedule: json } });
            }).catch((err) => {
                console.error(err);
                dispatch({ type: "GAME_SCHEDULE_LOADED", payload: { text: text, game_schedule: {} } });
            });
    }
}