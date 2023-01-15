import React, { useState } from "react";

function EditCommentForm({ handleEditComment, comment, updateComments }) {
  const [commentValue, setCommentValue] = useState(comment.comment);

  function handleSubmitForm(e) {
    e.preventDefault();
    fetch(`/comments/${comment.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        comment: commentValue
      })
    })
      .then(r => r.json())
      .then(comment => {
        updateComments(comment, "edit")
        handleEditComment(false);
      })
  }

  return (
    <div>
      <form onSubmit={e => handleSubmitForm(e)}>
        <input 
          type="text"
          id="edit-comment"
          value={commentValue}
          onChange={e => setCommentValue(e.target.value)} 
        />
        <input type="submit"></input>
        <br></br>
        <button onClick={handleEditComment}>Cancel</button>
      </form>
    </div>
  )
}

export default EditCommentForm;