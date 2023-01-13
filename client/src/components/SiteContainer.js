import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import SignupForm from "./SignupForm";
import FanartList from "./FanartList";
import MyFanart from "./MyFanart";
import AddFanartForm from "./AddFanartForm";
import Fanart from "./Fanart";

function SiteContainer({ onLogin, user, myFanartList, updateUserFanart, removeUserFanart }) {
  const [allFanart, setAllFanart] = useState(null);
  const [currentFanart, setCurrentFanart] = useState(null);

  function handleCurrentFanart(id) {
    setCurrentFanart(allFanart.find(art => art.id === parseInt(id, 10)))
  }

  console.log("current", currentFanart);

  useEffect(() => {
    fetch("/fanarts")
      .then(r => r.json())
      .then(art => setAllFanart(art));
  }, [])

  function handleDeleteFanart(id) {
    fetch(`/fanarts/${id}`, {
      method: "DELETE"
    })
      .then(removeUserFanart(id))
  }

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
        <Route path="/fanarts/:id">
          <Fanart 
            allFanart={allFanart} 
            myFanartList={myFanartList} 
            user={user} 
            handleCurrentFanart={handleCurrentFanart}
            currentFanart={currentFanart}
            setCurrentFanart={setCurrentFanart}
          />
        </Route>
        <Route path="/fanarts">
          <FanartList listFanart={allFanart} />
        </Route>
        <Route path="/my-fanart/:id">
          <Fanart 
            user={user} 
            allFanart={allFanart}
            handleDeleteFanart={handleDeleteFanart}
            myFanartList={myFanartList}
            handleCurrentFanart={handleCurrentFanart} 
            currentFanart={currentFanart}
            setCurrentFanart={setCurrentFanart}
          /> 
        </Route>
        <Route path="/my-fanart">
          <MyFanart 
            user={user} 
            allFanart={allFanart}
            handleDeleteFanart={handleDeleteFanart}
          />
        </Route>
        <Route path="/add-fanart">
          <AddFanartForm updateUserFanart={updateUserFanart} />
        </Route>
      </Switch>
    </div>
  )
}

export default SiteContainer;