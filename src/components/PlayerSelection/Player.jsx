import { playerO, playerX } from "../../assets";

const Player = ({ player, color, title }) => {
  const image = player === "X" ? playerX : playerO;
  return (
    <div className={`${color} player`}>
      <p className="font-light text-2xl md:text-3xl text-gray-600">
        <span className="font-bold text-3xl md:text-5xl text-secondary">0</span>
        /0
      </p>
      {player === title ? (
        <div className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-36 xl:h-36">
          <img
            src={image}
            alt="playerX"
            className="w-full h-full object-cover scale-110 lg:scale-125"
          />
        </div>
      ) : (
        <div className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-36 xl:h-36 grid place-items-center">
          <div className="w-[80%] h-[80%] hollow rounded-full" />
        </div>
      )}
    </div>
  );
};

export default Player;
