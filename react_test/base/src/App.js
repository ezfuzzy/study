// App.css 적용하기 (내부 css)
import { useState } from "react";
import "./App.css";
import MyCounter from "./components/MyCounter";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import YourCounter from "./components/YourCounter";

//함수형 component
function App() {
  const [counter, setCounter] = useState(0);

  return (
    <Container>
      <h1>인덱스 페이지 입니다</h1>
      <MyCounter count={counter} setCount={setCounter} />
      <YourCounter />
    </Container>
  );
}

//외부에서 App.js 를 import 하면 App 함수를 사용할수 있다. (src/index.js)
export default App;
