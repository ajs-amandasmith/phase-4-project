import React, { useState } from "react";
import { Link } from "react-router-dom";

function MyFanart({ user, allFanart, handleDeleteFanart, myFanart }) {
  
  const displayFanart = myFanart.map(fanart => (
    <div key={fanart.id}>
      <h1>
        <Link to={`/my-fanart/${fanart.id}`}>
        Title: {fanart.title}
        </Link>
        </h1>
      <h3>Artist: {user.username}</h3>
      <p>Series: {fanart.series}</p>
      <p>Comments: {fanart.comments.length}</p>
      <button onClick={e => handleDeleteFanart(fanart.id)}>Delete</button>
    </div>
  ))
  return (
    <div>
      {displayFanart}
    </div>
  )
}

export default MyFanart;