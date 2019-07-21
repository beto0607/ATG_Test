import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { GAME_SCHEDULE_LOADED, GAME_RESPONSE_LOADED } from '../constants/action-types';

// import * as constants from '../constants/action-types';

// Typescripts INTERFACES

// Union Action Types

// Action Creators

export const getGameSchedule = (gameType: string): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
        return fetch(`http://localhost:3001/api/products/${gameType}`)
            .then(response => response.json())
            .then(json => {
                dispatch({ type: GAME_SCHEDULE_LOADED, payload: { text: gameType, gameSchedule: json } });
            }).catch((err) => {
                console.error(err);
                dispatch({ type: GAME_SCHEDULE_LOADED, payload: { text: gameType, gameSchedule: {} } });
            });
    }
}

export const getGame = (gameId: string): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
        return fetch(`http://localhost:3001/api/games/${gameId}`)
            .then(response => response.json())
            .then(json => {
                dispatch({ type: GAME_RESPONSE_LOADED, payload: { gameInfo: json } });
            }).catch((err) => {
                console.error(err);
                dispatch({ type: GAME_RESPONSE_LOADED, payload: { gameInfo: {} } });
            });
    }
}