import React, { useReducer } from "react";

const ACTIONS = {
  INCREAMENT: "increament",
  DECREAMENT: "decreament",
  RESET: "reset",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREAMENT:
      return { count: state.count + 1 };
    case ACTIONS.DECREAMENT:
      if (state.count > 0) {
        return { count: state.count - 1 };
      }
      return state;
    case ACTIONS.RESET:
      return { count: 0 };
    default:
      return state;
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <>
      <button
        onClick={() => {
          dispatch({ type: ACTIONS.DECREAMENT });
        }}
      >
        -
      </button>

      <span style={{ margin: "0 10px" }}>{state.count}</span>

      <button
        onClick={() => {
          dispatch({ type: ACTIONS.INCREAMENT });
        }}
      >
        +
      </button>

      <button
        onClick={() => {
          dispatch({ type: ACTIONS.RESET });
        }}
      >
        reset
      </button>
    </>
  );
};

export default Counter;
