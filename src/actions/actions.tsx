import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { GAME_SCHEDULE_LOADED, GAME_DATA_LOADED } from '../constants/action-types';
import { GameData } from '../types';


// Obtains a GameSchedule from proxy.
export const getGameSchedule = (gameType: string): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
        // Gets the GameSchedule for a text
        // If the text didn't change, GameSchedule it's reloaded
        return fetch(`http://localhost:3001/api/products/${gameType}`)
            .then(response => response.json())
            .then(json => {
                dispatch({ type: GAME_SCHEDULE_LOADED, text: gameType, gameSchedule: json });
            }).catch((err) => {
                console.error(err);
                dispatch({ type: GAME_SCHEDULE_LOADED, text: gameType});
            });
    }
}
// Obtains GameData from proxy.
export const loadGameData = (gameId: string): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>, getState: any): Promise<void> => {
        //Searchs if the GameData is already loaded
        if (!getState().gameData.find((e: GameData) => e.id === gameId)) {
            return fetch(`http://localhost:3001/api/games/${gameId}`)
                .then(response => response.json())
                .then(json => {
                    dispatch({ type: GAME_DATA_LOADED, payload: json });
                }).catch((err) => {
                    console.error(err);
                    dispatch({ type: GAME_DATA_LOADED });
                });
        }
    }
}