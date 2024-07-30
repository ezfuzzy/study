import React from "react";
import myCss from "./css/study.module.css";


/* 
  특정 component 에만 적용될 css파일을 만들땐 xxx.module.css 형태
  import myCss from "./css/study.module.css";
  -> myCss는 object임
  css 클래스 명 : {"변형된 클래스 명", ... }
*/

function Study(props) {
  return (
    <div>
      <h3>Study Page</h3>
      <div className={myCss.box}></div>
      <div className={myCss["bg-green"] + " m-3"}>bg-green</div>
      <div className={`${myCss.box} ${myCss["bg-green"]}`}></div>
    </div>
  );
}

export default Study;
