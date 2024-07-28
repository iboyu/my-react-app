import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    // count++;
    setCount(count + 1);
    // setCount((n) => n + 1); --update function
    // setCount((n) => n + 1);
    // setCount((n) => n + 1);
  }
  return (
    <>
      <h1>This is a Counter</h1>
      <button onClick={handleIncrement}>+1</button>
      <p>{count}</p>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <br />
      <button onClick={() => setCount(0)}>Reset the value</button>
    </>
  );
}

export default Counter;
