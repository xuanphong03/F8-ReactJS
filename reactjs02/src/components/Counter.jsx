import { useDispatch, useSelector } from "../hooks";
import { decrement, increment } from "../store/actions/counterAction";
function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <h1 className="text-2xl">Counter: {count}</h1>
      <div className="space-x-1">
        <button
          onClick={handleDecrement}
          className="px-5 text-white bg-red-500 hover:opacity-80 rounded"
        >
          -
        </button>
        <button
          onClick={handleIncrement}
          className="px-5 text-white bg-green-500 hover:opacity-80 rounded"
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Counter;
