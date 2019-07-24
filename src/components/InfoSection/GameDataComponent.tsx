import React from "react";
import { connect } from "react-redux";
import { loadGameData } from "../../actions/actions";
import { ApplicationState, GameData, Race } from '../../types/index';
import { RaceComponent } from './RaceComponent';

export interface GameDataProps {
    parent_id: string;
    gameData: GameData | null;
    loadGameData: any;
    load: boolean;
}
export const GameDataComponentConnected: React.FC<GameDataProps> = ({ parent_id, load, gameData, loadGameData }: GameDataProps) => {
    // Loads the game data only when the component is visible and only one time.
    if (load && !gameData) { loadGameData(parent_id); }
    return (
        <div>
            {gameData !== null && gameData.races.map((race: Race) => <RaceComponent key={race.id} {...race} />)}
        </div>
    );
};
const mapStateToProps = (state: ApplicationState, ownprops: any): GameData | null => {
    return {
        ...ownprops,
        gameData: state.gameData.find((e: GameData) => e.id === ownprops.parent_id) || null
    }
};
const mapDispatchToPropsGameData = (dispatch: any, ownprops: any): any => {
    return {
        ...ownprops,
        loadGameData: (gameId: string) => dispatch(loadGameData(gameId))
    };
}
export const GameDataComponent = connect(mapStateToProps, mapDispatchToPropsGameData)(GameDataComponentConnected);
