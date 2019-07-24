import React, { useState } from "react";
import { Collapse, Badge, Alert } from "react-bootstrap";
import { Race, RaceStart } from '../../types/index';
import Moment from "react-moment";
import styles from './race.module.scss';

export const StartComponent: React.FC<RaceStart> = ({ number, horse, driver }: RaceStart) => {
    const [open, setOpen] = useState(false);
    return (
        <div onClick={() => setOpen(!open)} className={styles['start-container']}>
            <div className={styles['start-title-container']}>
                <Badge variant="info">Start: #{number}</Badge>
                <span>Horse: <strong>{horse.name}</strong></span>
                <span>Driver: <strong>{`${driver.firstName} ${driver.lastName}`}</strong></span>
            </div>
            <Collapse in={open}>
                <div>
                    <span>Trainer: {`${horse.trainer.firstName} ${horse.trainer.lastName}`}</span>
                    <span>Horse father: {`${horse.pedigree.father.name}`}</span>
                </div>
            </Collapse>
        </div>
    )
};
export const RaceComponent: React.FC<Race> = ({ id, name, number, scheduledStartTime, starts }: Race) => {
    return (
        <div className={styles['race-container']}>
            <div className={styles['race-title-container']}>
                <Alert variant='info'>
                    <span>#{number} {name && <strong>- {name}</strong>}</span>
                </Alert>
                <Alert variant='info'>
                    Start time:
                    <Moment date={scheduledStartTime} format='HH:mm:ss' />
                </Alert>
            </div>
            {starts.map(start => <StartComponent key={`${id}_${start.number}`} {...start} />)}
        </div>
    );
};