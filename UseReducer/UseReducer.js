import React, { useReducer } from "react";

const initialstate = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialstate;
    default:
      return state;
  }
};
function UseReducer() {
  const [count, dispatch] = useReducer(reducer, initialstate);
  return (
    <>
      <hr />
      <h4>
        <u>useReducer Example</u>
      </h4>
      <h4>Count: {count}</h4>
      <button onClick={() => dispatch("increment")}>Add</button>
      <button onClick={() => dispatch("decrement")}>Minus</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </>
  );
}

export default UseReducer;
