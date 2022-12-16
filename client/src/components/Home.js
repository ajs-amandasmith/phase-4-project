import React from "react";
import Login from "./Login";

function Home({ user, onLogin }) {
  return (
    <div>
      <h1>Fanart Expo</h1>
      {user ? <h2>Welcome {user.username}</h2> : <Login onLogin={onLogin}></Login>}
      
    </div>
  )
}

export default Home;