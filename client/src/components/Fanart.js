import React, { useState } from "react";
import { useParams, Redirect } from "react-router-dom";

function Fanart({ user, allFanart, handleDeleteFanart }) {
  const [fanartDeleted, setFanartDeleted] = useState(false);
  const { id } = useParams();

  if (fanartDeleted) {
    return <Redirect to="/my-fanart" />
  }

  const currentFanart = allFanart.find(art => art.id === parseInt(id, 10))

  return (
    <div>
      <h3>Title: {currentFanart.title}</h3>
      <h4>Artist: {currentFanart.user.username}</h4>
      <img src={currentFanart.image} alt={currentFanart.description} width="500" ></img>
      <p>{currentFanart.description}</p>
      {currentFanart.user_id === user.id ? <button onClick={e => {
        handleDeleteFanart(parseInt(id)) 
        setFanartDeleted(true)}
      }>Delete Image</button> : null}
    </div>
  )
}

export default Fanart;