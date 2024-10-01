import { useEffect, useState } from "react";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const getPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    setPosts(data);
    setIsLoading(false);
  };

  const handleLoadPosts = () => {
    console.log("Loading post");
    getPosts();
  };

  const handleChangeValue = (e) => {
    setName(e.target.value);
  };
  // Công việc 1
  // Công việc 2
  // Công việc 3
  // ==> Side Effect
  // Call API, Xử lý liên quan đến timer (setInterval, setTimeout), các công việc xử lý DOM, các công việc liên đến localStorage
  useEffect(() => {
    getPosts();
  }, []);

  useEffect(() => {
    document.title = name;
    console.log("effect: ", name);

    return () => {
      // clean up
      console.log("clean up: ", name);
    };
  }, [name]);

  return (
    <div>
      {console.log("ui: ", name)}
      <h1>Posts</h1>
      <div>
        <input
          placeholder="Họ tên..."
          value={name}
          onChange={handleChangeValue}
          type="text"
        />
        {name}
      </div>
      <button onClick={handleLoadPosts}>Load Posts</button>
      <div>
        {isLoading ? (
          <h3>Loading</h3>
        ) : (
          posts.map(({ title, id }) => <p key={id}>{title}</p>)
        )}
      </div>
    </div>
  );
}

export default Posts;

/**
 * useEffect(callback, dependencies?):
 * - callback là hàm thực thi các side effect
 * - dependencies: điều kiện để callback thực thi
 * + null, undefined ==> Component re-render callback sẽ chạy
 * + [] ==> Component render lần đầu thì callback sẽ chạy
 * + [bien1,bien2,bien3] ===> khi 1 trong các biến thay đổi thì callback sẽ chạy
 */
