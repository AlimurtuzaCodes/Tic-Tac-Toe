import { playerStyle } from "../../constants";
import ResultFrameMisc from "./ResultFrameMisc";

const ResultModal = ({ resetGame, winner }) => {
  const player = playerStyle.find((item) => item.player === winner);
  const resultStyle = {
    frame: {
      background:
        "linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.06) 18.75%, rgba(0, 0, 0, 0) 49.71%, rgba(0, 0, 0, 0.04) 82.81%, rgba(0, 0, 0, 0.2) 100%)",
      backgroundColor: `${player.color}`,
      boxShadow: "-16px 28px 108px 0px rgba(0, 0, 0, 0.55)",
    },
  };
  return (
    <div className="w-full h-[35%] md:h-[50%] lg:h-[25rem] flex flex-col justify-center items-center gap-4 absolute z-20">
      <ResultFrameMisc direction="flex-col" />

      <div
        style={resultStyle.frame}
        className="w-full h-full  grid place-items-center relative"
      >
        <div className="result_container">
          {player.title !== "DRAW" && (
            <img
              src={player.icon}
              alt="player"
              className="w-28 h-28 md:w-40 md:h-40 absolute -top-20 md:-top-28 z-10"
            />
          )}

          <div className="w-4 h-4 md:w-8 md:h-8 circle_gradient rounded-full absolute top-4 left-4 md:top-6 md:left-6" />
          <div className="w-4 h-4 md:w-8 md:h-8 circle_gradient rounded-full absolute  top-4 right-4 md:top-6 md:right-6" />
          <div className="w-4 h-4 md:w-8 md:h-8 circle_gradient rounded-full absolute  bottom-4 left-4 md:bottom-6 md:left-6" />
          <div className="w-4 h-4 md:w-8 md:h-8 circle_gradient rounded-full absolute  bottom-4 right-4 md:bottom-6 md:right-6" />

          <h1 className="font-extrabold text-3xl md:text-5xl lg:text-7xl tracking-widest text-secondary">
            {player.title}
          </h1>
          <button onClick={resetGame} className="reset_btn">
            RESTART
          </button>
        </div>
      </div>

      <ResultFrameMisc direction="flex-col-reverse" />
    </div>
  );
};

export default ResultModal;
