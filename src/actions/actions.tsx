import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { GAME_SCHEDULE_LOADED, GAME_DATA_LOADED, GameScheduleLoadedAction, GameDataLoadedAction } from '../types/actions';
import { GameData, GameSchedule } from '../types';

export const createGameDataLoadedAction = (data?: GameData): GameDataLoadedAction => {
    return data ? { type: GAME_DATA_LOADED, gameData: data } : { type: GAME_DATA_LOADED };
}
export const createGameScheduleLoadedAction = (text: string, data?: GameSchedule | any): GameScheduleLoadedAction => {
    return { type: GAME_SCHEDULE_LOADED, text: text, gameSchedule: data };
}
// Obtains a GameSchedule from proxy.
export const getGameSchedule = (gameType: string): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
        // Gets the GameSchedule for a text
        // If the text didn't change, GameSchedule it's reloaded
        return fetch(`http://localhost:3001/api/products/${gameType}`)
            .then(response => response.json())
            .then(json => {
                dispatch(createGameScheduleLoadedAction(gameType, json));
            }).catch((err) => {
                console.error(err);
                dispatch(createGameScheduleLoadedAction(gameType));
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
                    dispatch(createGameDataLoadedAction(json));
                }).catch((err) => {
                    console.error(err);
                    dispatch(createGameDataLoadedAction());
                });
        }
    }
}