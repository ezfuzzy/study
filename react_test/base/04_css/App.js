// App.css 적용하기 (내부 css)
import { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Play from "./components/Play";
import Study from "./components/Study";
import Study2 from "./components/Study2";
import cn from "classnames";
import binder from "classnames/bind";

//함수형 component
function App() {
  // profile
  const [profile, setProfile] = useState({
    idx: 1,
    name: "ezfz",
    game: "lol",
  });
  const [newKey, setNewKey] = useState("");
  const [newValue, setNewValue] = useState("");
  // array
  const [newName, setNewName] = useState("");
  const [names, setNames] = useState(["ezfz", "hysz", "lessa"]);
  // boolean
  const [isShow, setShow] = useState(true);

  const [nameList, setNameList] = useState({
    inputName: "",
    names: [],
    seq: 0,
  });

  // ---
  let inputName = null;

  // useRef
  let inputNameRef = useRef();

  // --- css
  const [color, setColor] = useState("");
  const [large, setLarge] = useState(false);
  const btnStyle = {
    default: `btn ${color}`,
    lg: `btn ${color} btn-lg`,
  };
  const cx = binder.bind(btnStyle);

  // ========================================
  console.log("mounted");

  const handleAddProperty = () => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      [newKey]: newValue,
    }));
    setNewKey("");
    setNewValue("");
  };

  const handleIncrementIdx = () => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      idx: prevProfile.idx + 1,
    }));
  };

  const handleAddName = () => {
    setNames([...names, newName]);
    setNewName("");
  };

  const handleShow = (e) => {
    setShow(e.target.checked);
  };

  const replacer = (key, value) => {
    if (key === "inputName") {
      return undefined;
    }
    return value;
  };

  // useEffect: counter
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <h1>인덱스 페이지 입니다 [{seconds}]</h1>
      {/* profile */}
      <div style={{ padding: "20px", border: "solid 2px #062", borderRadius: "30px" }}>
        <h1>프로필 정보</h1>
        {Object.keys(profile).map((key) => (
          <p key={key}>
            <strong>{key}:</strong> {profile[key]}
            {key === "idx" && (
              <button className="btn btn-success btn-sm m-3" onClick={handleIncrementIdx}>
                +
              </button>
            )}
          </p>
        ))}
        <input
          className="form-control my-3"
          type="text"
          placeholder="Key"
          value={newKey}
          onChange={(e) => setNewKey(e.target.value)}
        />
        <input
          className="form-control"
          type="text"
          placeholder="Value"
          value={newValue}
          onChange={(e) => setNewValue(e.target.value)}
        />
        <button className="btn btn-primary mt-3" onClick={handleAddProperty}>
          Add Property
        </button>
      </div>
      {/* array */}
      <div className="mt-3">
        <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} />
        <button className="btn btn-info " onClick={handleAddName}>
          add
        </button>
        <ul>
          {names.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div>
        {/* boolean, undefined, null */}
        <input
          className="m-4"
          type="checkbox"
          checked={isShow}
          onChange={handleShow}
          style={{ transform: "scale(5)" }}
        />
        {isShow && (
          <p>
            true: {true} <br />
            undefined: {undefined} <br />
            null: {null}
          </p>
        )}
        <div className="mt-3">
          {/* event */}
          <input
            type="text"
            onChange={(e) => {
              setNameList({ ...nameList, inputName: e.target.value });
            }}
            placeholder="type name (by e)"
          />
          <button
            className="btn btn-info m-3"
            onClick={() => {
              setNameList({
                ...nameList,
                names: [...nameList.names, { name: nameList.inputName }],
                seq: nameList.seq + 1,
              });
            }}>
            add
          </button>
          {/* ref */}
          <input
            ref={(refValue) => {
              inputName = refValue;
            }}
            type="text"
            placeholder="using ref"
          />
          <button
            className="btn btn-info m-3"
            onClick={() => {
              setNameList({
                ...nameList,
                names: [...nameList.names, { name: inputName.value, id: nameList.seq }],
                seq: nameList.seq + 1,
              });
              inputName.value = "";
            }}>
            add(ref)
          </button>
          <br />
          {/* useRef */}
          <input ref={inputNameRef} type="text" placeholder="useRef" />
          <button
            className="btn btn-info m-3"
            onClick={() => {
              setNameList({
                ...nameList,
                names: [...nameList.names, { name: inputNameRef.current.value, id: nameList.seq }],
                seq: nameList.seq + 1,
              });
              inputNameRef.current.value = "";
            }}>
            add(useRef)
          </button>
          <ul>
            {nameList.names.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
          {isShow && <pre>{JSON.stringify(nameList, replacer, 2)}</pre>}
        </div>
      </div>
      {/* css */}
      <div className="box">box</div>
      <Play />
      <Study />
      <Study2 />

      <select
        onChange={(event) => {
          setColor(event.target.value);
        }}>
        <option value="">choice</option>
        <option value="btn-primary">primary</option>
        <option value="btn-success">success</option>
        <option value="btn-info">info</option>
        <option value="btn-warning">warning</option>
        <option value="btn-danger">danger</option>
      </select>

      <label>
        <input
          type="checkbox"
          onChange={(event) => {
            setLarge(event.target.checked);
          }}
        />
        <span>{JSON.stringify(large)}</span>
      </label>

      <button className={"btn " + color}>button</button>
      <button className={`btn ${color} ${large ? "btn-lg" : ""}`}>button</button>
      <button className={cn("btn", color, { "btn-lg": large })}>button</button>
      <button className={cx({ default: !large, lg: large })}>button</button>
      <button className={cx(!large ? "default" : "lg")}>button</button>

      <div style={{ margin: "1000px" }}></div>
    </div>
  );
}

//외부에서 App.js 를 import 하면 App 함수를 사용할수 있다. (src/index.js)
export default App;
