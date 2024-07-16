import "./App.css";

function App() {
  const myName = "ezfz";

  const clicked = () => {
    alert("clicked");
  };

  const myStyle = {
    margin: "auto",
    width: "100px",
    height: "100px",
    border: "solid 2px green",
    backgroundColor: "yellowgreen",
  };

  const datas = ["ezfz", "hysz", "lessa"];

  const names = datas.map((item) => <li>{item}</li>);

  return (
    <div className="container">
      <h1>index page</h1>
      <p>
        my name is <strong>{myName}</strong>
      </p>
      <button
        onClick={() => {
          alert("hi");
        }}>
        click
      </button>
      <button onClick={clicked}>clicked</button>
      <div style={myStyle}>inline css</div>
      <ul>{datas}</ul>
      <ul>{names}</ul>
    </div>
  );
}

export default App;
