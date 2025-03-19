import { useState } from "react";

const Counter = () => {
  const [index, setIndex] = useState(0);

  const handleIncrement = () => {
    setIndex(index + 1);
  };

  const handleDecrement = () => {
    setIndex(index - 1);
  };

  return (
    <div>
      <h1 className="text-xl text-center">Counter</h1>
      <div className="flex gap-12 justify-center items-center">
        <button
          onClick={handleDecrement}
          className="px-3 py-1.5 bg-blue-500 text-white rounded-xl"
        >
          {" "}
          Decrease
        </button>
        <div className="">Counter : {index}</div>
        <button
          onClick={handleIncrement}
          className="px-3 py-1.5 bg-blue-500 text-white rounded-xl"
        >
          {" "}
          increase
        </button>
      </div>
    </div>
  );
};

export default Counter;
