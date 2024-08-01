import React from "react";

function MyCounter(props) {
  return (
    <div>
      <button
        onClick={() => {
          props.setCount((prev) => prev - 1);
        }}>
        -
      </button>
      <strong>{props.count}</strong>
      <button
        onClick={() => {
          props.setCount((prev) => prev + 1);
        }}>
        +
      </button>
    </div>
  );
}

export default MyCounter;
