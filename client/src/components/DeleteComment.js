import React from "react";

function DeleteComment({ comment, removeComment, setRemovedComment, removedComment }) {

  function handleDeleteComment(commentId) {
    fetch(`/comments/${commentId}`, {
      method: "DELETE"
    })
      .then(removeComment(commentId))
      setRemovedComment(!removedComment)
  }

  return (
    <div>
      <button onClick={e => handleDeleteComment(comment.id)}>Delete Comment</button>
    </div>
  )
}

export default DeleteComment;