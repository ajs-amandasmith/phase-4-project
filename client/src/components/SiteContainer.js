import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import SignupForm from "./SignupForm";
import FanartList from "./FanartList";
import MyFanart from "./MyFanart";
import AddFanartForm from "./AddFanartForm";
import Fanart from "./Fanart";
import MyComments from "./MyCommentedFanart";

function SiteContainer({ onLogin, user, updateUserFanart, removeUserFanart, allFanart, setAllFanart, myFanart, setMyFanart }) {

  function handleDeleteFanart(id) {
    fetch(`/fanarts/${id}`, {
      method: "DELETE"
    })
      .then(removeUserFanart(id))
  }

  function updateMyFanart(newFanart) {
    const myNewFanart = [...myFanart, newFanart]
    const allNewFanart = [...allFanart, newFanart]
    setMyFanart(myNewFanart);
    setAllFanart(allNewFanart);    
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
            user={user} 
            handleDeleteFanart={handleDeleteFanart}
          />
        </Route>
        <Route path="/fanarts">
          <FanartList allFanart={allFanart} />
        </Route>
        <Route path="/my-fanart/:id">
          <Fanart 
            user={user} 
            allFanart={allFanart}
            handleDeleteFanart={handleDeleteFanart}
          /> 
        </Route>
        <Route path="/my-fanart">
          <MyFanart 
            user={user} 
            allFanart={allFanart}
            handleDeleteFanart={handleDeleteFanart}
            myFanart={myFanart}
          />
        </Route>
        <Route path="/add-fanart">
          <AddFanartForm 
            updateUserFanart={updateUserFanart} 
            user={user} 
            updateMyFanart={updateMyFanart}
          />
        </Route>
        <Route>
          <MyComments />
        </Route>
      </Switch>
    </div>
  )
}

export default SiteContainer;