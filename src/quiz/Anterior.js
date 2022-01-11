import React from 'react';
import { Text } from '../context/LangTextImg';

export default function Anterior(props) {
    let contador = props.contador;
    function previous() {
        props.previousQuiz();
    }

    return (
        <button id="botones" disabled={contador === 0 ? true : false}
            onClick={() => { previous(); }} >
            <Text tid="anterior" />
        </button>
    );
}