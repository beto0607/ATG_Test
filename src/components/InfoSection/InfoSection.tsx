import React, { useState } from 'react';
import styles from './info-section.module.scss';
import { connect } from "react-redux";
import { getGameSchedule } from "../../actions/actions";
import { GameSchedule } from './GameSchedule';
const ConnectedInfoSection: React.FC = (props: any) => {
    if (!props.text) {
        return (
            <div className={styles['info-section']}>
                <h3>You can search for a Game now</h3>
            </div>
        )
    }
    console.log(props);
    if (!props.game_schedule.betType) {
        return (
            <div className={styles['info-section']}>
                <h3>404 - Game "{props.text}" not found</h3>
            </div>
        )
    }
    return (
        <div className={styles['info-section']}>
            <h3>{props.game_schedule.betType}</h3>
            <div className={styles['game-schedule-wrapper']}>
                <GameSchedule title={"Closests upcomings"}></GameSchedule>
                <GameSchedule title={"Closets results"}></GameSchedule>
            </div>
        </div>
    );
};
function mapStateToProps(state: any) {
    return {
        text: state.text,
        game_schedule: state.game_schedule
    };
}

function mapDispatchToProps(dispatch: any) {
    return {
        getGameSchedule: (text: string) => dispatch(getGameSchedule(text))
    };
}

const InfoSection = connect(mapStateToProps, mapDispatchToProps)(ConnectedInfoSection);
export default InfoSection;
