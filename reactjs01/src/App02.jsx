import User from "./components/User";

function App() {
  const users = [
    {
      id: 1,
      name: "User 1",
      email: "user1@gmail.com",
    },
    {
      id: 2,
      name: "User 2",
      email: "user2@gmail.com",
    },
    {
      id: 3,
      name: "User 3",
      email: "user3@gmail.com",
    },
  ];
  return (
    <div>
      <h1>User List</h1>
      {users.map(({ id, ...rest }) => (
        <User key={id} {...rest} />
      ))}
    </div>
  );
}

export default App;
