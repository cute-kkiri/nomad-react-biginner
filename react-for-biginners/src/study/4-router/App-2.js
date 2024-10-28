import { useState, useEffect } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  }
  console.log(toDos);
  console.log(toDos.map((item, index) => <li key={index}>{item}</li>)); // react가 가지고 있는 값을 볼 수 있다.
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} type="text" placeholder="Write your to do..." />
        <button>Add To Do</button>
      </form>
      <hr />
      {toDos.map((item, index) => (
        /* react에서 list를 렌더링할 때는 key라는 prop을 지정해줘야 한다고 함. 안그러면 경고 뜸. */
        <li key={index}>{item}</li>
      )) /* map의 결과값은 새로운 배열임. */}
    </div>
  );
}

export default App;
