import { useEffect, useRef, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const checkboxAllRef = useRef();
  const checkboxSingleRef = useRef([]);

  const handleCheckAll = () => {
    const status = checkboxAllRef.current.checked;
    for (let i = 0; i < checkboxSingleRef.current.length; i++) {
      checkboxSingleRef.current[i].checked = status;
    }
    setCount(status ? checkboxSingleRef.current.length : 0);
  };

  const handleCheckItem = (e) => {
    const status = e.target.checked;
    setCount((prevCount) => {
      return status ? prevCount + 1 : prevCount - 1;
    });
  };

  const handleRemoveAll = () => {
    checkboxAllRef.current.checked = false;
    for (let i = 0; i < checkboxSingleRef.current.length; i++) {
      checkboxSingleRef.current[i].checked = false;
    }
    setCount(0);
  };

  useEffect(() => {
    checkboxAllRef.current.checked = count === checkboxSingleRef.current.length;
  }, [count]);

  return (
    <div>
      <div>
        <label>
          <input
            onChange={handleCheckAll}
            type="checkbox"
            ref={checkboxAllRef}
          />
          Checkbox All
        </label>
      </div>
      <hr></hr>
      {[...Array(4)].map((_, index) => {
        return (
          <div key={index}>
            <label>
              <input
                onChange={handleCheckItem}
                ref={(el) => (checkboxSingleRef.current[index] = el)}
                type="checkbox"
              />
              Checkbox {index + 1}
            </label>
          </div>
        );
      })}
      <hr></hr>
      <button disabled={count === 0} onClick={handleRemoveAll}>
        Xóa đã chọn ({count})
      </button>
    </div>
  );
}

export default App;

// HOC = Higher Order Component
// Hàm bọc 1 component và nhận vào Component ban đầu
// Trả về component mới
// Ví dụ: helloK8(Button)
