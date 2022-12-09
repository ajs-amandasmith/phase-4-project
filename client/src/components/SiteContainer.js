import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import SignupForm from "./SignupForm";
import "react-bootstrap/dist/react-bootstrap.min.js";


function SiteContainer() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignupForm} />
      </Switch>
    </div>
  )
}

export default SiteContainer;