import { playerO, playerX } from "../../assets";

const Player = ({ player, color, title }) => {
  const image = player === "X" ? playerX : playerO;
  return (
    <div
      className={`${color} w-[90%] h-20 md:h-24 rounded-s-[30px] flex justify-between items-center pl-4 md:pr-6`}
    >
      <p className="font-light text-2xl md:text-3xl text-gray-600 -rotate-90">
        <span className="font-bold text-3xl md:text-5xl text-secondary">0</span>
        /0
      </p>
      {player === title ? (
        <img
          src={image}
          alt="playerX"
          className="w-32 h-32 md:w-40 md:h-40 -rotate-90"
        />
      ) : (
        <div className="w-32 h-32 md:w-40 md:h-40 grid place-items-center">
          <div className="w-20 h-20 md:w-28 md:h-28 hollow rounded-full" />
        </div>
      )}
    </div>
  );
};

export default Player;
