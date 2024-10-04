import { createContext } from "react";
import { useReducerWithMiddleware } from "../hooks";
import { middleware } from "./middlewares/middleware";
import { initialState, rootReducer } from "./reducer";

export const ProviderContext = createContext();

// eslint-disable-next-line react/prop-types
function StateProvider({ children }) {
  const [state, dispatch] = useReducerWithMiddleware(
    rootReducer,
    initialState,
    middleware
  );
  return (
    <ProviderContext.Provider value={{ state, dispatch }}>
      {children}
    </ProviderContext.Provider>
  );
}

export default StateProvider;

// Chứa state của toàn bộ dự án
