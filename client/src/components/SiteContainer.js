import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import SignupForm from "./SignupForm";
import FanartList from "./FanartList";
// import "react-bootstrap/dist/react-bootstrap.min.js";


function SiteContainer({ onLogin, user }) {
  const [allFanart, setAllFanart] = useState(null);

  useEffect(() => {
    fetch("/fanarts")
      .then(r => r.json())
      .then(art => setAllFanart(art));
  }, [])

  // console.log('fanart', allFanart);

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
        <Route path="/fanart">
          <FanartList listFanart={allFanart} />
        </Route>
        <Route path="/my-fanart">
          <FanartList />
        </Route>
      </Switch>
    </div>
  )
}

export default SiteContainer;