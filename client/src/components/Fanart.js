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
    <div>
    {isLoading ? "Loading... " : <div>
      <h3>Title: {currentFanart.title}</h3>
      <h4>Artist: {currentFanart.user.username}</h4>
      <img src={currentFanart.image} alt={currentFanart.description} width="75%" height="75%" ></img>
      <p>{currentFanart.description}</p>
      <p>Series: {currentFanart.series}</p>
      {currentFanart.user_id === user.id ? <button onClick={e => {
        handleDeleteFanart(parseInt(id)) 
        setFanartDeleted(true)}
      }>Delete Fanart?</button> : null}
      {currentFanart.user_id === user.id ? <EditFanart 
        url={url}
        setUrl={setUrl}
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
        series={series}
        setSeries={setSeries}
        id={id}
        setCurrentFanart={setCurrentFanart}
      /> : null}
      <div>
        {comments.length === 0 ? <p>No Comments!</p> : 
        <ul>
          {comments.map(function(comment){
            return (
              <div key={comment.id}>
                <p>{comment.comment}</p><br></br>
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