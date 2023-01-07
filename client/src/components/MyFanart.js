import React from "react";
import { Link, useParams } from "react-router-dom";

function MyFanart({ user }) {
  const id = useParams();

  function handleClick(e, fanart) {
    // const id = useParams(fanart.id)
    console.log('e', e)
    console.log('id', id)
    console.log('fanart', fanart)
  }
  
  const displayFanart = user.fanarts.map(fanart => (
    <div key={fanart.id}>
      <h1>
        <Link to={`/my-fanart/${fanart.id}`}>
        Title: {fanart.title}
        </Link>
        </h1>
      <h3>Artist: {user.username}</h3>
      <p>Series: {fanart.series}</p>
      {/* <button onClick={e => handleClick(e, fanart)}>View</button> */}
    </div>
  ))
  return (
    <div>
      {displayFanart}
    </div>
  )
}

export default MyFanart;