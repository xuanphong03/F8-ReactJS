// import React from "react";
import React from "react";
import ReactDOM from "react-dom/client";
const rootEl = document.querySelector("#root");
// const h1 = React.createElement(
//   "h1",
//   {
//     id: "title",
//     className: "title",
//     onClick: () => {
//       console.log("Oke chưa?");
//     },
//   },
//   "Học ReactJS không khó"
// );
// const h2 = React.createElement("h2", null, "Học Front-End quá khó");
// const item = [...Array(100)].map((_, index) => {
//   return React.createElement("li", {}, `Item ${index + 1}`);
// });
// const menu = React.createElement("ul", { className: "menu" }, ...item, h2);
// const fragment = React.createElement(React.Fragment, null, h1, menu);

// ReactDOM.createRoot(rootEl).render(fragment);
const isAuth = false;
const status = true;
const users = ["Item 1", "Item 2", "Item 3"];
// const usersJSX = users.map((item, index) => <h3 key={index}>{item}</h3>);
const getMessage = () => {
  return <h3>F8 - Fullstack</h3>;
};
const Alert = () => {
  return <h3>Không ổn rồi đại vương ơi!</h3>;
};
class Product extends React.Component {
  render() {
    return <h3>Sản phẩm</h3>;
  }
}
const title = (
  <>
    <i>Học Front-End không khó</i> <b>Oke chưa?</b>
  </>
);
const div = (
  <div>
    {isAuth ? <h1>Welcome</h1> : <h1>Vui lòng đăng nhập</h1>}
    <h1 id="title" className={`${status ? "active" : ""} title`}>
      Học React không khó
    </h1>
    <h2>{title}</h2>
    <Alert />
    <Product />
    {users.map((item, index) => (
      <h3 key={index}>{item}</h3>
    ))}
    {getMessage()}
    <p>
      In publishing and graphic design, Lorem ipsum is a placeholder text
      commonly used to demonstrate the visual form of a document or a typeface
      without relying on meaningful content. Lorem ipsum may be used as a
      placeholder before the final copy is available.
    </p>
  </div>
);
ReactDOM.createRoot(rootEl).render(div);
