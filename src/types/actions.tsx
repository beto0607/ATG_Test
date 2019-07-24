import { GameSchedule, GameData } from "../types";

export const GAME_SCHEDULE_LOADED = "GAME_SCHEDULE_LOADED";
export type GAME_SCHEDULE_LOADED = typeof GAME_SCHEDULE_LOADED;

export const GAME_DATA_LOADED = "GAME_DATA_LOADED";
export type GAME_DATA_LOADED = typeof GAME_DATA_LOADED;


export interface GameScheduleLoadedAction {
    type: typeof GAME_SCHEDULE_LOADED;
    text: string;
    gameSchedule?: GameSchedule | null;
}

export interface GameDataLoadedAction {
    type: typeof GAME_DATA_LOADED;
    gameData?: GameData;
}

export type LoadedActions = GameScheduleLoadedAction | GameDataLoadedAction;

export type AppActions = LoadedActions;