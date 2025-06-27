import { useState } from "react";


export default function GameBoard({ onSelectSquare, board }) {

  //   const [gameBoard, setGameBoard] = useState(initialGameBoard);

  //   function handleSelectSquare(rowIndex, colIndex) {
  //     setGameBoard((prevGameBoard) => {
  //       const updateBoard = [
  //         ...prevGameBoard.map((innerArray) => [...innerArray]),
  //       ];
  //       updateBoard[rowIndex][colIndex] = activePlayerSymbol; // Use activePlayerSymbol prop
  //       return updateBoard;
  //     });

  //     onSelectSquare(rowIndex, colIndex); // Notify parent component of the selection

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => onSelectSquare(rowIndex, colIndex)} disabled={!!playerSymbol}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
