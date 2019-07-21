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
type GameInfo = {
    id: string,
    startTime: string, // YYYY-MM-DDThh:mm:ss
    tracks: Array<TrackInfo>,
    favorites: Array<FavoriteInfo>
}
//ENDPOINT RESPONSE
//https://www.atg.se/services/racinginfo/v1/api/products/<gameType>
type GameSchedule = {
    betType: string,
    upcoming: Array<GameInfo>,
    results: Array<GameInfo>
};

type RaceStart = {
    number: number,
    driver: {
        firstName: string,
        lastName: string
    },
    horse: {
        name: string,
        trainer: {
            firstName: string,
            lastName: string
        },
        pedigree: {
            father: {
                name: string
            }
        }
    }
}
type GameRace = {
    date: string,
    name: string,
    scheduledStartTime: string,
    starts: Array<RaceStart>
}
//ENDPOINT RESPONSE
// https://www.atg.se/services/racinginfo/v1/api/games/<gameId>
type GameResponse = {
    id: string,
    status: string,
    races: Array<GameRace>
};

export interface ApplicationState {
    text: string;
    game_schedule: GameSchedule;
    game_data: GameResponse;
}