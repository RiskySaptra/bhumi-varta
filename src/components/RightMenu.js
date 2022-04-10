import React, { useState } from "react";

function RightMenu() {
  const [hide, setHide] = useState(true);
  if (hide)
    return (
      <div className="absolute flex flex-col justify-center z-20 right-3 top-3 h-[40px] w-[40px] bg-green-600 dark:bg-gray-800 rounded drop-shadow-lg">
        <button onClick={() => setHide(!hide)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-white text-center inline"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    );
  return (
    <>
      <div className="absolute z-20 right-0 top-0 h-full w-full lg:w-[500px] bg-white drop-shadow-lg">
        <div className="flex justify-end">
          <button onClick={() => setHide(!hide)} className="m-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 5l7 7-7 7M5 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
        <div className="p-5">content !!</div>
      </div>
    </>
  );
}

export default RightMenu;
