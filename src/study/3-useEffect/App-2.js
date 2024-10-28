import { useState, useEffect } from "react";

// state가 변경되도 필요한 것만 렌더링하기.
function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onChange = (event) => setKeyword(event.target.value);

  const onClick = () => setValue((prev) => prev + 1);
  // console.log("i run all the time");

  // useEffect는 딱 한 번만 실행될 수 있도록하는 function(실행하려는 코드, dependency)
  useEffect(() => {
    console.log("I run only once.");
  }, []);
  useEffect(() => {
    console.log("I run when 'keyword' changes.");
    /* 
    // 처음 렌더링할 때 부터 나오니까 검색어를 쳤을 때 렌더링하기 위한 조건문.
    if (keyword !== "") {
    } */
  }, [keyword]);
  useEffect(() => {
    console.log("I run when 'counter' changes.");
  }, [counter]);
  useEffect(() => {
    // 여러개 한 번에
    console.log("I run when 'keyword & counter' changes.");
  }, [keyword, counter]);
  return (
    <div>
      <input type="text" placeholder="Search here..." onChange={onChange} value={keyword} />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
