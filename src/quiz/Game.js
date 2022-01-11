import React, { useEffect, useState } from 'react';

import Anterior from './Anterior';
import Author from './Author';
import Question from './Question';
import Score from './Score';
import Siguiente from './Siguiente';
import Submit from './Submit';
import Tempo from './Tempo';
import Reset from './Reset';

export function Game(props) {
    function reset() {
        props.reset();
    }
    function terminar() {
        props.terminar();
    }

    let asked = props.ask;
    let respuestaUser = React.createRef();
    let finis = props.fin;

    const [thisQuiz, setThisQuiz] = useState(asked[0].question);
    const [contador, setContador] = useState(0);
    const [puntos, setPuntos] = useState(0);
    const [answers, setAnswers] = useState(['', '', '', '', '', '', '', '', '', '']);

    //------------------------------------------------Temporizador---------------------------------------------------
    const initMin = 10;
    const initSec = 0;
    const [min, setMin] = useState(initMin);
    const [sec, setSec] = useState(initSec);
    useEffect(() => {
        let interv = setInterval(() => {
            if (sec === 1) {
                if (min === 0) {
                    clearInterval(interv);
                    comprobar();
                    terminar();
                }
            }
            if (sec === 0) {
                if (min > 0) {
                    setMin(min - 1);
                    setSec(59);
                }
            }
            if (sec > 0) {
                setSec(sec - 1);
            }
        }, 1000);
        return () => {
            clearInterval(interv);
        };
    });
    //------------------------------------------------Anterior---------------------------------------------------
    function previousQuiz() {
        saveAnswers();

        let contTemp = contador - 1;
        setContador(contTemp);
        setThisQuiz(asked[contTemp].question);
        previous(contTemp);
    }
    //------------------------------------------------Siguiente---------------------------------------------------
    function nextQuiz() {
        saveAnswers();

        let contTemp = contador + 1;
        setContador(contTemp);
        setThisQuiz(asked[contTemp].question);
        previous(contTemp);
    }
    //------------------------------------------------SaveAnswers---------------------------------------------------
    function saveAnswers() {
        let arrayTemp = answers;
        arrayTemp[contador] = respuestaUser.current.value.toLowerCase().trim();
        setAnswers(arrayTemp);
    }
    //------------------------------------------------Comprobar-----------------------------------------------------
    function comprobar() {
        saveAnswers();
        let punto = 0;
        for (var i = 0; i < 10; i++) {
            if (answers[i] === asked[i].answer.toLowerCase().trim()) {
                punto = punto + 1;
            }
        }
        setPuntos(punto);
    }
    //------------------------------------------------Enter---------------------------------------------------------
    function enterPressed(e) {
        var code = e.keyCode || e.which;
        if (code === 13) { // El 13 es el de keycode
            if (contador === 9) {
                comprobar();
                terminar();
            } else {
                nextQuiz();
            }
        }
    }
    //-------------------------------------------Respuesta guardada-------------------------------------------------
    function previous(index) {
        respuestaUser.current.value = answers[index];
    }
    //--------------------------------------------------------------------------------------------------------------
    return (
        <div className="Game">
            {finis ? (
                <Score puntos={puntos} />
            ) : (
                <div>
                    <p>
                    {asked.map((quiz) =>
                        <button id="index"
                            onClick={() => {
                                saveAnswers();

                                setThisQuiz(quiz.question);
                                setContador(asked.indexOf(quiz));
                                previous(asked.indexOf(quiz));
                            }}>
                            {asked.indexOf(quiz) + 1}
                        </button>
                    )}
                    </p>
                    <Tempo min={min} sec={sec} />
                    <div id="question">
                        <Question asked={asked} thisQuiz={thisQuiz} contador={contador}/>
                        <input id="input"
                            type="text"
                            placeholder="..."
                            ref={respuestaUser}
                            onKeyPress={enterPressed.bind(this)}
                        ></input>
                        <Author asked={asked} contador={contador} />

                        
                    </div>
                    <Anterior contador={contador} previousQuiz={previousQuiz}></Anterior>
                    <Siguiente contador={contador} nextQuiz={nextQuiz}></Siguiente>

                    <Submit comprobar={comprobar} terminar={terminar} />

                </div>
            )
            }
            <Reset reset={reset} />
        </div>
    );
}

export default Game;