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
    const newFanart = myFanart
    const newAll = [...allFanart, fanart]
    setMyFanart(newFanart);
    setAllFanart(newAll);
  }

  function removeUserFanart(fanartId) {
    const newFanart = myFanart.filter(fanart => fanart.id !== fanartId)
    const newAll = allFanart.filter(art => art.id !== fanartId);
    setMyFanart(newFanart)
    setAllFanart(newAll);
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
