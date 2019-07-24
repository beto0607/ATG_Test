import React, { useState } from 'react';
import { Form, FormControlProps, Button } from 'react-bootstrap';
import styles from './form-section.module.scss';
import { connect } from "react-redux";
import { getGameSchedule } from "../../actions/actions";

export interface ConnectedFormProps {
    getGameSchedule: any;
};
export const ConnectedForm: React.FC<ConnectedFormProps> = ({ getGameSchedule }: ConnectedFormProps) => {
    const [text, setText] = useState('');
    const handleSumbit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (text.length) {
            getGameSchedule(text);
        }
    };
    return (
        <div className={styles['form-section']}>
            <Form onSubmit={handleSumbit} noValidate={true} action='#'>
                <Form.Group controlId="gameType">
                    <Form.Label>Search for a game</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter game type"
                        onChange={(event: React.FormEvent<FormControlProps>) => { setText(event.currentTarget.value || '') }}
                    />
                </Form.Group>
                <Button variant="primary" type="submit" block={true} disabled={!text}>
                    Search
                </Button>
            </Form>

        </div>
    );
};

function mapDispatchToProps(dispatch: any) {
    return {
        getGameSchedule: (text: string) => dispatch(getGameSchedule(text))
    };
}

const FormSection = connect(null, mapDispatchToProps)(ConnectedForm);
export default FormSection;
