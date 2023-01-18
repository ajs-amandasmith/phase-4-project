import React from "react";
import Login from "./Login";

function Home({ user, onLogin }) {
  return (
    <div>
      {user ? <h2>Welcome {user.username}!</h2> : <Login onLogin={onLogin}></Login>}
      <h3>Where you can share your own fanart and see what others have created!</h3>
      <ul>
        <li>Click Fanart to see what's on display</li>
        <li>Click Add Fanart to add your own artwork</li>
        <li>Click My Fanart to see your artwork</li>
        <li>Leave a comment on a piece you enjoy and show your love</li>
      </ul>
    </div>
  )
}

export default Home;