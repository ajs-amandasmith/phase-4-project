import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Login from"./Login";
import "react-bootstrap/dist/react-bootstrap.min.js";


function SiteContainer() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  )
}

export default SiteContainer;