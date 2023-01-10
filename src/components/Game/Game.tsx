import { useEffect, useState } from "react";
import Board from "../Board";
import { RestartButton } from "./RestartButton";
import { StatusBar } from "./StatusBar";

const combinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const calculateWinner = (squares: Array<any>) => {
  for (let i = 0; i < combinations.length; i++) {
    const [a, b, c] = combinations[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { wins: combinations[i], winner: squares[a] };
    }
  }
  return { wins: [], winner: null };
};

const calculateMoves = (board: Array<any>) => {
  return board.filter((item) => item === null).length;
};

const calculateAIMove = (squares: Array<any>) => {
  for (let i = 0; i < combinations.length; i++) {
    const [a, b, c] = combinations[i];
    
    if (squares[a] === "O" && squares[b] === "O" && squares[c] === null) {
      return c;
    } else if (squares[a] === "O" && squares[b] === null && squares[c] === "O") {
      return b;
    } else if (squares[a] === null && squares[b] === "O" && squares[c] === "O") {
      return a;
    } else if(squares[a] === "X" && squares[b] === "X" && squares[c] === null) {
      return c;
    } else if(squares[a] === "X" && squares[b] === null && squares[c] === "X") {
      return b;
    } else if(squares[a] === null && squares[b] === "X" && squares[c] === "X") {
      return a;
    }
  }

  for (let i = 0; i < squares.length; i++) {
    if (squares[i] === null) {
      return i;
    }
  }

  return -1;
}

export const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  const { wins, winner } = calculateWinner(board);
  const movesLeft = calculateMoves(board);
  const gameIsOver = movesLeft === 0;

  useEffect(() => {
    if (!xIsNext && !winner && !gameIsOver) {
      const move = calculateAIMove(board);
      computerMoveHandle(move);
    }
  }, [xIsNext]);

  const restart = () => {
    setBoard(Array(9).fill(null));
    setXisNext(true);
  };

  const computerMoveHandle = (i: number) => {
    if (i === -1) return;
    const boardCopy = [...board];

    boardCopy[i] = xIsNext ? "X" : "O";
    setBoard(boardCopy);
    setXisNext(!xIsNext);
  };

  const handleClick = (i: number) => {
    const boardCopy = [...board];
    // If user click an occupied square or if game is won, return
    if (winner || !xIsNext || boardCopy[i]) return;
    // Put an X or an O in the clicked square
    boardCopy[i] = xIsNext ? "X" : "O";
    setBoard(boardCopy);
    setXisNext(!xIsNext);
  };

  return (
    <div className="flex flex-col p-4 mx-auto justify-center">
      <StatusBar gameIsOver={gameIsOver} winner={winner} xIsNext={xIsNext} />
      <Board wins={wins} squares={board} onClick={handleClick} />
      <RestartButton absolute={false} onClick={restart} />
    </div>
  );
};
