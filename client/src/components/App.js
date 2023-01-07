import '../App.css';
import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import SiteContainer from "./SiteContainer";


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, [])

  function updateUserFanart(fanart) {
    console.log('fanart', fanart)
    const newUser = user;
    console.log('newUser', newUser)
    newUser.fanarts.push(fanart);
    setUser(newUser);
  }

  return (
    <div className="container">
      {user ? <NavBar user={user} setUser={setUser} /> : null}
      <h1>Fanart Expo</h1>
      <SiteContainer 
        onLogin={setUser} 
        user={user}
        updateUserFanart={updateUserFanart} 
      />
    </div>
  );
}

export default App;
