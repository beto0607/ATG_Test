import { GAME_SCHEDULE_LOADED, GAME_RESPONSE_LOADED } from '../constants/action-types';
// import store from '../store/index';

const initState = {
    text: '',
    game_schedule: {},
    game_data: []
};

const rootReducer = (state: any = initState, action: any) => {
    switch (action.type) {
        case GAME_SCHEDULE_LOADED:
            return {
                ...state,
                text: action.payload.text,
                game_schedule: { ...state.game_schedule, ...action.payload.game_schedule }
            };
        // return {
        //     ...state,
        //     text: action.payload.text,
        //     game_schedule: [...state.game_schedule, action.payload.game_schedule]
        // };
        case GAME_RESPONSE_LOADED:
            return { ...state, game_response: [...state.game_response, action.payload] };
        default:
            return state;
    }
};

export default rootReducer