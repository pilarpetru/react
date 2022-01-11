import React from 'react';
import { Text } from '../context/LangTextImg';
import { BsFillCheckCircleFill } from "react-icons/bs";

export default function HeaderQuiz(props) {
    return (
        <div id="headerQuiz">
            <BsFillCheckCircleFill id="checkCircle"/>
            <h1 id="juegoQuiz"><Text tid="headerQuiz" /> </h1>
        </div>
    );
}