import { Fragment, useState } from "react";

function Form() {
  const [form, setForm] = useState({});
  const [users, setUsers] = useState([]);
  const [errorsMessage, setErrorsMessage] = useState({});
  const handleChangeValue = (e) => {
    const { value, name } = e.target;
    if (value && errorsMessage[name]) {
      delete errorsMessage[name];
    }
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!form.name) {
      errors.name = "Vui lòng nhập tên";
    }
    if (!form.email) {
      errors.email = "Vui lòng nhập email";
    }
    if (!Object.keys(errors).length) {
      setUsers((prevUsers) => [...prevUsers, form]);
      setForm({});
    }
    setErrorsMessage(errors);
  };

  const handleRemoveUser = (_index) => {
    if (window.confirm("Oke chưa?")) {
      setUsers((prevUsers) => {
        return prevUsers.filter((_, index) => index !== _index);
      });
    }
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            onChange={handleChangeValue}
            type="text"
            id="name"
            placeholder="Name..."
            name="name"
            value={form.name ?? ""}
          />
          {errorsMessage.name && <p>{errorsMessage.name}</p>}
        </div>
        <div>
          <label>Email</label>
          <input
            onChange={handleChangeValue}
            type="text"
            id="email"
            placeholder="Email..."
            name="email"
            value={form.email ?? ""}
          />
          {errorsMessage.email && <p>{errorsMessage.email}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
      <hr></hr>
      <h2>Danh sách người dùng</h2>
      {users.map(({ name, email }, index) => (
        <p key={index}>
          {name} - {email}
          <button type="button" onClick={() => handleRemoveUser(index)}>
            &times;
          </button>
        </p>
      ))}
    </Fragment>
  );
}

export default Form;
