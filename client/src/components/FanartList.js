import '../App.css';
import React from "react";
import { Link } from "react-router-dom";

function FanartList({ allFanart }) {

  const displayFanart = allFanart.map(art => (
    <div key={art.id} className="list-item">
      <h1 className="list-title">Title: {art.title}</h1>
      <Link to={`/fanarts/${art.id}`}>
        <img className="list-image" src={art.image} alt={art.description}></img>
      </Link>
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