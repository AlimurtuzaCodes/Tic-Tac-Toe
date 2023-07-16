import { playerO, playerX } from "../assets";

const BoardItem = ({ style, index, handleOnClick, board }) => {
  return (
    <div
      className={`bg-primary rounded-lg board_back_grad ${style} flex justify-center items-center cursor-pointer relative`}
      onClick={() => {
        handleOnClick(index);
      }}
    >
      {board[index] && (
        <img
          src={board[index] === "X" ? playerX : playerO}
          alt="Player"
          className="w-20 h-20 md:w-40 md:h-40 absolute z-10"
        />
      )}

      <div className="w-[60%] h-[60%] border-[8px] md:border-[16px]  border-[#D9D8D1] rounded-full relative -z-1 flex justify-center items-center">
        {/* <div className="absolute -bottom-1 left-1" /> */}
        <div className="flex flex-col h-[195%] justify-between items-center">
          <div
            className="w-[1px] lg:w-[2px] h-4 lg:h-6 rounded-[1px]"
            style={{ background: "rgba(164, 161, 157, 0.3)" }}
          />
          <div
            className="w-[1px] lg:w-[2px] h-4  lg:h-6 rounded-[1px]"
            style={{ background: "rgba(164, 161, 157, 0.3)" }}
          />
        </div>
        <div className="flex flex-col h-[195%] justify-between items-center rotate-90">
          <div
            className="w-[1px] lg:w-[2px] h-4 lg:h-6  rounded-[1px]"
            style={{ background: "rgba(164, 161, 157, 0.3)" }}
          />
          <div
            className="w-[1px] lg:w-[2px] h-4 lg:h-6  rounded-[1px]"
            style={{ background: "rgba(164, 161, 157, 0.3)" }}
          />
        </div>
      </div>
    </div>
  );
};

export default BoardItem;
