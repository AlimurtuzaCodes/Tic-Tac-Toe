import React from "react";
import { playerX } from "../assets";

const ResultModal = ({ resetGame }) => {
  return (
    <div className="w-full h-[50%] flex flex-col justify-center items-center gap-4 absolute z-20">
      <div className="w-full flex flex-col justify-center items-center gap-4">
        <div className="w-[30%] h-[2px] bg-[#EDD2A0]" />
        <div className="w-full flex flex-row gap-2 justify-center">
          <div className="w-[15%] border-t-[2px] border-dashed  border-[#EDD2A0]" />
          <div className="w-[50%] h-[2px] bg-[#EDD2A0]" />
          <div className="w-[15%] border-t-[2px] border-dashed  border-[#EDD2A0]" />
        </div>
      </div>

      <div className="w-full h-full result-modal grid place-items-center relative">
        <div className="w-[90%] h-[90%] rounded-[48px] border-2 border-dashed border-gray-600 relative flex flex-col justify-center items-center gap-10">
          <img
            src={playerX}
            alt="player"
            className="w-60 h-60  absolute -top-40 z-10"
          />

          <div className="w-8 h-8 circle_gradient rounded-full absolute top-6 left-6" />
          <div className="w-8 h-8 circle_gradient rounded-full absolute top-6 right-6" />
          <div className="w-8 h-8 circle_gradient rounded-full absolute bottom-6 left-6" />
          <div className="w-8 h-8 circle_gradient rounded-full absolute bottom-6 right-6" />
          {/* Main Content */}

          <h1 className="font-extrabold text-7xl tracking-widest text-secondary">
            STAR WINS
          </h1>
          <button
            onClick={resetGame}
            className="bg-secondary rounded-lg px-6 py-1 text-tertiary font-bold text-xl tracking-widest"
          >
            RESTART
          </button>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center gap-4">
        <div className="w-full flex flex-row gap-2 justify-center">
          <div className="w-[15%] border-t-[2px] border-dashed  border-[#EDD2A0]" />
          <div className="w-[50%] h-[2px] bg-[#EDD2A0]" />
          <div className="w-[15%] border-t-[2px] border-dashed  border-[#EDD2A0]" />
        </div>
        <div className="w-[30%] h-[2px] bg-[#EDD2A0]" />
      </div>
    </div>
  );
};

export default ResultModal;
