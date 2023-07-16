import React from "react";

const BoardFrameMisc = ({ style, rotate }) => {
  return (
    <div
      className={`flex flex-col justify-center items-center gap-2 absolute ${style} ${rotate}`}
    >
      <div
        className={`w-5 h-5 md:w-10 md:h-10 circle_gradient rounded-full  ${rotate}`}
      ></div>
      <div className="grid place-items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 12 136"
          fill="none"
          className="w-3 h-12 md:h-20"
        >
          <path
            d="M6 135L6 133"
            stroke="#EED3A3"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M5 121C5 121.552 5.44772 122 6 122C6.55228 122 7 121.552 7 121L5 121ZM5.99999 0.226497L0.226492 6L6 11.7735L11.7735 6L5.99999 0.226497ZM7 121L6.99999 6L4.99999 6L5 121L7 121Z"
            fill="#EED3A3"
          />
        </svg>
      </div>
    </div>
  );
};

export default BoardFrameMisc;
