import React, { useState, useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";
import AddComment from "./AddComment";
import DeleteComment from "./DeleteComment";
import EditComment from "./EditComment";

function Fanart({ user, handleDeleteFanart }) {
  const [fanartDeleted, setFanartDeleted] = useState(false);
  const [addComment, setAddComment] = useState(false);
  const [removedComment, setRemovedComment] = useState(false);
  const [comment, setComment] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(true); 
  const { id } = useParams();
  const [currentFanart, setCurrentFanart] = useState(null);


  useEffect(() => {
    fetch(`/fanarts/${id}`)
      .then(r => {
        if(r.ok) {
          r.json().then(fanart => {
            setCurrentFanart(fanart)
            setIsLoading(false)
        })
        } else {
          r.json().then(err => setErrors(err))
        }
      })    
  }, [])

  if (fanartDeleted) {
    return <Redirect to="/my-fanart" />
  }

  function updateComments(commentUpdate, op) {
    let newFanart = currentFanart;
    let newComments;
    switch(op) {
      case "add":
        newFanart.comments.push(commentUpdate);
        setCurrentFanart(newFanart);
        break;
      case "delete":
        newComments = newFanart.comments.filter(comment => comment.id !== commentUpdate.id)
        newFanart.comments = newComments
        setCurrentFanart(newFanart);
        break;
      case "edit":
        console.log(newFanart);
        newComments = newFanart.comments.map(comment => {
          if (comment.id === commentUpdate.id) return commentUpdate;
          return comment;
        })
        console.log(commentUpdate, op)
        newFanart.comments = newComments;
        console.log(newFanart);
        setCurrentFanart(newFanart);
        break;
    }
    
  }

  function removeComment(commentId) {
    
    
    
  }

  return (
    <div>
    {isLoading ? "Loading... " : <div>
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
                {comment.user_id === user.id ? 
                  <EditComment 
                    comment={comment} 
                    user={user}
                    currentFanart={currentFanart}
                    updateComments={updateComments}
                  /> : null}
                {comment.user_id === user.id ? 
                  <DeleteComment 
                    comment={comment}
                    updateComments={updateComments}
                    setRemovedComment={setRemovedComment}
                    removedComment={removedComment}
                  /> : null}
              </div>
            )
          })}
        </ul>
        }
        <AddComment
          addComment={addComment}
          setAddComment={setAddComment} 
          comment={comment}
          setComment={setComment}
          user={user}
          currentFanart={currentFanart}
          updateComments={updateComments}
        />
        {errors.map(err => (
          <p key={err}>{err}</p>
        ))}
      </div>
    </div>}
    </div>
  )
}

export default Fanart;