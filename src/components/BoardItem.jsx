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

      <div className="inner_board_item_circle -z-1">
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
