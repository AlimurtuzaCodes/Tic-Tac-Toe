import { playerStyle } from "../../constants";
import ResultFrameMisc from "./ResultFrameMisc";

const ResultModal = ({ resetGame, winner }) => {
  const player = playerStyle.find((item) => item.player === winner);
  console.log(player.title);
  const resultStyle = {
    frame: {
      background:
        "linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.06) 18.75%, rgba(0, 0, 0, 0) 49.71%, rgba(0, 0, 0, 0.04) 82.81%, rgba(0, 0, 0, 0.2) 100%)",
      backgroundColor: `${player.color}`,
      boxShadow: "-16px 28px 108px 0px rgba(0, 0, 0, 0.55)",
    },
  };
  return (
    <div className="w-full h-[50%] flex flex-col justify-center items-center gap-4 absolute z-20">
      <ResultFrameMisc direction="flex-col" />

      <div
        style={resultStyle.frame}
        className="w-full h-full  grid place-items-center relative"
      >
        <div className="w-[90%] h-[90%] rounded-[48px] border-2 border-dashed border-gray-600 relative flex flex-col justify-center items-center gap-10">
          {player.title !== "DRAW" && (
            <img
              src={player.icon}
              alt="player"
              className="w-60 h-60  absolute -top-40 z-10"
            />
          )}

          <div className="w-8 h-8 circle_gradient rounded-full absolute top-6 left-6" />
          <div className="w-8 h-8 circle_gradient rounded-full absolute top-6 right-6" />
          <div className="w-8 h-8 circle_gradient rounded-full absolute bottom-6 left-6" />
          <div className="w-8 h-8 circle_gradient rounded-full absolute bottom-6 right-6" />
          {/* Main Content */}

          <h1 className="font-extrabold text-7xl tracking-widest text-secondary">
            {player.title}
          </h1>
          <button
            onClick={resetGame}
            className="bg-secondary rounded-lg px-6 py-1 text-tertiary font-bold text-xl tracking-widest"
          >
            RESTART
          </button>
        </div>
      </div>

      <ResultFrameMisc direction="flex-col-reverse" />
    </div>
  );
};

export default ResultModal;
