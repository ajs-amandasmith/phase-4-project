import React from "react";

function MyFanart({ user }) {
  console.log(user.fanarts);
  const displayFanart = user.fanarts.map(fanart => (
    <div>
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