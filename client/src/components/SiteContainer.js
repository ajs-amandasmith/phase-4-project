import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";

function SiteContainer() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default SiteContainer;