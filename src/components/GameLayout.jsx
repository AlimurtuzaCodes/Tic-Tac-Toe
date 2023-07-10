import { useState } from "react";
import BoardItem from "./BoardItem";
import PlayerSelection from "./PlayerSelection/PlayerSelection";
import ResultModal from "./ResultModal/ResultModal";
import BoardFrameGrid from "./BoardFrame/BoardFrameGrid";
import { board_config } from "../constants";

const initboard = Array(9).fill(null);

const GameLayout = () => {
  const [board, setBoard] = useState(initboard);
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState(null);

  const handleOnClick = (index) => {
    if (board[index] || winner) return;
    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);
    checkWinner(newBoard);
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  };

  const checkWinner = (board) => {
    const winningConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (const condition of winningConditions) {
      const [a, b, c] = condition;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setWinner(board[a]);
        return;
      }
    }
    if (board.every((cell) => cell != null)) setWinner("draw");
  };

  const resetGame = () => {
    setBoard(initboard);
    setCurrentPlayer("X");
    setWinner(null);
  };

  return (
    <>
      {/* Result Modal */}

      {winner && <ResultModal resetGame={resetGame} winner={winner} />}

      <PlayerSelection player={currentPlayer} resetGame={resetGame} />

      <div className="w-[45%] h-[90%] grid_layout relative">
        {/* Board Frame Background */}
        <BoardFrameGrid />

        {/* Game Board */}
        <div className="absolute w-[82%] h-[82%] z-10 m-auto top-0 bottom-0 left-0 right-0 board_layout">
          {board_config.map((cell, index) => (
            <BoardItem
              key={`${cell.id}index`}
              index={index}
              style={`${cell.id} ${cell.extrastyle}`}
              currentPlayer={currentPlayer}
              handleOnClick={handleOnClick}
              board={board}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default GameLayout;
