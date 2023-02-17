import '../App.css';
import React, { useState, useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";
import AddComment from "./AddComment";
import DeleteComment from "./DeleteComment";
import EditComment from "./EditComment";
import EditFanart from "./EditFanart";

function Fanart({ user, handleDeleteFanart }) {
  const [fanartDeleted, setFanartDeleted] = useState(false);
  const [addComment, setAddComment] = useState(false);
  const [removedComment, setRemovedComment] = useState(false);
  const [comment, setComment] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(true); 
  const { id } = useParams();
  const [currentFanart, setCurrentFanart] = useState(null);
  const [comments, setComments] = useState([]);
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [series, setSeries] = useState("");

  useEffect(() => {
    fetch(`/fanarts/${id}`)
      .then(r => {
        if(r.ok) {
          r.json().then(fanart => {
            setCurrentFanart(fanart);
            setIsLoading(false);
            setComments(fanart.comments);
            setUrl(fanart.image);
            setTitle(fanart.title);
            setDescription(fanart.description);
            setSeries(fanart.series);
        })
        } else {
          r.json().then(err => setErrors(err))
        }
      })
  // eslint-disable-next-line    
  }, [])

  if (fanartDeleted) {
    return <Redirect to="/my-fanart" />
  }

  function updateComments(commentUpdate, op) {
    let newComments;
    switch(op) {
      case "add":
        newComments = [...comments, commentUpdate]
        setComments(newComments);
        break;
      case "delete":
        newComments = comments.filter(comment => comment.id !== commentUpdate.id)
        setComments(newComments);
        break;
      case "edit":
        newComments = comments.map(comment => {
          if (comment.id === commentUpdate.id) return commentUpdate;
          return comment;
        })
        setComments(newComments);
        break;
      default:
    }
  }
  
  return (
    <div className="fanart-item">
    {isLoading ? "Loading... " : <div>
      <h3 className="fanart-title">Title: {currentFanart.title}</h3>
      <img className="fanart-image" src={currentFanart.image} alt={currentFanart.description}></img>
      <p className="fanart-series">Series: {currentFanart.series}</p>
      <div className="description">
        <p className="fanart-description-title">Description:</p>
        <p className="fanart-description">{currentFanart.description}</p>
      </div>
          <AddComment
          addComment={addComment}
          setAddComment={setAddComment} 
          comment={comment}
          setComment={setComment}
          user={user}
          currentFanart={currentFanart}
          updateComments={updateComments}
        />
      <div className="fanart-comments">
        {comments.length === 0 ? <p>No Comments!</p> : 
        <ul>
          {comments.map(function(comment){
            return (
              <div className="fanart-comment" key={comment.id}>
                <p className="user-comment">{comment.comment}</p><br></br>
                <hr></hr>
                <p>Commented By: {comment.user.username}</p>
                <hr></hr>
                {comment.user.id === user.id ? 
                  <EditComment 
                    comment={comment} 
                    user={user}
                    currentFanart={currentFanart}
                    updateComments={updateComments}
                  /> : null}
                {comment.user.id === user.id ? 
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
        {errors.map(err => (
          <p key={err}>{err}</p>
        ))}
      </div>
    </div>}
    </div>
  )
}

export default Fanart;