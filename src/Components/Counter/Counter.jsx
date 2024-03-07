import React, { useReducer } from "react";

const Counter = () => {
  const initialVal = 0;
  const reducer = (state, action) => {
    switch (action.type) {
      case "Increment":
        return state + 1;

      case "Decrement":
        if (state > 0) return state - 1;
        return 0;

      default:
        break;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialVal);

  return (
    <div className="h-screen w-full text-center font-serif">
      <h1 className="text-4xl font-bold mt-4 mb-2">Counter</h1>
      <div className="text-2xl p-4">Count: {state}</div>

      <div className="flex flex-col items-center gap-6">
        <button
          className="bg-blue-300 p-3 border-none rounded-md max-w-full w-[25%]"
          onClick={() => dispatch({ type: "Increment" })}
        >
          Increment Counter
        </button>
        <button
          className="bg-red-300 p-3 border-none rounded-md max-w-full w-[25%]"
          onClick={() => dispatch({ type: "Decrement" })}
        >
          Decrement Counter
        </button>
      </div>
    </div>
  );
};

export default Counter;
