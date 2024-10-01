import { useEffect, useState } from "react";

function Counter() {
  // const [tenState, tenHamThayDoi] = useState(giaTriMacDinh)
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("mounting");
    return () => {
      console.log("unmounting");
    };
  }, []);
  useEffect(() => {
    console.log("count update", count);
  }, [count]);
  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleIncrement = () => {
    // setCount(count + 1);
    setCount((prevCount) => {
      return prevCount + 1;
    });
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleIncrement}>+</button>
      {count === 10 && <p>Thành công</p>}
    </div>
  );
}

export default Counter;
