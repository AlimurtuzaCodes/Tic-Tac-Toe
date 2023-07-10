import React from "react";

const ResultFrameMisc = ({ direction }) => {
  return (
    <div
      className={`w-full flex ${direction} justify-center items-center gap-4`}
    >
      <div className="w-[30%] h-[2px] bg-tertiary" />
      <div className="w-full flex flex-row gap-2 justify-center">
        <div className="w-[15%] border-t-[2px] border-dashed  border-tertiary" />
        <div className="w-[50%] h-[2px] bg-tertiary" />
        <div className="w-[15%] border-t-[2px] border-dashed  border-tertiary" />
      </div>
    </div>
  );
};

export default ResultFrameMisc;
