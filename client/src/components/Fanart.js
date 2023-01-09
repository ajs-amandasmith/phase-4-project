import React, { useState } from "react";
import { useParams, Redirect } from "react-router-dom";

function Fanart({ user, allFanart, handleDeleteFanart }) {
  const [fanartDeleted, setFanartDeleted] = useState(false);
  const { id } = useParams();
  const currentFanart = allFanart.find(art => art.id === parseInt(id, 10))

  if (fanartDeleted) {
    return <Redirect to="/my-fanart" />
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
          return (<p key={comment.id}>{comment.comment}<br></br>Commented By: {comment.user.username}</p>)
        })}
      </ul>
      }
      <button>Add a comment?</button>
      </div>
    </div>
  )
}

export default Fanart;