import PropTypes from "prop-types";
import { useContext } from "react";
import { CommentContext } from ".";

CommentList.propTypes = {
  onEdit: PropTypes.func,
  commentList: PropTypes.array,
};

function CommentList() {
  const { commentList } = useContext(CommentContext);

  return (
    <div>
      {commentList.map((comment, index) => (
        <div key={index}>
          <p>{comment}</p>
          <button>Sửa</button>
        </div>
      ))}
    </div>
  );
}

export default CommentList;
