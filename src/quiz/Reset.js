import React from 'react';
import { Text } from '../context/LangTextImg';

export default function Reset(props) {
    function reset() {
        props.reset();
    }

    return (
        <button id="botones" onClick={() => { reset(); }}>
            <Text tid="reset" />
        </button>
    );
}