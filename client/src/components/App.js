import '../App.css';
import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import SiteContainer from "./SiteContainer";


function App() {
  const [user, setUser] = useState(null);
  const [userFanart, setUserFanart] = useState([]);
  const [allFanart, setAllFanart] = useState([]);
  const [myFanart, setMyFanart] = useState([]);

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setUser(user)
        });
      }
    })
  }, [])

  useEffect(() => {
    fetch("/fanarts")
      .then(r => r.json())    
      .then(art => {
        setAllFanart(art)
        myFanartSetup(art)
      });
  // eslint-disable-next-line  
  }, [user])

  function myFanartSetup(art) {
    const myList = art.filter(fanart => fanart.user_id === user.id);
    setMyFanart(myList);
  }

  function updateUserFanart(fanart) {
    const newUser = user;
    newUser.fanarts.push(fanart);
    setUser(newUser);
  }

  function removeUserFanart(fanartId) {
    const newUser = user;
    const newFanarts = newUser.fanarts.filter(fanart => fanart.id !== fanartId)
    newUser.fanarts = newFanarts
    setUser(newUser)
    setUserFanart(newUser.fanarts)
  }

  return (
    <div className="container">
      {user ? <NavBar user={user} setUser={setUser} /> : null}
      <h1>Fanart Expo</h1>
      <SiteContainer 
        onLogin={setUser} 
        user={user}
        userFanart={userFanart}
        updateUserFanart={updateUserFanart} 
        removeUserFanart={removeUserFanart}
        allFanart={allFanart}
        setAllFanart={setAllFanart}
        myFanart={myFanart}
        setMyFanart={setMyFanart}
      />
    </div>
  );
}

export default App;
