import { useState } from "react";
import Square from "./Square";
import { generateWinningLines } from "../util/winningCombination";
import { CONST } from "../util/const";

export default function Board({ xIsNext, squares, onPlay }) {
  const boardSize = CONST.boardSize;

  const handleClick = (index) => {
    if (squares[index] || calculateWinner()) return;
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[index] = "X";
    } else {
      nextSquares[index] = "O";
    }
    onPlay(nextSquares);
  };

  const calculateWinner = () => {
    const lines = generateWinningLines(boardSize);

    for (const line of lines) {
      const firstSymbol = squares[line[0]];
      if (
        firstSymbol &&
        line.every((index) => squares[index] === firstSymbol)
      ) {
        return firstSymbol; // Winner found
      }
    }

    return null; // No winner yet
  };

  const winner = calculateWinner();
  const status = winner
    ? "Winner: " + winner
    : "Next player: " + (xIsNext ? "X" : "O");

  return (
    <>
      <div className="status">{status}</div>
      {Array.from({ length: boardSize }, (_, rowIndex) => (
        <div key={rowIndex} className="board-row">
          {Array.from({ length: boardSize }, (_, colIndex) => {
            const index = rowIndex * boardSize + colIndex;
            return (
              <Square
                key={index}
                value={squares[index]}
                onSquareClick={() => handleClick(index)}
              />
            );
          })}
        </div>
      ))}
    </>
  );
}
