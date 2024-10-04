import Todo from "./components/Todo";
import Counter from "./components/Counter";
import Post from "./components/Post";

function App() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <Todo />
      <Counter />
      <Post />
    </div>
  );
}

export default App;
