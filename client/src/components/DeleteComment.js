import '../App.css';
import React from "react";

function DeleteComment({ comment, updateComments, setRemovedComment, removedComment }) {

  function handleDeleteComment(commentId) {
    fetch(`/comments/${commentId}`, {
      method: "DELETE"
    })
      .then(updateComments(comment, "delete"))
      setRemovedComment(!removedComment)
  }

  return (
    <div>
      <button className="comment-delete" onClick={e => handleDeleteComment(comment.id)}>Delete Comment?</button>
    </div>
  )
}

export default DeleteComment;