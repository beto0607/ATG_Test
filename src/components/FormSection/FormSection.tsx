import React, { useState } from 'react';
import { Form, FormControlProps, Button } from 'react-bootstrap';
import styles from './form-section.module.scss';


const FormSection: React.FC = () => {
    const [text, setText] = useState('');
    const handleSumbit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(text);
    };
    return (
        <div className={styles['form-section']}>
            <Form onSubmit={handleSumbit}>
                <Form.Group controlId="formBasicEmail">
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

export default FormSection;