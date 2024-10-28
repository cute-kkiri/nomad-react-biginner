import { useState, useEffect } from "react";

// cleanup function == destroyed function
function App() {
  const [showing, setShowing] = useState(false);
  function Hello() {
    /* useEffect(() => {
      console.log("created :)");
      // component가 사라질 때 callback 함수로 표시?
      return () => console.log("destroyed :(");
    }, []); */
    /* function byFn() {
      console.log("bye :(");
    }
    function hiFn() {
      console.log("created :)");
      // return byFn(); -> 이렇게 하면 component생성할 때 같이 생성됨
      return byFn;
    }
    useEffect(hiFn, []); */
    /* useEffect(() => {
      console.log("hi :)");
      return () => console.log("bye :(");
    }, []); */
    useEffect(function () {
      console.log("hi :)");
      return function () {
        console.log("bye :(");
      }
    }, []);
    return <h1>Hello</h1>;
  }
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
