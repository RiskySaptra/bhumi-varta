import { useState } from "react";

export default function LocationNavigation({ changePos, data }) {
  const [hide, setHide] = useState(true);
  if (hide)
    return (
      <div className="absolute flex flex-col  justify-center z-20 top-3 left-12 h-[40px] w-[40px] bg-green-600 dark:bg-gray-800 rounded drop-shadow-lg">
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
    <div className="absolute flex flex-col z-20 top-3 left-12 lg:h-[500px] lg:w-[500px] bg-green-600 dark:bg-gray-800 p-5 rounded drop-shadow-lg">
      <div className="flex flex-row mb-3">
        <button onClick={() => setHide(!hide)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
            />
          </svg>
        </button>

        <h1 className="flex-grow text-2xl text-center text-white p-0">
          Location Point
        </h1>
      </div>
      <div className="flex-row overflow-y-auto pr-2">
        {data.length > 0 ? (
          data.map((itm, idx) => (
            <button
              className="bg-white  w-full p-2 mb-1 hover:bg-blue-700 hover:text-white dark:bg-gray-500 dark:text-white dark:hover:bg-blue-800 rounded"
              key={idx}
              onClick={() => changePos([itm.latitude, itm.longitude])}
            >
              {itm.name}
            </button>
          ))
        ) : (
          <h1 className="text-white">Loading ... </h1>
        )}
      </div>
    </div>
  );
}
