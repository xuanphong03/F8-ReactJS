import PropTypes from "prop-types";
import { Fragment, useContext, useState } from "react";
import { CommentContext } from ".";
import { AppContext } from "../../App06";

CommentForm.propTypes = {
  onSubmit: PropTypes.func,
  onUpdate: PropTypes.func,
  editingComment: PropTypes.string,
};

function CommentForm() {
  const { message, setMessage } = useContext(AppContext);
  const { setCommentList } = useContext(CommentContext);
  const [comment, setComment] = useState("");

  const handleChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!comment) return alert("Vui lòng nhập comment");
    setCommentList((prev) => [...prev, comment]);
    setComment("");
  };

  return (
    <Fragment>
      <h1>{message}</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          name=""
          id=""
          value={comment}
          onChange={handleChange}
          placeholder="Nhập comment..."
        ></textarea>
        <button>Gửi</button>
      </form>
      <button
        onClick={() => {
          setMessage("Học React quá khó");
        }}
      >
        Change message
      </button>
    </Fragment>
  );
}

export default CommentForm;
