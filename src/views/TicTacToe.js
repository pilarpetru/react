import React, { useState, useEffect } from 'react';
import Header from '../tictactoe/Header.jsx';
import Board from '../tictactoe/Board.jsx';
import Reset from '../tictactoe/Reset.jsx';
import { Text } from '../context/LangTextImg';
import '../TicTacToe.css';

const PLAYERX = "Player 1 - Xs";
const PLAYER0 = "Player 2 - 0s";

export function TicTacToe(props) {
  const [turn, setTurn] = useState(PLAYERX);
  const [moves, setMoves] = useState(0);
  const [values, setValues] = useState([
    ['-', '-', '-'],
    ['-', '-', '-'],
    ['-', '-', '-']
  ]);

  useEffect(() => {
    // Update the document title using the browser API
    document.title = `Turn of ${turn}`;
  });

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://myjson.dit.upm.es/api/bins/ccr5");
      const myjson = await res.json();
      console.log(myjson);
      setTurn(myjson.turn);
      setMoves(myjson.moves);
      setValues(myjson.values);
    }

    fetchData();
  }, []);

  function appClick(rowNumber, columnNumber) {
    let valuesCopy = JSON.parse(JSON.stringify(values));
    let newMovement = turn === PLAYERX ? 'X' : '0';
    valuesCopy[rowNumber][columnNumber] = newMovement;
    setTurn(turn === PLAYERX ? PLAYER0 : PLAYERX);
    setValues(valuesCopy);
    setMoves(moves + 1);
  }

  function resetClick() {
    setTurn(PLAYERX);
    setMoves(0);
    setValues([
      ['-', '-', '-'],
      ['-', '-', '-'],
      ['-', '-', '-']
    ]);
  }

  let turnoLang = <Text tid="turnOf" />;
  let text = turn;

  return (
    <div>
      <p class="T">
        <h3 ><Header turn={turnoLang} text={text} /> </h3>
        <h2 > <Board values={values} appClick={appClick} /></h2>
        <h3 ><Text tid="moves" />{moves}</h3>
        <Reset resetClick={resetClick}></Reset>
      </p>
    </div>
  );
}

export default TicTacToe;