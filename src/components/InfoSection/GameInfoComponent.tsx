import React, { useState } from "react";
import { GameInfo } from '../../types/index';
import { Collapse, Button, ListGroupItem } from "react-bootstrap";
import Moment from 'react-moment';


const GameInfoComponent: React.FC<GameInfo> = ({ id, startTime, tracks, favorites }: GameInfo) => {
    const [open, setOpen] = useState(false);

    return (
        <ListGroupItem>
            <Button
                onClick={() => setOpen(!open)}
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
                <div id="example-collapse-text">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                    terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                    labore wes anderson cred nesciunt sapiente ea proident.
                </div>
            </Collapse>
        </ListGroupItem>
    );
};

export default GameInfoComponent;
