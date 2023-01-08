import React, { useState } from "react";
import { useParams, Redirect } from "react-router-dom";

function Fanart({ user, userFanart, allFanart, handleDeleteFanart }) {
  const [fanartDeleted, setFanartDeleted] = useState(false);
  const { id } = useParams();

  if (fanartDeleted) {
    return <Redirect to="/my-fanart" />
  }

  const currentFanart = () => { 
    let fanart;
    if(userFanart) {
      fanart = userFanart.find(art => (art.id === parseInt(id, 10)))
      return fanart
    } else {
      fanart = allFanart.find(art => art.id === parseInt(id))
      return fanart
    }
  }

  const showFanart = currentFanart()

  return (
    <div>
      <h3>Title: {showFanart.title}</h3>
      <h4>Artist: {userFanart ? user.username : showFanart.user.username }</h4>
      <img src={showFanart.image} alt={showFanart.description} width="500" ></img>
      <p>{showFanart.description}</p>
      {userFanart ? <button onClick={e => {
        handleDeleteFanart(parseInt(id)) 
        setFanartDeleted(true)}
      }>Delete Image</button> : null}
    </div>
  )
}

export default Fanart;