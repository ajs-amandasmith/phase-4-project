import React from "react";

function FanartList({ listFanart }) {
  const displayFanart = listFanart.map(art => (
    <div>
      <h1>Title: {art.title}</h1>
      <h3>Artist: {art.user.username}</h3>
      <p>Series: {art.series}</p>
    </div>
    
  ))
  return(
    <div>
      {displayFanart}
    </div>
  )
}

export default FanartList;