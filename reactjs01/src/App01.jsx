import Header from "./components/Header";
import Input from "./components/Input";

function App() {
  //   const handleClick = () => {
  //     console.log("Click me");
  //   };
  //   const handleClick2 = (value) => {
  //     console.log(value);
  //   };
  const handleChange = (e) => {
    console.log("value: ", e.target.value);
  };
  const user = {
    name: "Hoàng An",
    email: "hoangan.web@gmail.com",
  };
  return (
    <div>
      <Header title="F8" {...user}>
        lorem
      </Header>
      <h1>Đây là trang chủ</h1>
      <Input onChange={handleChange} />
      {/* 
      <button onClick={handleClick}>Click me</button>
      <button onClick={() => handleClick2("F8")}>Click me 2</button> */}
    </div>
  );
}

export default App;
