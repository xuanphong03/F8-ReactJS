import { useContext, useReducer } from "react";
import { ProviderContext } from "../store/StateProvider";

export const useDispatch = () => {
  const { dispatch } = useContext(ProviderContext);
  return dispatch;
};

export const useSelector = (callback) => {
  if (typeof callback !== "function") {
    throw new Error("callback is not a function");
  }
  const { state } = useContext(ProviderContext);
  return callback(state);
};

export const useReducerWithMiddleware = (reducer, initialState, middleware) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const dispatchWithMiddleware = (action) => {
    // Gọi hàm middleware ở đây
    const store = {
      getState: () => state,
      dispatch,
    };
    const middlewareFn = middleware(store);
    if (typeof middleware !== "function") {
      throw new Error("Middleware is not a function");
    }
    middlewareFn(action);
  };
  return [state, dispatchWithMiddleware];
};
