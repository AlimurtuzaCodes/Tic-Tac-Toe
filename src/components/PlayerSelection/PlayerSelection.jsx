import { playerO, playerX, resetIcon } from "../../assets";
import Hollow from "./Hollow";

const PlayerSelection = ({ player, resetGame }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-16 -mr-8 w-96">
      <div className="bg-xColor w-full h-28 rounded-s-[40px] flex justify-start items-center pl-4 gap-4">
        <p className="font-light text-3xl text-gray-600">
          <span className="font-bold text-5xl text-secondary">0</span>
          /0
        </p>
        {player === "X" ? <img src={playerX} alt="playerX" /> : <Hollow />}
      </div>
      <div className="flex flex-row justify-start items-center w-full pl-4">
        <h1 className="font-bold text-2xl text-gray-600"> VS</h1>
        <div className="flex-[0.9] grid place-items-center">
          {/* <img src={resetIcon} /> */}
          <button
            className="bg-secondary rounded-lg px-4 py-2 text-tertiary font-bold text-xl tracking-widest"
            onClick={resetGame}
          >
            RESTART
          </button>
        </div>
      </div>
      <div className="bg-oColor w-full h-28 rounded-s-[40px] flex justify-start items-center pl-4 gap-4">
        <p className="font-light text-3xl text-gray-600 ">
          <span className="font-bold text-5xl text-secondary">0</span>
          /0
        </p>
        {player === "O" ? <img src={playerO} alt="playerO" /> : <Hollow />}
      </div>
    </div>
  );
};

export default PlayerSelection;
