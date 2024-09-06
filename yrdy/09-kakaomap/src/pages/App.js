import { useOutlet } from "react-router-dom";

function App() {
  const currentOutlet = useOutlet();

  //로그인 모달과 관련된 값을 redux store 로 부터 읽어온다.

  return (
    <>
      <div>
        <div>{currentOutlet}</div>
      </div>
    </>
  );
}

export default App;
