import React from 'react';
import { Text } from '../context/LangTextImg';

export default function Submit(props) {
    function comprobar() {
        props.comprobar();
    }
    function terminar() {
        props.terminar();
    }

    return (
        <button id="botones" onClick={() => {
            comprobar();
            terminar();
        }}>
            <Text tid="submit" />
        </button>
    );
}