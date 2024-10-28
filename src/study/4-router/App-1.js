import { useState, useEffect } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]); // toDo을 저장할 toDo list // 배열로 저장
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault(); // form을 submit할 때 페이지가 새로고침 되는 것을 막음.
    // console.log(toDo);
    if (toDo === "") {
      return; // toDo를 적었을 때만 저장하기 위해서 텍스트가 비어있을 때는 함수 종료
    }
    // toDo를 수정할 때 useState 사용
    // console.log(toDos);
    // array를 추가하는 방식 [item, ...currentArray]
    setToDos((currentArray) => [toDo, ...currentArray]); // 현재 array에 toDo 하나씩 추가.
    setToDo(""); // toDo를 저장하고 나서 input 비워줌.
  }
  // console.log(toDos); // toDo list console에 찍어보기
  // console.log(toDo);
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} type="text" placeholder="Write your to do..." />
        <button>Add To Do</button>
      </form>
    </div>
  );
}

export default App;
