import React from 'react';
import {Card} from 'react-bootstrap';
import { Text } from '../context/LangTextImg';

export default function Header(props) {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title><Text tid="turn" /></Card.Title>
          <Card.Text>
            {props.turn}
            {props.text} 
          </Card.Text>
        </Card.Body>
      </Card>
    );
    }