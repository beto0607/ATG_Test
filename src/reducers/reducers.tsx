import { GAME_SCHEDULE_LOADED, GAME_RESPONSE_LOADED } from '../constants/action-types';
// import store from '../store/index';

const initState = {
    game_schedule: [],
    game_data: []
};

const rootReducer = (state: any = initState, action: any) => {
    switch (action.type) {
        case GAME_SCHEDULE_LOADED:
            return { ...state, game_schedule: [...state.game_schedule, action.payload] };
        case GAME_RESPONSE_LOADED:
            return { ...state, game_response: [...state.game_response, action.payload] };
        default:
            return state;
    }
};

export default rootReducer