import '../App.css';
import React from "react";

function AddComment({ 
  addComment, 
  setAddComment, 
  comment, 
  setComment, 
  user, 
  currentFanart, 
  updateComments, 
  setErrors }) {

  function handleAddComment() {
    setAddComment(!addComment);
  }

  function handleSubmitForm(e) {
    e.preventDefault();
    fetch("/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        comment: comment,
        user_id: user.id,
        fanart_id: currentFanart.id
      })
    })
      .then(r => {
        if(r.ok) {
          r.json().then(comment => {
            setComment("");
            updateComments(comment, "add");
          })
        } else {
          r.json().then(err => setErrors(err.errors));
        }
      })
    setAddComment(false);
  }
  
  return (
    <div>
      {addComment ? null : <button className="fanart-add-comment" onClick={handleAddComment}>Add a comment?</button>}
      {addComment ? 
        <form onSubmit={e => handleSubmitForm(e)}>
          <label htmlFor="comment">Add Your Comment: </label><br></br>
          <input type="text" id="comment" value={comment} onChange={e => setComment(e.target.value)}></input>
          <input type="submit"></input>
          <button onClick={handleAddComment}>Cancel</button>
        </form> : 
        null
      }
    </div>
  )
}

export default AddComment;