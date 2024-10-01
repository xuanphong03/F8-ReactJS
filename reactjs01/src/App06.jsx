import { createContext, useState } from "react";
import Comments from "./components/Comment";

export const AppContext = createContext();

function App() {
  const [message, setMessage] = useState("Học React không khó");

  return (
    <div>
      <AppContext.Provider value={{ message, setMessage: setMessage }}>
        <Comments />
      </AppContext.Provider>
    </div>
  );
}

export default App;

/**
 * Các bước để làm việc với Context được React xây dựng sẵn
 * - Tạo 1 đối tượng context: React.createContext();
 * - Bọc Component Provider vào các Component con cần truyền dữ liệu tới
 * - Tại component cần lấy dữ liệu ==> Gọi context và đưa vào hook useContext để nhận sửa liệu
 *
 */
