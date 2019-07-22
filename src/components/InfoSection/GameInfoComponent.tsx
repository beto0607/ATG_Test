import React, { useState } from "react";
import { Collapse, Button, ListGroupItem } from "react-bootstrap";
import Moment from 'react-moment';
import styles from './info-section.module.scss';
import { GameInfo } from '../../types/index';
import { GameDataComponent } from './GameDataComponent';

const GameInfoComponent: React.FC<GameInfo> = ({ id, startTime }: GameInfo) => {
    const [open, setOpen] = useState(false);
    const handleOpenClick = () => {
        setOpen(!open);
    }
    return (
        <ListGroupItem className={styles['list-group-item']}>
            <Button
                onClick={handleOpenClick}
                aria-controls="example-collapse-text"
                aria-expanded={open}
            >
                Race starts:{' '}
                <Moment
                    format="HH:mm"
                    date={startTime}
                    interval={0}
                />
            </Button>
            <Collapse in={open}>
                <div>
                    <GameDataComponent parent_id={id} load={open} />
                </div>
            </Collapse>
        </ListGroupItem>
    );
};
export default GameInfoComponent;
