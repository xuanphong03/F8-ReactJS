import { useRef } from "react";
import Input from "./components/Input";

function App() {
  const inputRef = useRef();
  const handleClick = () => {
    inputRef.current.focus2();
  };
  return (
    <div>
      {/* <Counter /> */}
      {/* <MoneyTransfer /> */}
      <Input ref={inputRef} />
      <button onClick={handleClick}>Focus</button>
    </div>
  );
}

export default App;
