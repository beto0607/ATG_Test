import React from 'react';
import styles from './info-section.module.scss';
import { connect } from "react-redux";
import GameSchedule from './GameSchedule';
import { GameSchedule as GameScheduleType } from '../../types/index';
import { Container, Row, Col, Alert } from "react-bootstrap";
import { ApplicationState } from '../../types/index';

//Title component for isolate logic
interface TitleProps { text: string; betType: string; };
const Title: React.FC<TitleProps> = ({ text, betType }: TitleProps) => (
    <Alert variant={!text ? 'info' : (!betType ? 'danger' : 'success')}>
        <h2>{!text ? 'You can search for a Game now' : (betType ? `Bet type: ${betType}` : `Game "${text}" not found`)}</h2>
    </Alert>
);

interface ConnectedInfoSectionProps {
    text: string;
    gameSchedule: GameScheduleType;
};
const ConnectedInfoSection: React.FC<ConnectedInfoSectionProps> = ({ text, gameSchedule }: ConnectedInfoSectionProps) => (
    <Container className={styles['info-section']}>
        <Row>
            <Col>
                <Title text={text} betType={gameSchedule.betType || ''} />
            </Col>
        </Row>
        <Row>
            <Col xs={12} md={6}>
                {gameSchedule.upcoming && <GameSchedule title={"Closests upcomings"} games={gameSchedule.upcoming || []} />}
            </Col>
            <Col xs={12} md={6}>
                {gameSchedule.results && <GameSchedule title={"Closets results"} games={gameSchedule.results || []} />}
            </Col>
        </Row>
    </Container>
);

function mapStateToProps(state: ApplicationState) {
    return {
        text: state.text,
        gameSchedule: state.gameSchedule
    };
}

const InfoSection = connect(mapStateToProps)(ConnectedInfoSection);
export default InfoSection;
