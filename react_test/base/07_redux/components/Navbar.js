import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

function Navbar(props) {
  const inputUsername = useRef();
  const dispatch = useDispatch();
  const isSignIn = useSelector((state) => state.isSignIn);
  const userName = useSelector((state) => state.userName);

  return (
    <div>
      {isSignIn ? (
        <div>
          <strong>{userName}</strong> 님 로그인중 ...
          <button
            onClick={() => {
              dispatch({
                type: "user_signOut",
              });
            }}>
            sign out
          </button>
          <button
            onClick={() => {
              localStorage.removeItem("token");
              dispatch({
                type: "user_signOut",
              });
            }}>
            delete jwt token
          </button>
        </div>
      ) : (
        <div>
          <input ref={inputUsername} type="text" placeholder="type username ... " />
          <button
            onClick={() => {
              // redux store에 action 발행(dispatch)
              dispatch({
                type: "user_signIn",
                payload: inputUsername.current.value,
              });
            }}>
            sign in
          </button>
        </div>
      )}
    </div>
  );
}

export default Navbar;
