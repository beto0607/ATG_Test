import React from "react";
import { GameInfo } from '../../types/index';
import { ListGroup } from "react-bootstrap";
import GameInfoComponent from './GameInfoComponent';

interface Props {
    title: string;
    games: Array<GameInfo>;
}
interface GameInfoDayProps {
    day: string;
    games: Array<GameInfo>;
}
// Get the first part of a ISO Date type string
function getDateFromString(text: string): string { return text.split('T')[0] }
// Splits the games array into several arrays by date(YYYY-MM-DD)
// The games of the same day will be in the same arrayF
function splitGames(games: Array<GameInfo>): Array<GameInfoDayProps> {
    //Declares the return
    let returnValue: Array<GameInfoDayProps> = [];
    //Get the dates without duplicates
    let dates: Set<string> = new Set(games.map((element) => getDateFromString(element.startTime)));
    //For each date, gets the games for that date and pushed the information in retunValue
    dates.forEach((value: string) => {
        returnValue.push({
            day: value,
            games: games.filter(e => getDateFromString(e.startTime) === value)
        });
    })
    //If games is empty it'll return a empty array
    return returnValue;
}
const GameInfoDay: React.FC<GameInfoDayProps> = ({ day, games }: GameInfoDayProps) => {
    return (
        <div>
            <h3>{day}</h3>
            <ListGroup>
                {games.map((element) => <GameInfoComponent key={element.id} {...element} />)}
            </ListGroup>
        </div>
    );
};
const GameSchedule: React.FC<Props> = ({ title, games }: Props) => {
    const gameByDate: Array<GameInfoDayProps> = splitGames(games);
    console.log(gameByDate);
    return (
        <div>
            <h3>
                {title}
            </h3>
            {gameByDate.map((value: GameInfoDayProps, index: number) => <GameInfoDay key={index} {...value} />)}
        </div>
    );
};

export default GameSchedule;
