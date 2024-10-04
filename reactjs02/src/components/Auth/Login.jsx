import { useState } from "react";

function Login() {
  const [data, setData] = useState({});

  const handleChangeData = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://api.escuelajs.co/api/v1/auth/login",
        {
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify(data),
        }
      );
      const token = await response.json();
      localStorage.setItem("jwt", JSON.stringify(token));
    } catch (error) {
      throw new Error("Failed to fail");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={data.email ?? ""}
          onChange={handleChangeData}
          placeholder="Email..."
          className="px-2 border border-solid border-black rounded"
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          value={data.password ?? ""}
          onChange={handleChangeData}
          placeholder="Password..."
          className="px-2 border border-solid border-black rounded"
        />
      </div>
      <button className="px-2 py-1 bg-blue-500 text-white rounded">
        Submit
      </button>
    </form>
  );
}

export default Login;
