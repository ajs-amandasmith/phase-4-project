import React, { useState, useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";
import AddComment from "./AddComment";
import DeleteComment from "./DeleteComment";
import EditComment from "./EditComment";

function Fanart({ 
    user, 
    allFanart, 
    handleDeleteFanart
  }) 
  {
  const [fanartDeleted, setFanartDeleted] = useState(false);
  const [addComment, setAddComment] = useState(false);
  const [removedComment, setRemovedComment] = useState(false);
  const [comment, setComment] = useState("");
  const [editComment, setEditComment] = useState(false);
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(true); 
  const { id } = useParams();
  const [currentFanart, setCurrentFanart] = useState(null);

  useEffect(() => {
    setCurrentFanart(allFanart.find(art => art.id === parseInt(id, 10)))
    setIsLoading(false)
  }, [])

  if (fanartDeleted) {
    return <Redirect to="/my-fanart" />
  }

  function updateComments(comment) {
    const newFanart = currentFanart;
    newFanart.comments.push(comment);
    setCurrentFanart(newFanart);
  }

  function removeComment(commentId) {
    const newFanart = currentFanart
    const newComments = newFanart.comments.filter(comment => comment.id !== commentId)
    newFanart.comments = newComments
    setCurrentFanart(newFanart);

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
                    editComment={editComment}
                    setEditComment={setEditComment}
                  /> : null}
                {comment.user_id === user.id ? 
                  <DeleteComment 
                    comment={comment}
                    removeComment={removeComment}
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