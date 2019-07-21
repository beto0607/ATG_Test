import React, { useState } from 'react';
import styles from './info-section.module.scss';
import { connect } from "react-redux";
import { getGameSchedule } from "../../actions/actions";
import GameSchedule from './GameSchedule';
import { GameSchedule as GameScheduleType } from '../../types/index';

interface Props {
    text: string;
    gameSchedule: GameScheduleType;
}

const ConnectedInfoSection: React.FC<Props> = ({ text, gameSchedule }: Props) => {
    if (!text) {
        return (
            <div className={styles['info-section']}>
                <h3>You can search for a Game now</h3>
            </div>
        )
    }
    if (!gameSchedule.betType) {
        return (
            <div className={styles['info-section']}>
                <h3>404 - Game "{text}" not found</h3>
            </div>
        )
    }
    return (
        <div className={styles['info-section']}>
            <h3>{gameSchedule.betType}</h3>
            <div className={styles['game-schedule-wrapper']}>
                <GameSchedule title={"Closests upcomings"} games={gameSchedule.upcoming} />
                <GameSchedule title={"Closets results"} games={gameSchedule.results} />
            </div>
        </div>
    );
};
function mapStateToProps(state: any) {
    return {
        text: state.text,
        gameSchedule: state.gameSchedule
    };
}

function mapDispatchToProps(dispatch: any) {
    return {
        getGameSchedule: (text: string) => dispatch(getGameSchedule(text))
    };
}

const InfoSection = connect(mapStateToProps, mapDispatchToProps)(ConnectedInfoSection);
export default InfoSection;
