import { useState } from "react";
import { useDispatch, useSelector } from "../hooks/";
function Todo() {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todoList);

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return alert("Please enter title");
    dispatch({
      type: "todo/add",
      payload: title,
    });
    setTitle("");
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="border border-solid border-black rounded overflow-hidden"
      >
        <input
          type="text"
          placeholder="Title..."
          value={title}
          className="px-4 py-2"
          onChange={handleChangeTitle}
        />
        <button className="bg-blue-500 text-white px-4 py-2">Add</button>
      </form>
      <ul>
        {todoList.map((todoItem, index) => (
          <li key={index}>{todoItem}</li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
