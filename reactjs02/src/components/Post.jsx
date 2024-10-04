import { useEffect } from "react";
import { useDispatch, useSelector } from "../hooks";
import { getPosts } from "../store/middlewares/postMiddleware";

function Post() {
  const dispatch = useDispatch();
  const postList = useSelector((state) => state.postList);

  useEffect(() => {
    dispatch(getPosts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <ul>
        {postList.map((todoItem, index) => (
          <li key={todoItem.id}>
            {index + 1}. {todoItem.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Post;
