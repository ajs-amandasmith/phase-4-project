import React, { useState } from "react";
import { Link } from "react-router-dom";

function MyFanart({ user, removeUserFanart, userFanart }) {

  function handleDelete(id) {
    console.log("id", id)
    fetch(`/fanarts/${id}`, {
      method: "DELETE"
    })
      .then(removeUserFanart(id))
  }
  
  const displayFanart = userFanart.map(fanart => (
    <div key={fanart.id}>
      <h1>
        <Link to={`/my-fanart/${fanart.id}`}>
        Title: {fanart.title}
        </Link>
        </h1>
      <h3>Artist: {user.username}</h3>
      <p>Series: {fanart.series}</p>
      <button onClick={e => handleDelete(fanart.id)}>Delete</button>
    </div>
  ))
  return (
    <div>
      {displayFanart}
    </div>
  )
}

export default MyFanart;