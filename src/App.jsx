import { useState } from "react";
import BoardDecoration from "./components/BoardDecoration";
import BoardItem from "./components/BoardItem";
import PlayerSelection from "./components/PlayerSelection";
import ResultModal from "./components/ResultModal";
const board_config = [
  { id: "a", extrastyle: "rounded-tl-[32px]" },
  { id: "b" },
  { id: "c", extrastyle: "rounded-tr-[32px]" },
  { id: "d" },
  { id: "e" },
  { id: "f" },
  { id: "g", extrastyle: "rounded-bl-[32px]" },
  { id: "h" },
  { id: "i", extrastyle: "rounded-br-[32px]" },
];
const initialboard = Array(9).fill(null);
function App() {
  const [board, setBoard] = useState(initialboard);
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState(null);
  const [winningCells, setWinningCells] = useState([]);
  const handleOnClick = (index) => {
    if (board[index]) return;
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
        setWinningCells([a, b, c]);
        return;
      }
    }
    if (board.every((cell) => cell != null)) setWinner("draw");
  };
  const resetGame = () => {
    setBoard(initialboard);
    setCurrentPlayer("X");
    setWinner(null);
    setWinningCells([]);
  };
  return (
    <main className="bg-slate-500 h-screen flex flex-row justify-center items-center">
      {/* <button className="bg-secondary rounded-lg px-4 py-2 text-tertiary font-bold text-xl tracking-widest">
        RESTART
      </button> */}
      {/* Result Modal */}
      {winner && <ResultModal resetGame={resetGame} />}

      <PlayerSelection player={currentPlayer} />

      <div className="w-[50%] h-[90%] grid_layout relative">
        <div className="bg-secondary rounded-tl-[32px] rounded-lg board_back_shadow a back_grid_item relative">
          <BoardDecoration style="left-5 top-10" />
          <h1 className="font-black text-base text-[#EED3A3] tracking-[10px] absolute top-6 right-16">
            TIC
          </h1>
        </div>
        <div className="bg-secondary rounded-lg board_back_shadow b back_grid_item flex justify-center">
          <h1 className="font-black text-base text-[#EED3A3] tracking-[10px] mt-6">
            TAC
          </h1>
        </div>
        <div className="bg-secondary rounded-tr-[32px] rounded-lg board_back_shadow  c back_grid_item relative">
          <BoardDecoration style="right-5 top-10" />
          <h1 className="font-black text-base text-[#EED3A3] tracking-[10px] absolute top-6 left-16">
            TOE
          </h1>
        </div>
        <div className="bg-secondary rounded-lg board_back_shadow d back_grid_item"></div>
        <div className="bg-secondary rounded-lg board_back_shadow  e back_grid_item"></div>
        <div className="bg-secondary rounded-bl-[32px] rounded-lg board_back_shadow  f back_grid_item relative">
          <BoardDecoration style="bottom-10 left-5" rotate="rotate-180" />
        </div>
        <div className="bg-secondary rounded-lg board_back_shadow  g back_grid_item"></div>
        <div className="bg-secondary rounded-br-[32px] rounded-lg board_back_shadow h back_grid_item relative">
          <BoardDecoration style="bottom-10 right-5" rotate="rotate-180" />
        </div>
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
              winner={winner}
              winningCells={winningCells}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

export default App;
