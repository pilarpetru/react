import React, { useEffect, useState } from 'react';
import { quizzes } from '../assets/mock-data';

import '../Quiz.css';
import HeaderQuiz from './HeaderQuiz';
import Game from './Game';

export function Quiz() {
    const [allQuizzes, setAllQuizzes] = useState([]);
    const [asked, setAsked] = useState([]);
    const [fin, setFin] = useState(false);

    useEffect(() => {
        document.title = `Quiz game`;
      });  
    //-----------------------------------------------fetch
    const [loading, setLoading] = useState(true);
    const [restart, setRestart] = useState(0);

    useEffect(() => {
        const url = "https://core.dit.upm.es/api/quizzes/random10wa?token=c3097032ac17a3bc18ab"
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                if (json.length === 0) {
                    setAllQuizzes([...quizzes]);
                } else {
                    setAllQuizzes(json);
                }
                setLoading(false);
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, [restart]);

    function reset() {
        setAsked([]);
        setLoading(true);
        setFin(false);
        setRestart(restart + 1);
    }
    function terminar() {
        setFin(true);
    }
    //----------------------------------------------------
    useEffect(() => {
        if (allQuizzes.length !== 0) {
            const preguntas = [];
            const iniciar = async () => {
                for (var i = 0; i <= 9; i++) {
                    var j = 0;
                    while (j < 100) {
                        const random = allQuizzes[Math.floor((Math.random() * allQuizzes.length))];
                        var quizTemp = random;
                        if (preguntas.indexOf(quizTemp) === -1) {
                            preguntas[i] = quizTemp;
                            break;
                        } else {
                            j = j + 1;
                            continue;
                        }
                    }
                }
                setFin(false);
                setAsked(preguntas);
            };

            iniciar()
        }
    }, [allQuizzes]);

    if (loading) return "Loading...";

    return (
        <div className="Quiz">
            <HeaderQuiz />
            <Game terminar={terminar} reset={reset} fin={fin} ask={asked} />
        </div>
    )
}

export default Quiz;