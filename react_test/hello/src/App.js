import "./App.css";

function App() {
  const myName = "ezfz";

  const clicked = () => {
    alert("clicked");
  };

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
    </div>
  );
}

export default App;
