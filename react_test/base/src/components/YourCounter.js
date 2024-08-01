import React, { useReducer } from "react";

const reducer = (state, action) => {
  let newState;
  if (action === "minus") {
    newState = {
      ...state,
      count: state.count - 1,
    };
  } else if (action === "plus") {
    newState = {
      ...state,
      count: state.count + 1,
    };
  }
  console.log(newState);
  return newState;
};

function YourCounter(props) {
  // useReducer(reducer function, initial value)
  const [state, dispatch] = useReducer(reducer, { count: 7 });

  return (
    <div>
      <button onClick={() => { dispatch("minus"); }}> - </button>
      <strong>{state.count}</strong>
      <button onClick={() => { dispatch("plus"); }}> + </button>
    </div>
  );
}

export default YourCounter;
