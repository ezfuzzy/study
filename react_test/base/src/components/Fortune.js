import React from "react";
import { useSelector } from "react-redux";

function Fortune(props) {
  const isSignIn = useSelector((state) => state.isSignIn);
  const userName = useSelector((state) => state.userName);

  return (
    <div>
      {isSignIn ? (
        <>
          <p>
            <strong>{userName}</strong>'s today's fortune
          </p>
          <p>gooooooooooooooooooooooooooooooooooooood</p>
        </>
      ) : (
        <p>
          <strong>your today's fortune</strong><br />
          <span>if you want to know that : plz sign in</span>
        </p>
      )}
    </div>
  );
}

export default Fortune;
