import '../App.css';
import React from "react";
import { Link } from "react-router-dom";

function FanartList({ allFanart }) {

  const displayFanart = allFanart.map(art => (
    <div key={art.id} className="list-item">
      <h1 className="list-title">
        <Link to={`/fanarts/${art.id}`}>
          Title: {art.title}
        </Link>
      </h1>
      <h3 className="list-artist">Artist: {art.user.username}</h3>
      <p className="list-series">Series: {art.series}</p>
      <p>Comments: {art.comments.length}</p>
    </div>
    
  ))
  return(
    <div>
      {displayFanart}
    </div>
  )
}

export default FanartList;