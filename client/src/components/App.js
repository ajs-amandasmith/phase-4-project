import '../App.css';
import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import SiteContainer from "./SiteContainer";


function App() {
  const [user, setUser] = useState(null);
  const [userFanart, setUserFanart] = useState([]);
  const [myFanartList, setMyFanartList] = useState(false);

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setUser(user)
          setUserFanart(user.fanarts)
        });
      }
    });
  }, [])

  function updateUserFanart(fanart) {
    const newUser = user;
    newUser.fanarts.push(fanart);
    setUser(newUser);
  }

  function removeUserFanart(fanartId) {
    const newUser = user;
    console.log(user.fanarts)
    console.log('id', fanartId)
    const newFanarts = newUser.fanarts.filter(fanart => fanart.id !== fanartId)
    newUser.fanarts = newFanarts
    console.log('new', newFanarts)
    setUser(newUser)
    setUserFanart(newUser.fanarts)
  }

  return (
    <div className="container">
      {user ? <NavBar user={user} setUser={setUser} setMyFanartList={setMyFanartList} /> : null}
      <h1>Fanart Expo</h1>
      <SiteContainer 
        onLogin={setUser} 
        user={user}
        userFanart={userFanart}
        updateUserFanart={updateUserFanart} 
        removeUserFanart={removeUserFanart}
        myFanartList={myFanartList}
      />
    </div>
  );
}

export default App;
