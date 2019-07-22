import { GAME_SCHEDULE_LOADED, GAME_DATA_LOADED } from '../constants/action-types';
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

const rootReducer = (state: ApplicationState = initState, action: any) => {
    switch (action.type) {
        // GameSchedule loaded
        case GAME_SCHEDULE_LOADED:
            return {
                ...state,
                text: action.payload.text,
                gameSchedule: { ...action.payload.gameSchedule }
            };
        // GameData loaded
        case GAME_DATA_LOADED:
            if (action.payload.gameInfo === {}) { return { ...state } }
            return { ...state, gameData: [...state.gameData, action.payload.gameInfo] };
        default:
            return state;
    }
};
export default rootReducer;