import React from "react";
import { GameInfo } from '../../types/index';
import { ListGroup, Container, Row, Col, Badge } from "react-bootstrap";
import GameInfoComponent from './GameInfoComponent';

interface Props {
    title: string;
    games: Array<GameInfo>;
}

const GameSchedule: React.FC<Props> = ({ title, games }: Props) => {
    return (
        <Container>
            <Row>
                <Col>
                    <h3>
                        Game: {' ' + title}
                    </h3>
                </Col>
            </Row>
            <Row>
                <Col>
                    <ListGroup>
                        {games.map((element) => <GameInfoComponent key={element.id} {...element} />)}
                    </ListGroup>
                </Col>

            </Row>
        </Container>
    );
};

export default GameSchedule;
