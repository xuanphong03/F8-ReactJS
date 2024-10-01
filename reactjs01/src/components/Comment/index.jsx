import { createContext, useState } from "react";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";

export const CommentContext = createContext();

function Comments() {
  const [commentList, setCommentList] = useState([
    "Comment 1",
    "Comment 2",
    "Comment 3",
  ]);
  //   const [editingComment, setEditingComment] = useState(null);
  //   const [editingCommentIndex, setEditingCommentIndex] = useState(null);
  //   const handleCreateComment = (comment) => {
  //     setCommentList([...commentList, comment]);
  //   };

  //   const handleEditComment = (index) => {
  //     setEditingCommentIndex(index);
  //     const _editingComment = commentList[index];
  //     setEditingComment(_editingComment);
  //   };

  //   const handleUpdateComment = (updatedComment) => {
  //     if (updatedComment) {
  //       setCommentList((prev) =>
  //         prev.map((comment, index) => {
  //           return editingCommentIndex === index ? updatedComment : comment;
  //         })
  //       );
  //     } else {
  //       setCommentList((prev) =>
  //         prev.filter((_, index) => {
  //           return editingCommentIndex !== index;
  //         })
  //       );
  //     }
  //     setEditingComment(null);
  //     setEditingCommentIndex(null);
  //   };

  return (
    <div>
      <h2>Comments ({commentList.length})</h2>
      <CommentContext.Provider
        value={{
          commentList,
          setCommentList,
        }}
      >
        <CommentList />
        <CommentForm />
      </CommentContext.Provider>
    </div>
  );
}

export default Comments;
