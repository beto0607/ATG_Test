import React, { useState } from "react";
import { GameInfo } from '../../types/index';

const GameInfoComponent: React.FC<GameInfo> = ({ id, startTime, tracks, favorites }: GameInfo) => {
    return (
        <li>
            <span>#{id}</span>
        </li>
    );
};

export default GameInfoComponent;
