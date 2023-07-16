import Player from "./Player";

const PlayerSelection = ({ player, resetGame }) => {
  return (
    <div className="flex flex-col justify-between items-center rotate-90 lg:rotate-0 -mb-[6%] w-[70%] h-[35%] md:h-[45%] md:w-[45%] md:-mb-[10%]">
      <Player player={player} color="bg-xColor" title="X" />

      <div className="flex flex-row justify-center items-center w-full">
        <h1 className="font-bold text-2xl text-gray-600 text-center -rotate-90 flex-1">
          VS
        </h1>
        <div className="flex-1 grid place-items-center -rotate-90 md:pb-6">
          <button
            className="bg-secondary rounded-lg px-4 py-2 text-tertiary font-bold text-[10px] md:text-xl tracking-widest"
            onClick={resetGame}
          >
            RESTART
          </button>
        </div>
      </div>

      <Player player={player} color="bg-oColor" title="O" />
    </div>
  );
};

export default PlayerSelection;
