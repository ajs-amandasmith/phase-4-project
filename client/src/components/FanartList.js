import React from "react";
import { Link, useParams } from "react-router-dom";

function FanartList({ listFanart }) {
  const params = useParams();

  const displayFanart = listFanart.map(art => (
    <div key={art.id}>
      <h1>
        <Link to={`/fanarts/${art.id}`}>
          Title: {art.title}
        </Link>
      </h1>
      <h3>Artist: {art.user.username}</h3>
      <p>Series: {art.series}</p>
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