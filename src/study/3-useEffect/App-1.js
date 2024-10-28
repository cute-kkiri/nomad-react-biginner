import { useState, useEffect } from "react";

// state가 변경되도 필요한 것만 렌더링하기.
function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  console.log("i run all the time");

  // useEffect는 딱 한 번만 실행될 수 있도록하는 function
  useEffect(() => {
    console.log("CALL THE API....");
  }, []);
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
