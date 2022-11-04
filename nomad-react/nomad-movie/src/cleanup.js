import { useState, useEffect } from "react";

function Hello() {
  useEffect(() => {
    console.log("created :)"); // showing = true 일 때
    return () => console.log("destryed :("); // showing = false 일 때
  }, []);
  return <h3>Hello</h3>;
}

function Cleanup() {
  const [showing, setShowing] = useState(false);
  const onClick = () => {
    setShowing((prev) => !prev);
  };
  return (
    <>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </>
  );
}

export default Cleanup;
