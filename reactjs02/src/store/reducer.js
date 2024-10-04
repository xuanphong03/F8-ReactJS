export const initialState = {
  count: 0,
  todoList: [],
  postList: [],
  profile: localStorage.getItem("profile") || {},
};

export const rootReducer = (state, action) => {
  switch (action.type) {
    case "counter/increment": {
      return {
        ...state,
        count: state.count + 1,
      };
    }
    case "counter/decrement": {
      return {
        ...state,
        count: state.count - 1,
      };
    }
    case "todo/add": {
      return { ...state, todoList: [...state.todoList, action.payload] };
    }

    case "post/update": {
      return { ...state, postList: action.payload };
    }

    case "profile/update": {
      localStorage.setItem("profile", action.payload);
      return { ...state, profile: action.payload };
    }

    default: {
      return state;
    }
  }
};

/**
 * 1. Vấn đề. Chỉ 1 reducer ==> File reducer bị rối ==> Tách reducer, sau đó nối lại
 * 2. State sẽ chứa toàn bộ state của toàn bộ dự án ==> Quá trình cần lấy dữ liệu trong component sẽ khó khăn
 * 3. Action Object: Đang truyền thủ công ==> Gặp vấn đề khi maintain
 *
 * *Giải pháp: Tạo 2 hook riêng tương ứng với chức năng:
 * - useDispatch() => trả về hàm dispatch trên store
 * - useSelector() => trả về state mà bạn muốn lọc
 * - Action Creator: Tạo 1 hàm trả về action
 */
