// App.css 적용하기 (내부 css)
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

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

  return (
    <div className="container">
      <h1>인덱스 페이지 입니다</h1>
      {/* profile */}
      <div style={{ padding: "20px", border: "solid 2px #062" }}>
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
        <input type="checkbox" checked={isShow} onChange={handleShow} />
        {isShow && (
          <p>
            true: {true} <br />
            undefined: {undefined} <br />
            null: {null}
          </p>
        )}
        <div className="mt-3">
          <input
            type="text"
            onChange={(e) => {
              setNameList({ ...nameList, inputName: e.target.value });
            }}
            placeholder="type name (by e)"
          />
          <input
            ref={(refValue) => {
              inputName = refValue;
            }}
            type="text"
            placeholder="using ref"
          />
          <button
            className="btn btn-info"
            onClick={() => {
              setNameList({
                ...nameList,
                names: [...nameList.names, { name: inputName.value, id: nameList.seq }],
                seq: nameList.seq + 1,
              });
              inputName.value = "";
            }}>
            add
          </button>
          <ul>
            {nameList.names.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
          {isShow && <pre>{JSON.stringify(nameList, replacer, 2)}</pre>}
        </div>
      </div>
    </div>
  );
}

//외부에서 App.js 를 import 하면 App 함수를 사용할수 있다. (src/index.js)
export default App;
