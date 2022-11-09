import React from "react";
import { useState } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const onChange = (event) => setTodo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (todo === "") {
      // todo는 input이랑 연결되었으므로, todo 변경하면 input 바뀜
      return;
    }
    setTodo("");
    setTodos((currentArray) => []); // 새로운 todo(첫번째인자)를 받으면 새로운 array return
  };

  return (
    <div>
      <h1> to do List </h1>
      <form onSubmit={onSubmit}>
        <input
          value={todo}
          type="todo"
          placeholder="Write your to do ..."
          onChange={onChange}
        ></input>
        <button> Add To Do </button>
      </form>
    </div>
  );
}

export default App;
