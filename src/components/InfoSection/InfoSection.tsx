import React from 'react';
import styles from './info-section.module.scss';
import { connect } from "react-redux";
import GameSchedule from './GameSchedule';
import { GameSchedule as GameScheduleType } from '../../types/index';
import { Container, Row, Col } from "react-bootstrap";

interface TitleProps {
    text: string;
    betType: string;
}
const Title: React.FC<TitleProps> = 
    ({ text, betType }: TitleProps) => (<h2>{!text ? 'You can search for a Game now' : (betType || `Game "${text}" not found`)}</h2>);

interface ConnectedInfoSectionProps {
    text: string;
    gameSchedule: GameScheduleType;
};

const ConnectedInfoSection: React.FC<ConnectedInfoSectionProps> = ({ text, gameSchedule }: ConnectedInfoSectionProps) => (
    <Container className={styles['info-section']}>
        <Row>
            <Col className={styles['title-wrapper']}>
                <Title text={text} betType={gameSchedule.betType || ''} />
            </Col>
        </Row>
        <Row>
            <Col>
                {gameSchedule.upcoming && <GameSchedule title={"Closests upcomings"} games={gameSchedule.upcoming || []} />}
            </Col>
            <Col>
                {gameSchedule.results && <GameSchedule title={"Closets results"} games={gameSchedule.results || []} />}
            </Col>
        </Row>
    </Container>
);

function mapStateToProps(state: any) {
    return {
        text: state.text,
        gameSchedule: state.gameSchedule
    };
}

const InfoSection = connect(mapStateToProps)(ConnectedInfoSection);
export default InfoSection;
