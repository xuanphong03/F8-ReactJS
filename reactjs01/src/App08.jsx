import { useReducer } from "react";

const ACTION = {
  increment: "increment",
  decrement: "decrement",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION.increment: {
      return { ...state, count: state.count + action.payload };
    }
    case ACTION.decrement: {
      return { ...state, count: state.count - action.payload };
    }
    default: {
      return state;
    }
  }
};

const initialState = {
  count: 0,
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleIncrease = () => {
    dispatch({ type: "increment", payload: 5 });
  };

  const handleDecrease = () => {
    dispatch({ type: "decrement", payload: 2 });
  };

  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={handleDecrease}>-</button>
      <button onClick={handleIncrease}>+</button>
    </div>
  );
}

export default App;
