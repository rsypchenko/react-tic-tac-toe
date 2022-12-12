import { useState } from "react";
import { Board } from "../Board/Board";
import { RestartButton } from "./RestartButton";
import { StatusBar } from "./StatusBar";

const calculateWinner = (squares: Array<any>) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

const calculateMoves = (board: Array<any>) => {
  return board.filter(item => item === null).length;
}

export const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(board);
  const movesLeft = calculateMoves(board);
  const gameIsOver = movesLeft === 0;

  const restart = () => {
    setBoard(Array(9).fill(null));
  };

  const handleClick = (i: number) => {
    const boardCopy = [...board];
    // If user click an occupied square or if game is won, return
    if (winner || boardCopy[i]) return;
    // Put an X or an O in the clicked square
    boardCopy[i] = xIsNext ? "X" : "O";
    setBoard(boardCopy);
    setXisNext(!xIsNext);
  };

  return (
    <div className="flex flex-col p-4 mx-auto justify-center">
      <StatusBar gameIsOver={gameIsOver} winner={winner} xIsNext={xIsNext} restart={restart} />
      <Board squares={board} onClick={handleClick} />
      <RestartButton absolute={false} onClick={restart} />
    </div>
  );
};
