import React from 'react';
import { Text } from '../context/LangTextImg';

export default function Score(props) {
    let puntos = props.puntos;

    return (
        <div className='Score'>
            <h2>
                <Text tid="score" />: {puntos}
            </h2>
        </div>
    );
}