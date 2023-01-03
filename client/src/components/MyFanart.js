import React from "react";

function MyFanart({ user }) {
  console.log('fanarts', user.fanarts);
  const displayFanart = user.fanarts.map(fanart => (
    <div key={fanart.id}>
      <h1>Title: {fanart.title}</h1>
      <h3>Artist: {user.username}</h3>
      <p>Series: {fanart.series}</p>
    </div>
  ))
  return (
    <div>
      {displayFanart}
    </div>
  )
}

export default MyFanart;