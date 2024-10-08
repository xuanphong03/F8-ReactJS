import { useCallback, useMemo, useState } from "react";
import ResetButton from "./ResetButton";

function MoneyTransfer() {
  const [histories, setHistories] = useState([]);
  const [amount, setAmount] = useState("");
  const [msg, setMsg] = useState("");

  const total = useMemo(() => {
    return histories.reduce((total, item) => {
      return total + +item;
    }, 0);
  }, [histories]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setHistories([...histories, amount]);
    setAmount("");
  };

  const handleChange = (e) => {
    setAmount(e.target.value);
  };

  const handleReset = useCallback(() => {
    setHistories((histories) => {
      const total = histories.reduce((total, item) => {
        return total + +item;
      }, 0);
      setMsg(total);
      return [];
    });
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Nhập số tiền..."
          value={amount}
          onChange={handleChange}
          min={0}
        />
        <button>Chuyển</button>
      </form>
      <hr></hr>
      <div>
        <h2>Lịch sử chuyển tiền: {total}</h2>
        <div>
          {histories.map((item, index) => {
            return <h3 key={index}>{item}</h3>;
          })}
        </div>
      </div>
      <ResetButton onClick={handleReset} />
      {msg && <p>Số dư cuối kỳ: {msg}</p>}
    </div>
  );
}

export default MoneyTransfer;
