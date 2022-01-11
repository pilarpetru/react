import React from 'react';
import { Text } from '../context/LangTextImg';

export default function Siguiente(props) {
    let contador = props.contador;
    function next() {
        props.nextQuiz();
    }

    return (
        <button id="botones" disabled={contador === 9 ? true : false}
            onClick={() => { next(); }}>
            <Text tid="siguiente" />
        </button>
    );
}
