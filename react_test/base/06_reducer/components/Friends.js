import React, { useReducer, useRef } from "react";

const reducer = (state, action) => {
  let newState;
  if (action.type === "add") {
    newState = {
      ...state,
      seq: state.seq + 1,
      names: [...state.names, { id: state.seq, name: action.payload }],
    };
  } else if (action.type === "delete") {
    newState = {
      ...state,
      names: state.names.filter((cur) => cur.id !== action.payload),
    };
  }
  return newState;
};

const initFriendsList = {
  seq: 2,
  names: [{ id: 1, name: "ezfz" }],
};

const replacer = (key, value) => {
  if (key === "inputName") {
    return undefined;
  }
  return value;
};

function Friends(props) {
  const [friendsState, friendsDispatch] = useReducer(reducer, initFriendsList);
  const inputName = useRef();

  return (
    <div>
      <input ref={inputName} type="text" />
      <button
        onClick={() => {
          if (inputName.current.value !== "") {
            friendsDispatch({ type: "add", payload: inputName.current.value });
            inputName.current.value = "";
          }
        }}>
        add
      </button>

      <ul>
        {friendsState.names.map((cur) => (
          <li key={cur.id}>
            {cur.name}
            <button
              onClick={() => {
                friendsDispatch({ type: "delete", payload: cur.id });
              }}>
              X
            </button>
          </li>
        ))}
      </ul>

      <pre>{JSON.stringify(friendsState, replacer, 2)}</pre>
    </div>
  );
}

export default Friends;
