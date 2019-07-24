import { GAME_SCHEDULE_LOADED, GAME_DATA_LOADED, LoadedActions, AppActions } from '../constants/action-types';
import { ApplicationState } from '../types/index';

// Initial state
const initState: ApplicationState = {
    text: '',
    gameSchedule: {
        betType: '',
        upcoming: [],
        results: []
    },
    gameData: []
};

export const loadedReducer = (state: ApplicationState = initState, action: LoadedActions) => {
    switch (action.type) {
        case GAME_SCHEDULE_LOADED:
            if (!action.gameSchedule) {return { ...state, text: action.text }}
            return {
                ...state,
                text: action.text,
                gameSchedule: { ...action.gameSchedule }
            };
        case GAME_DATA_LOADED:
            if (!action.gameData) { return { ...state } }
            return { ...state, gameData: [...state.gameData, action.gameData] };
        default:
            return state;
    }
};