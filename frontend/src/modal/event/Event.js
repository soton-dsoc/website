import React from 'react';
import './Event.css';
import { Button, Group, Card, Container } from '@mantine/core';

class EventModal extends React.Component {
    render() {
        return (
            <Container>
            <Group position="center" direction="column" grow>
                <Button variant="outline">1</Button>
                <Button variant="outline">2</Button>
                <Button variant="outline">3</Button>
            </Group>
            </Container>
        )
    }
}

export default EventModal;
