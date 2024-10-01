export const reducer = (state, action) => {
  switch (action.type) {
    case "todo/create": {
      return { ...state, todoList: [...state.todoList, action.payload] };
    }
    case "todo/update": {
      const todoList = state.todoList.map((todoItem) => {
        if (todoItem.id === action.payload.id) {
          return { ...todoItem, completed: action.payload.status };
        }
        return todoItem;
      });
      return { ...state, todoList };
    }
    case "todo/delete": {
      const todoList = state.todoList.filter(
        (todoItem) => todoItem.id !== action.payload.id
      );
      return { ...state, todoList };
    }
    default: {
      return state;
    }
  }
};
