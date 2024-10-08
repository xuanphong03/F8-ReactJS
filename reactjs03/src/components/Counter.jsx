import { useState } from "react";
import Content from "./Content";

function Counter() {
  const [count, setCount] = useState(0);
  console.log("1.Counter re-render");

  return (
    <div>
      <h1>Counter: {count}</h1>
      <Content />
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default Counter;
