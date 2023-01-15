import React from "react";
import Home from "./Home";
import Login from "./Login";

function Logout({ user }) {
  return (
    <div>
      {user ? <Home user={user}>Home</Home> : <Login>Login</Login> }
    </div>
  )
}

export default Logout;