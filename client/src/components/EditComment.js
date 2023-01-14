import React, { useState } from "react";

function EditComment({ comment, editComment, setEditComment }) {
  
  const [commentValue, setCommentValue] = useState(comment.comment);
  const [errors, setErrors] = useState([]);
  console.log(comment)

  function handleEditComment() {
    setEditComment(!editComment)
  }

  function handleSubmitForm(commentId) {
    setErrors([]);
    fetch(`/comments/${commentId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        comment: comment
      })
    })
      .then(r => {
        if (r.ok) {
          r.json().then(comment => console.log(comment))
        } else {
          r.json().then(err => setErrors(err))
        }
      })
  }


  return (
    <div>
      {editComment ? null : <button onClick={handleEditComment}>Edit Comment</button>}
      {editComment ? <form onSubmit={e => handleSubmitForm(comment.id)}>
        <input 
          type="text"
          id="edit-comment"
          value={commentValue}
          onChange={e => setCommentValue(e.target.value)} 
        />
        <input type="submit" />
        <br></br>
        <button onClick={handleEditComment}>Cancel</button>
      {errors.map(err => (
        <p key={err}>{err}</p>
      ))}
      </form> : null}
    </div>
  )
}

export default EditComment;