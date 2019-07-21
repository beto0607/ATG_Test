import React from "react";
import { GameInfo } from '../../types/index';
import GameInfoComponent from './GameInfoComponent';

interface Props {
    title: string;
    games: Array<GameInfo>;
}

const GameSchedule: React.FC<Props> = ({ title, games }: Props) => {
    return (
        <div>
            <h4>{title}</h4>
            <ul>
                {games.map((element) => <GameInfoComponent key={element.id} {...element} />)}
            </ul>
        </div>
    );
};

export default GameSchedule;
