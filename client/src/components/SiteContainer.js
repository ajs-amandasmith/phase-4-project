import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import SignupForm from "./SignupForm";
// import "react-bootstrap/dist/react-bootstrap.min.js";


function SiteContainer({ onLogin, user }) {
  console.log('conatiner', onLogin)
  return (
    <div className="container">
      <Switch>
        <Route exact path="/">
          <Home user={user} onLogin={onLogin} />
        </Route>
        <Route path="/login">
          <Login onLogin={onLogin} user={user} />
        </Route>
        <Route path="/signup">
          <SignupForm onLogin={onLogin} user={user} />
        </Route>
      </Switch>
    </div>
  )
}

export default SiteContainer;