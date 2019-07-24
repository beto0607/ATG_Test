import React from "react";
import { GameInfo } from '../../types/index';
import { ListGroup } from "react-bootstrap";
import GameInfoComponent from './GameInfoComponent';
import Moment from 'react-moment';
import styles from './info-section.module.scss';

export interface GameScheduleProps {
    title: string;
    games: Array<GameInfo>;
}
export interface GameInfoDayProps {
    day: string;
    games: Array<GameInfo>;
}

// Get the first part of a ISO Date type string
export function getDateFromString(text: string): string { return text.split('T')[0] }

// Splits the games array into several arrays by day(YYYY-MM-DD)
// The games of the same day will be in the same array
export function groupByDay(games: Array<GameInfo>): Array<GameInfoDayProps> {
    let returnValue: Array<GameInfoDayProps> = [];
    // Get the dates without duplicates
    let dates: Set<string> = new Set(games.map((element) => getDateFromString(element.startTime)));
    // Create the array
    dates.forEach((value: string) => {
        returnValue.push({
            day: value,
            // Gets the games for a day 
            games: games.filter(e => getDateFromString(e.startTime) === value)
        });
    })
    return returnValue;
}
export const GameInfoDay: React.FC<GameInfoDayProps> = ({ day, games }: GameInfoDayProps) => {
    return (
        <div className={styles['game-info-day-container']}>
            <Moment format="DD-MM-YYYY" date={day} className={styles['day']} />
            <ListGroup className={styles['list-group']}>
                {games.map((element) => <GameInfoComponent key={element.id} {...element} />)}
            </ListGroup>
        </div>
    );
};
export const GameSchedule: React.FC<GameScheduleProps> = ({ title, games }: GameScheduleProps) => {
    const gameByDate: Array<GameInfoDayProps> = groupByDay(games);
    return (
        <div className={styles['']}>
            <h3>
                {title}
            </h3>
            {gameByDate.map((value: GameInfoDayProps, index: number) => <GameInfoDay key={index} {...value} />)}
        </div>
    );
};

export default GameSchedule;
