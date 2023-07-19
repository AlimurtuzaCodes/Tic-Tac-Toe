import Player from "./Player";

const PlayerSelection = ({ player, resetGame }) => {
  return (
    <div className="player_selection_container">
      <Player player={player} color="bg-xColor" title="X" />

      <div className="flex flex-col h-full pt-6 md:pt-0 md:flex-row md:w-full justify-start items-center">
        <h1 className="font-bold text-2xl text-gray-600 text-center flex-1">
          VS
        </h1>
        <div className="flex-1 grid place-items-center md:mr-6">
          <button className="reset_btn" onClick={resetGame}>
            RESTART
          </button>
        </div>
      </div>

      <Player player={player} color="bg-oColor" title="O" />
    </div>
  );
};

export default PlayerSelection;
