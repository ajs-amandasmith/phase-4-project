import React, { useState } from "react";
import { useParams, Redirect } from "react-router-dom";

function Fanart({ user, allFanart, handleDeleteFanart }) {
  const [fanartDeleted, setFanartDeleted] = useState(false);
  const [addComment, setAddComment] = useState(false);
  const [comment, setComment] = useState("");
  const [errors, setErrors] = useState([]);
  const { id } = useParams();
  const [currentFanart, setCurrentFanart] = useState(allFanart.find(art => art.id === parseInt(id, 10)))

  if (fanartDeleted) {
    return <Redirect to="/my-fanart" />
  }

  function handleAddComment() {
    setAddComment(!addComment);
    setErrors([]);
  }

  function handleCommentSubmit(e) {
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
            updateComments(comment);
          })
        } else {
          r.json().then(err => setErrors(err.errors));
        }
      })
    setAddComment(false);
  }

  function updateComments(comment) {
    const newFanart = currentFanart;
    newFanart.comments.push(comment);
    setCurrentFanart(newFanart);
  }

  return (
    <div>
      <h3>Title: {currentFanart.title}</h3>
      <h4>Artist: {currentFanart.user.username}</h4>
      <img src={currentFanart.image} alt={currentFanart.description} width="75%" height="75%" ></img>
      <p>{currentFanart.description}</p>
      {currentFanart.user_id === user.id ? <button onClick={e => {
        handleDeleteFanart(parseInt(id)) 
        setFanartDeleted(true)}
      }>Delete Image?</button> : null}
      <div>
      {currentFanart.comments.length === 0 ? <p>No Comments!</p> : 
      <ul>
        {currentFanart.comments.map(function(comment){
          return (
            <div>
              <p key={comment.id}>{comment.comment}</p><br></br>
              <p>Commented By: {comment.user.username}</p>
              {comment.user_id === user.id ? <button>Edit Comment</button> : null}
              {comment.user_id === user.id ? <button>Delete Comment</button> : null}
            </div>
          )
        })}
      </ul>
      }
      {addComment ? null : <button onClick={handleAddComment}>Add a comment?</button>}
      {addComment ? 
        <form onSubmit={e => handleCommentSubmit(e)}>
          <label htmlFor="comment">Add Your Comment: </label><br></br>
          <input type="text" id="comment" value={comment} onChange={e => setComment(e.target.value)}></input>
          <input type="submit"></input>
          <button onClick={handleAddComment}>Cancel</button>
        </form> : 
        null
      }
       {errors.map(err => (
        <p key={err}>{err}</p>
      ))}
      </div>
    </div>
  )
}

export default Fanart;