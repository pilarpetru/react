import React from 'react';
import { Text } from '../context/LangTextImg';

import Image from './Image';

export default function Question(props) {
    let asked = props.asked;
    let thisQuiz = props.thisQuiz;
    let contador = props.contador;

    return (
        <div className="Question">
            <Image asked={asked} contador={contador} />
            <p id="pquestion">
                <h1 id="ques1"><Text tid="question" /> {contador + 1}</h1>
                <h1 id="ques2">{thisQuiz}</h1>
            </p>
        </div>
    )
}