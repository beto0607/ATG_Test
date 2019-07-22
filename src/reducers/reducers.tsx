import { GAME_SCHEDULE_LOADED, GAME_DATA_LOADED } from '../constants/action-types';
// import store from '../store/index';

const initState = {
    text: '',
    gameSchedule: {},
    gameData: []
};

const rootReducer = (state: any = initState, action: any) => {
    switch (action.type) {
        case GAME_SCHEDULE_LOADED:
            return {
                ...state,
                text: action.payload.text,
                gameSchedule: { ...state.gameSchedule, ...action.payload.gameSchedule }
            };
        case GAME_DATA_LOADED:
            if (action.payload.gameInfo === {}) { return { ...state } }
            return { ...state, gameData: [...state.gameData, action.payload.gameInfo] };
        default:
            return state;
    }
};

export default rootReducer