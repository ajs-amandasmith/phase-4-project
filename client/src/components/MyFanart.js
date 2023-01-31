import '../App.css';
import React from "react";
import { Link } from "react-router-dom";

function MyFanart({ user, handleDeleteFanart, myFanart }) {

  console.log(myFanart)
  
  const displayFanart = myFanart.map(fanart => (
    <div key={fanart.id} className="list-item">
      <h1 className="list-title">Title: {fanart.title}</h1>
      <h3 className="list-artist">Artist: {user.username}</h3>
      <Link to={`/my-fanart/${fanart.id}`}>
        <img className="list-image" src={fanart.image} alt={fanart.description}></img>
      </Link>
      <p className="list-series">Series: {fanart.series}</p>
      <p>Comments: {fanart.comments.length}</p>
      <button onClick={e => handleDeleteFanart(fanart.id)} className="list-delete">Delete?</button>
    </div>
  ))
  return (
    <div>
      {displayFanart}
    </div>
  )
}

export default MyFanart;