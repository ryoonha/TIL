import { useEffect, useState } from "react";
import styles from "./App.module.css";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => {
    setKeyword(event.target.value);
  };

  // ---------- 조건(state, 시점)에 따라 reder -------------- //

  // API 호출할 때
  useEffect(() => {
    console.log("I run only once.");
  }, []); // 리액트 감시하는 두번째 인자가 비어있기 때문

  // 'keyword'가 변화할 때
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log("I run when 'keyword' changes.", keyword);
    }
  }, [keyword]); //

  // 클릭(counter 변화)할 때
  useEffect(() => {
    console.log("I run when 'counter' changes.");
  }, [counter]);

  // ------------------------ JSX ------------------------ //
  return (
    <div>
      {/* --------- 검색 API ----------*/}
      <input
        value={keyword}
        type="text"
        placeholder="Search here"
        onChange={onChange}
      ></input>
      {/* --------- 클릭 API ----------*/}
      <h1 className={styles.title}> {counter} </h1>
      <button onClick={onClick}> Click me </button>
    </div>
  );
}

export default App;
