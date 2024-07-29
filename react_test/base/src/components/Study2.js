import React from "react";
import myCss from "./css/study.module.css";
import cn from "classnames";
import binder from "classnames/bind";

const cx = binder.bind(myCss);

function Study2(props) {
  return (
    <div>
      <h3>Study2 Page</h3>
      <div className={cx("box")}></div>
      <div className={cx("bg-green", "m-3")}>bg-green</div>
      <div className={cx("box", "bg-green")}></div>
      <div className={cx({"box": true, "bg-green": false})}>object</div>
    </div>
  );
}

export default Study2;
