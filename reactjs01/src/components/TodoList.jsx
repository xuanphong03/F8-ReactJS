import { useReducer, useState } from "react";
import { reducer } from "../utils/reducer";
import { v4 as uuidv4 } from "uuid";

const initialValue = {
  todoList: [
    { id: uuidv4(), title: "Todo 1", completed: true },
    { id: uuidv4(), title: "Todo 2", completed: false },
    { id: uuidv4(), title: "Todo 3", completed: false },
  ],
};

function TodoList() {
  const [todoTitle, setTodoTitle] = useState("");
  const [state, dispatch] = useReducer(reducer, initialValue);

  const handleTitleChange = (e) => {
    setTodoTitle(e.target.value);
  };

  const handleCreateTodo = (e) => {
    e.preventDefault();
    if (!todoTitle) return;
    dispatch({
      type: "todo/create",
      payload: { id: uuidv4(), title: todoTitle, completed: false },
    });
    setTodoTitle("");
  };

  const handleDeleteTodo = (id) => {
    dispatch({
      type: "todo/delete",
      payload: { id },
    });
  };

  const handleStatusChange = (e, id) => {
    const status = e.target.checked;
    dispatch({
      type: "todo/update",
      payload: { status, id },
    });
  };

  return (
    <div className="py-5">
      <h1 className="font-semibold">Todo List</h1>
      <hr className="my-2"></hr>
      <form className="flex gap-2">
        <input
          value={todoTitle}
          onChange={handleTitleChange}
          type="text"
          placeholder="Title..."
          className="border border-solid px-4 py-1 rounded border-gray-500 w-80 outline-none"
        />
        <button
          className="px-4 py-1 text-sm bg-green-500 hover:opacity-80 rounded text-white"
          onClick={handleCreateTodo}
        >
          Add
        </button>
      </form>
      <ul className="flex flex-col gap-3 mt-5">
        {state.todoList.map((todoItem) => (
          <li key={uuidv4()} className={`flex items-center gap-5`}>
            <label className={`${todoItem.completed ? "line-through" : ""} `}>
              <input
                className={`${todoItem.completed ? "line-through" : ""} `}
                onChange={(e) => handleStatusChange(e, todoItem.id)}
                type="checkbox"
                checked={todoItem.completed}
              />
              {todoItem.title}
            </label>
            <button
              className="size-5 flex justify-center items-center hover:opacity-80 bg-red-500 text-white rounded"
              onClick={() => handleDeleteTodo(todoItem.id)}
            >
              &times;
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
