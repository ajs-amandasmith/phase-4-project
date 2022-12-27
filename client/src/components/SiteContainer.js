import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import SignupForm from "./SignupForm";
import FanartList from "./FanartList";
import MyFanart from "./MyFanart";
// import "react-bootstrap/dist/react-bootstrap.min.js";


function SiteContainer({ onLogin, user, myFanart }) {
  const [allFanart, setAllFanart] = useState(null);

  useEffect(() => {
    fetch("/fanarts")
      .then(r => r.json())
      .then(art => setAllFanart(art));
  }, [])

  // useEffect(() => {
  //   if(user) {
  //     fetch(`/fanarts/${user.id}`).then(r => {
  //       if(r.ok) {
  //         r.json().then(art => console.log(art));
  //       }
  //     })
  //   }
  // }, [user])


  // console.log('fanart', allFanart);
  // console.log(user.id)

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
          <MyFanart user={user} />
        </Route>
      </Switch>
    </div>
  )
}

export default SiteContainer;