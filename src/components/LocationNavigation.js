import { useState } from "react";

export default function LocationNavigation({ changePos, data }) {
  const [hide, setHide] = useState(true);
  if (hide)
    return (
      <div className="absolute flex flex-col z-20 top-3 left-12 h-[40px] w-[40px] bg-gray-600 rounded drop-shadow-lg">
        <button onClick={() => setHide(!hide)}>
          <h1 className="text-2xl text-center text-white">{">"}</h1>
        </button>
      </div>
    );
  return (
    <div className="absolute flex flex-col z-20 top-12 left-12 h-[500px] w-[500px] bg-gray-600 p-5 rounded drop-shadow-lg">
      <div className="flex flex-row mb-2">
        <button onClick={() => setHide(!hide)}>
          <h1 className="text-2xl text-white">{"<"}</h1>
        </button>

        <h1 className="flex-grow text-2xl text-center text-white p-0">
          Location Point
        </h1>
      </div>
      <div className="flex-row overflow-y-auto pr-2">
        {data.length > 0 ? (
          data.map((itm, idx) => (
            <button
              className="bg-white w-full p-2 mb-1 hover:bg-blue-400 hover:text-white rounded"
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
