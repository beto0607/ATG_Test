type TrackInfo = {
    id: number,
    name: string
};
type FavoriteInfo = {
    raceId: string,
    legNumber: number,
    start: {
        number: number,
        name: string,
        distribution: number
    }
};
export type GameInfo = {
    id: string,
    startTime: string, // YYYY-MM-DDThh:mm:ss
    tracks: Array<TrackInfo>,
    favorites: Array<FavoriteInfo>
}
//ENDPOINT RESPONSE
//https://www.atg.se/services/racinginfo/v1/api/products/<gameType>
export type GameSchedule = {
    betType: string,
    upcoming: Array<GameInfo>,
    results: Array<GameInfo>
};
export type Person = {
    firstName: string,
    lastName: string
}
export type Horse = {
    name: string,
    trainer: Person,
    pedigree: {
        father: {
            name: string
        }
    }
}
export type RaceStart = {
    number: number,
    driver: Person,
    horse: Horse
}
export type Race = {
    id: string;
    name?: string;
    date: string;
    number: number;
    scheduledStartTime: string;
    starts: Array<RaceStart>;
}
//ENDPOINT RESPONSE
// https://www.atg.se/services/racinginfo/v1/api/games/<gameId>
export type GameData = {
    id: string,
    status: string,
    races: Array<Race>
};

export interface ApplicationState {
    text: string;
    gameSchedule: GameSchedule;
    gameData: Array<GameData>;
}