import React from "react";
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
          className="absolute z-10"
        />
      )}

      <div className="w-28 h-28 border-[16px] border-[#D9D8D1] rounded-full relative -z-1">
        <div className="semi-circle absolute -bottom-1 left-1" />
        <div
          className="w-[2px] h-6 rounded-[1px] absolute -top-7 left-[50%]"
          style={{ background: "rgba(164, 161, 157, 0.3)" }}
        />
        <div
          className="w-[2px] h-6 rounded-[1px] absolute -bottom-7 left-[50%]"
          style={{ background: "rgba(164, 161, 157, 0.3)" }}
        />
        <div
          className="w-6 h-[2px] rounded-[1px] absolute -left-7 top-[50%]"
          style={{ background: "rgba(164, 161, 157, 0.3)" }}
        />
        <div
          className="w-6 h-[2px] rounded-[1px] absolute -right-7 top-[50%]"
          style={{ background: "rgba(164, 161, 157, 0.3)" }}
        />
      </div>
    </div>
  );
};

export default BoardItem;
